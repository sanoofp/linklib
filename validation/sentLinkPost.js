const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function sentLinkPost(body) {
  let err = {};

  if(validator.isEmpty(body.linkID)) {
    err.linkID = true
  }
  if(validator.isEmpty(body.fromUsername)) {
    err.fromUsername = true
  }
  return {
    err: err,
    isValid: isEmpty(err)
  }
}