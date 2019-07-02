function select(element) {
  let text = "";
  let isReadOnly = element.hasAttribute("readonly");
  if (!isReadOnly) {
    element.setAttribute("readonly", "");
  }
  element.select();
  element.setSelectionRange(0, element.value.length);
  if (!isReadOnly) {
    element.removeAttribute("readonly");
  }
  text = element.value;
  return text;
}

export default function copy(id, callback) {
  select(document.getElementById(id));
  let _OK;
  try {
    _OK = document.execCommand("copy");
  } catch (err) {
    _OK = false;
  }
  if (_OK && callback) {
    callback();
    return _OK;
  }

  return _OK;
}
