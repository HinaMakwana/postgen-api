const { UUID } = require("../../config/constants");
const { ErrorLog } = require("../models");

const catchError = async (error) => {
  try {
    await ErrorLog.create({
      id: UUID(),
      errorMessage: error.message,
      error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
    });

    return { isError: false, data: true };
  } catch (err) {
    return { isError: true, data: err.message };
  }
};

module.exports = { catchError };
