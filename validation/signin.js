const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function signinValidation(data) {
  let err = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!validator.isLength(data.username, { min: 3, max: 30 })) {
    err.name = "Username must be between 2 to 30 characters";
  }
  if (validator.isEmpty(data.username)) {
    err.name = "Username requied";
  }
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    err.password = "Password must be atleast 6 charater";
  }
  if (validator.isEmpty(data.password)) {
    err.password = "Password field is required";
  }

  return {
    err: err,
    isValid: isEmpty(err)
  };
};
