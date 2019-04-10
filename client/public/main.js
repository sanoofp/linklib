const vapidKey =
  "BIgY6Sy6EogQK984Oxqy9mSi8qwa2KoojiDi1WaqY0j1qY_RcPqxH-fh2oWtcqj15_iO-mm0jhTNA2nSEHt5ZL4";
console.log("asasasasa");

if (!("Notification" in window)) {
  console.log("This browser does not support notifications!");
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(swReg => {
        
        console.log("SW REG", swReg);
        swReg.pushManager.getSubscription().then(sub => {
          console.log("PUSH MAHAGER SUB", sub);
          if (sub === null || sub === undefined) {
            swReg.pushManager
              .subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(vapidKey)
              })
              .then(subscription => {
                console.log(subscription);
              })
              .catch(err => {
                if (Notification.permission === "denied") {
                  console.log("Notification primission denied");
                } else {
                  console.log("Failed to subscripbe user");
                }
              });
          }
        });

      })
      .catch(err => console.log("SW NOT REG"));
  });
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
