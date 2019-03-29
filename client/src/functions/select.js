export default function select(element) {
  let text = "";
  let isReadOnly = element.hasAttribute("readonly");
  if(!isReadOnly) {
    element.setAttribute("readonly", "");
  }
  element.select();
  element.setSelectionRange(0, element.value.length);
  if(!isReadOnly) {
    element.removeAttribute("readonly");
  }
  text = element.value;
  return text;
}