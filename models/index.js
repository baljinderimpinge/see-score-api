const customer = require("./customer.model");
const subscription = require("./subscription.model")
const userTokenmodel = require("./userToken")
const model = {};
model.userModel = customer;
model.subscriptionModel = subscription;
model.userTokenmodel = userTokenmodel;
module.exports = model;