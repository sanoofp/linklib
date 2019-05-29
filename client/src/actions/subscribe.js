import axios from "axios";

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
const publicKey = urlBase64ToUint8Array("BIgY6Sy6EogQK984Oxqy9mSi8qwa2KoojiDi1WaqY0j1qY_RcPqxH-fh2oWtcqj15_iO-mm0jhTNA2nSEHt5ZL4")

export const pushSubscribe = userid => {
  navigator.serviceWorker.getRegistration().then(reg => {
    if(reg) {
      reg.pushManager.getSubscription().then(sub => {
        if(sub !== null) {
          // console.log("PUSH ALREADY SUB-ED", sub);
        } else {
          // console.log("PUSH NEW SUB");
          reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: publicKey
          })
          .then(newsub => {
            const config = { headers: { "Content-Type": "application/json" } };
            const body = JSON.stringify(newsub);
            axios.post(`/api/notify/sub/${userid}`, body, config)
              .then(() => console.log("NEW PUSH SUB-ED"))
          })
        }
      })
    }
  });
}

export const pushUnsubscribe = userid => {
  navigator.serviceWorker.getRegistration().then(reg => {
    reg.pushManager.getSubscription().then(oldsub => {
      const config = { headers: { "Content-Type": "application/json" } };
      const body = JSON.stringify(oldsub);
      axios.post(`/api/notify/unsub/${userid}`, body, config)
        .then(() => {
          oldsub.unsubscribe().then(successful => {
            console.log("PUSH unsubscribe", successful);
          });
        })
    });
  });
}