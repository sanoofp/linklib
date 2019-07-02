export function returnParaStringOnly(obj) {
  return `${Object.keys(obj)
    .map(item => {
      if (typeof obj[item] === "object") return null;
      return `${obj[item]}`;
    })
    .join(", ")}`;
}

export function axiosHeader(getState) {
  const token = getState().authReducer.token;
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
}

export const modifyColor = (color, value) => {
  color = String(color.replace("#", ""));
  let hex = parseInt(color, 16);

  let r = (hex >> 16) + value;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let g = (hex & 0x0000ff) + value;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  let b = ((hex >> 8) & 0x00ff) + value;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;
  const modified = "#" + (g | (b << 8) | (r << 16)).toString(16);

  return modified;
};

export const truncateStringTo = (str, upto) => {
  str = String(str);
  if (str.length <= upto) {
    return str;
  }
  return str.slice(0, upto) + "....";
};

export const validateURL = url => {
  const regexQuery =
    "^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$";
  const regex = new RegExp(regexQuery, "i");
  return regex.test(url);
};
