const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/sequelize");
const { models } = require("../../config/models");

const ErrorLog = sequelize.define(
  "ErrorLog",
  {
    errorMessage: {
      type: DataTypes.TEXT,
      field: "error_message",
      required: true,
    },
    error: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ...models.defaultAttributes,
  },
  {
    tableName: "error_logs",
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = ErrorLog;
