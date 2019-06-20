"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Permission",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Item",
    embedded: false
  },
  {
    name: "CartItem",
    embedded: false
  },
  {
    name: "OrderItem",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  },
  {
    name: "BlogPost",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://ston-fits-d4831d995d.herokuapp.com/stonfits-prod/prod`
});
exports.prisma = new exports.Prisma();
