const customer = require("./customer.model");
const subscription = require("./subscription.model")
const model = {};
model.userModel = customer;
model.subscriptionModel = subscription;
module.exports = model;