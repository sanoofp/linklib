import { validateURL } from "./helper";

export default function getClipboard(cb) {
  if (navigator.clipboard && navigator.clipboard.readText) {
    navigator.clipboard.readText().then(url => {
      const isURL = validateURL(url);
      if (isURL) {
        return cb(url);
      }
    });
  }
}
