export default function androidShare(link, errCallback) {
  if (navigator.share) {
    navigator
      .share({
        title: link.linkTitle,
        text: "Linklib - share",
        url: link.url
      })
      .then(() => console.log("Successful share"))
      .catch(error => console.log("Error sharing", error));
  } else {
    errCallback();
  }
}