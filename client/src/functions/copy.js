import select from "./select";

export default function copy(id, callback) {
  select(document.getElementById(id));
  let _OK;
  try {
    _OK = document.execCommand("copy");
  } catch (err) {
    _OK = false;
  }
  if(_OK && callback) {
    callback();
    return _OK;
  } 

  return _OK;
}