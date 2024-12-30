const { sequelize } = require("../../config/sequelize");

const User = require("./User");
const Message = require("./Message");
const Session = require("./Session");
const ErrorLog = require("./ErrorLog");

module.exports = {
  User,
  Session,
  Message,
  ErrorLog,
  sequelize,
};
