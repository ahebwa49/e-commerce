const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");
const { transport, makeANiceEmail } = require("../mail");
const { hasPermission } = require("../utils");
const stripe = require("../stripe");

const Mutations = {
  createBlogPost(root, args, context, info) {
    return context.prisma.createBlogPost({
      title: args.title,
      proTipOne: args.proTipOne,
      proTipTwo: args.proTipTwo,
      description: args.description
    });
  },
  async createUser(root, args, context, info) {
    const user = await context.prisma.createUser({
      data: {
        ...args
      }
    });
    return user;
  },
  async createItem(root, args, context, info) {
    if (!context.request.userId) {
      throw new Error("You must be logged in to do that!");
    }
    const item = await context.prisma.createItem({
      title: args.title,
      description: args.description,
      price: args.price,
      image: args.image,
      largeImage: args.largeImage,
      user: {
        connect: { id: context.request.userId }
      }
    });
    return item;
  },
  async updateItem(parent, args, context, info) {
    // first take a copy of the updates
    const updates = { ...args };

    //remove the id from the updates
    delete updates.id;

    //run the update method
    return context.prisma.updateItem({
      data: updates,
      where: {
        id: args.id
      }
    });
  },
  deleteItem(root, args, context, info) {
    const where = { id: args.id };
    //find the item
    const item = context.prisma.item({ where }, `{id title user{id}}`);
    // check if they own that item or have the permissions
    const ownsItem = item.user.id === context.request.userId;
    const hasPermissions = context.request.user.permissions.some(permission =>
      ["ADMIN", "ITEMDELETE"].includes(permission)
    );
    if (!ownsItem && !hasPermissions) {
      throw new Error("You don't have the permissions to do that.");
    }
    //TODO
    // delete the item
    return context.prisma.deleteItem(args);
  },
  async signup(root, args, context, info) {
    //lowercase the email address
    args.email = args.email.toLowerCase();

    // harsh the password
    const password = await bcrypt.hash(args.password, 10);

    //create the user in the database
    const user = await context.prisma.createUser({
      ...args,
      password,
      permissions: { set: ["ADMIN"] }
    });
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    //set the cookie
    context.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 //1 year cookie
    });
    return user;
  },
  async signin(root, args, context, info) {
    const user = await context.prisma.user({ email: args.email });

    if (!user) {
      throw new Error("No such user found");
    }

    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
      throw new Error("Invalid password");
    }
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    // set the JWT as a cookie on the response

    context.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
    });

    return user;
  },
  signout(root, args, context, info) {
    context.response.clearCookie("token");
    return { message: "Signed out successfully" };
  },
  async requestReset(root, args, context, info) {
    //1. Check if this is a valid user.
    const user = await context.prisma.user({ email: args.email });

    if (!user) {
      throw new Error(`No such user found found for ${args.email}`);
    }
    //2. Set a reset token and expiry on that user.
    const resetToken = (await promisify(randomBytes)(20)).toString("hex");

    const resetTokenExpiry = Date.now() + 3600000; //1 hour from now

    const res = await context.prisma.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });
    //3. Emailthem that reset token.
    const mailRes = await transport.sendMail({
      from: "ahebwa@asabahebwa.com",
      to: user.email,
      subject: "Your password reset token",
      html: makeANiceEmail(
        `your password reset token is here! \n\n <a href = "${
          process.env.FRONTEND_URL
        }/reset?resetToken=${resetToken}">Click Here to Reset</a>`
      )
    });
    // return the message
    return { message: "Thanks" };
  },
  async resetPassword(root, args, context, info) {
    //1. Check if the passwords match
    if (args.password !== args.confirmPassword) {
      throw new Error("Your passwords don't match");
    }
    //2. Check if it's a legit reset token
    //3. check if it's expired
    const [user] = await context.prisma.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000
      }
    });
    if (!user) {
      throw new Error("This token is either invalid or expired");
    }
    //4. Hash their new passwords
    const password = await bcrypt.hash(args.password, 10);
    //5. save the new password to the user and remove the old reset token fields
    const updatedUser = context.prisma.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null
      }
    });
    //6. generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    //7. set JWT cookie
    context.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    //8. return a new user
    return updatedUser;
    //9. have a beer!
  },
  async updatePermissions(root, args, context, info) {
    //1. check if they are logged in
    if (!context.request.userId) {
      throw new Error("You must be logged in");
    }
    //2. query the current user
    const currentUser = await context.prisma.user({
      id: context.request.userId
    });
    //3. Check if they have he permissions to do this
    hasPermission(currentUser, ["ADMIN", "PERMISSIONUPDATE"]);
    //4. update bthe permissions
    return context.prisma.updateUser({
      data: {
        permissions: { set: args.permissions }
      },
      where: { id: args.userId }
    });
  },
  async addToCart(root, args, context, info) {
    //1. Make sure that they are signed in
    const { userId } = context.request;
    if (!userId) {
      throw new Error("You must be logged in to do this");
    }
    //2. Query rhe users current cart
    const [existingCartItem] = await context.prisma.cartItems({
      where: { user: { id: userId }, item: { id: args.id } }
    });
    //3. Check if that item is already in the cart and increment by 1 if it is.
    if (existingCartItem) {
      console.log("This item already exists in their cart");
      return context.prisma.updateCartItem({
        where: {
          id: existingCartItem.id
        },
        data: {
          quantity: existingCartItem.quantity + 1
        }
      });
    }
    //4. If it's not, create a fresh cartItem for that user
    return context.prisma.createCartItem({
      user: { connect: { id: userId } },
      item: { connect: { id: args.id } }
    });
  },
  async removeFromCart(root, args, context, info) {
    //1. find the item
    const cartItem = await context.prisma.cartItem({
      id: args.id
    }).$fragment(`fragment EnsureUser on CartItem {
      id
      user {
        id
      }
    }`);

    //1.5 check if the item is present
    if (!cartItem) throw new Error("No cart item found");
    //2. make sure they own that item

    if (cartItem.user.id !== context.request.userId) {
      throw new Error("You can not do that");
    }
    //3. delete that item
    return context.prisma.deleteCartItem({ id: args.id });
  },
  async createOrder(root, args, context, info) {
    //1. Query the current user and make sure they are signed in
    const { userId } = context.request;
    if (!userId) {
      throw new Error("You must be logged in to do this.");
    }
    const user = await context.prisma.user({ id: userId }).$fragment(`{
      id
      name
      email
      cart {
        id
        quantity
        item{
          id
          title
          price
          description
          image
          largeImage
        }
      }
    }`);
    //2. recalculate the total for the price
    const amount = user.cart.reduce(
      (tally, cartItem) => tally + cartItem.item.price * cartItem.quantity,
      0
    );
    console.log(`Going to charge for a total of ${amount}`);
    //3. create the stripe charge(turn tokeb into money)
    const charge = await stripe.charges.create({
      amount,
      currency: "USD",
      source: args.token
    });
    //4. convert the cart items to order items.
    const orderItems = user.cart.map(cartItem => {
      const orderItem = {
        ...cartItem.item,
        quantity: cartItem.quantity,
        user: { connect: { id: userId } }
      };
      delete orderItem.id;
      return orderItem;
    });
    //5. create the order
    const order = await context.prisma.createOrder({
      total: charge.amount,
      charge: charge.id,
      items: { create: orderItems },
      user: { connect: { id: userId } }
    });
    //6. clear the users cart, delete cart items
    const cartItemIds = user.cart.map(cartItem => cartItem.id);
    await context.prisma.deleteManyCartItems({
      id_in: cartItemIds
    });
    //7. return the order to the client
    return order;
  }
};

module.exports = Mutations;
