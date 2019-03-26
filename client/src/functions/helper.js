export function returnParaStringOnly(obj) {
  return `${Object.keys(obj).map(item => {
    return `${obj[item]}`;
  }).join(",")}`;
}