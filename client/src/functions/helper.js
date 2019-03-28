export function returnParaStringOnly(obj) {
  return `${Object.keys(obj).map(item => {
    return `${obj[item]}`;
  }).join(",")}`;
}

export function axiosHeader (getState) {
  const token = getState().authReducer.token;
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }
  if(token) { 
    config.headers["x-auth-token"] = token;
  }
  return config;
}

export const modifyColor = (color, value) => {
  color = String(color.replace("#", ""));
  let hex = parseInt(color, 16);
  
  let r = (hex >> 16) + value;
  if(r > 255) r = 255;
  else if (r < 0) r = 0;

  let g = (hex & 0x0000FF) + value;
  if(g > 255) g = 255;
  else if (g < 0) g = 0;

  let b = ((hex >> 8) & 0x00FF) + value;
  if(b > 255) b = 255;
  else if (b < 0) b = 0;
  const modified = "#"+(g | (b << 8) | (r << 16)).toString(16);

  return modified;
}
