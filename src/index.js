const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "..", "prisma", "variables.env")
});
const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");

// 2
const resolvers = {
  Query,
  Mutation,
  ItemConnection: {
    aggregate: (parent, args, context, info) => {
      return context.prisma.itemsConnection(args).aggregate();
    }
  },
  User: {
    cart(parent, args, context, info) {
      return context.prisma.user({ id: context.request.userId }).cart();
    }
  },
  CartItem: {
    item(parent, args, context, info) {
      return context.prisma.cartItem({ id: parent.id }).item();
    }
  },
  Order: {
    user(parent, args, context, info) {
      return context.prisma.order({ id: parent.id }).user();
    },
    items(parent, args, context, info) {
      return context.prisma.order({ id: parent.id }).items();
    }
  }
};
// 3
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({ ...req, prisma })
});

//use express middleware to handle cookies
server.express.use(cookieParser());

// decode the jwt so we can get the userId on each request.
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);

    req.userId = userId;
  }
  next();
});
// create middleware that populates the user on each request
server.express.use(async (req, res, next) => {
  if (!req.userId) return next();
  const user = await prisma.user(
    { id: req.userId },
    "id, permissions, email, name"
  );
  req.user = user;
  next();
});
server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is running on http://localhost:${deets.port}`);
  }
);
