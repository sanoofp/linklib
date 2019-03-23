const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function signupValidation(data) {
  let err = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  if (validator.isLength(data.username, { min: 3, max: 30 })) {
    err.name = "Username must be between 2 to 30 characters";
  }
  if (validator.isEmpty(data.username)) {
    err.name = "Username requied";
  }
  if (validator.isEmpty(data.email)) {
    err.email = "Email field is required";
  }
  if (!validator.isEmail(data.email)) {
    err.email = "Email is invalid";
  }
  if (validator.isEmpty(data.password)) {
    err.password = "Password field is required";
  }
  if (validator.isLength(data.password, { min: 6, max: 30 })) {
    err.password = "Password must be atleast 6 charater";
  }

  return {
    err: err,
    isValid: isEmpty(err)
  };
};
