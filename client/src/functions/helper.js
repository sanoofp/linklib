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