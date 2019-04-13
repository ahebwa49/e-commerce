const { hasPermission } = require("../utils");

const Query = {
  async users(root, args, context, info) {
    //1. check if they are logged in.
    if (!context.request.userId) {
      throw new Error("You must be logged in!");
    }
    //2. check if the user has got the permission to query all users.
    hasPermission(context.request.user, ["ADMIN", "PERMISSIONUPDATE"]);

    //3. if they do, query all the users.
    const users = await context.prisma.users();
    return users;
  },
  async items(root, args, context, info) {
    const items = await context.prisma.items({
      skip: args.skip,
      first: args.first,
      orderBy: args.orderBy
    });
    return items;
  },
  item(root, args, context, info) {
    return context.prisma.item({ id: args.id });
  },
  itemsConnection(root, args, context, info) {
    return context.prisma.itemsConnection();
  },
  profile(root, args, context, info) {
    if (!context.request.userId) {
      return null;
    }
    return context.prisma.user({ id: context.request.userId });
  },
  async order(root, args, context, info) {
    //1. make sure they are logged in.
    if (!context.request.userId) {
      throw new Error("You must be logged in.");
    }
    //2. query the current order.
    const order = await context.prisma.order({
      id: args.id
    }).$fragment(`{
      id
      charge
      total
      createdAt
      user {
        id
      }
      items {
        id
        title
        description
        price
        image
        quantity
      }
    }`);

    //3. check if they ahve the permissions to see this order
    const ownsOrder = order.user.id === context.request.userId;
    const hasPermissionToSeeOrder = context.request.user.permissions.includes(
      "ADMIN"
    );
    if (!ownsOrder || !hasPermissionToSeeOrder) {
      throw new Error("You don't have permissions to see this.");
    }
    //4. return the order.
    return order;
  },
  async orders(root, args, context, info) {
    const { userId } = context.request;

    if (!userId) {
      throw new Error("You must be logged in to do this");
    }

    const orders = await context.prisma.orders({
      where: {
        user: { id: context.request.userId }
      },
      orderBy: args.orderBy
    });
    return orders;
  }
};

module.exports = Query;
