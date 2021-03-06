const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function urlpost(link) {
  const err = {};

  link.linkTitle = !isEmpty(link.linkTitle) ? link.linkTitle : "";
  link.url = !isEmpty(link.url) ? link.url : "";

  if (validator.isEmpty(link.linkTitle)) {
    err.linkTitle = "URL Title required.";
  }
  if (!validator.isURL(link.url, { require_protocol: true })) {
    err.url = "Please provide a valid URL address (Must include 'http' or 'https')";
  }
  if (validator.isEmpty(link.url)) {
    err.url = "URL required.";
  }

  return {
    err: err,
    isValid: isEmpty(err)
  };
};
