export default function share(link) {
  if (navigator.share) {
    alert("OK")
    navigator
      .share({
        title: "Linklib - Share",
        text: link.linkTitle,
        url: link.url
      })
      .then(() => console.log("SHARED"))
      .catch(error => console.log("Error sharing", error));
  } else {
    window.location.href = "/link/"+link._id;    
  }
}
