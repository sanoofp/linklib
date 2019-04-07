const publickVapidKey = "BIgY6Sy6EogQK984Oxqy9mSi8qwa2KoojiDi1WaqY0j1qY_RcPqxH-fh2oWtcqj15_iO-mm0jhTNA2nSEHt5ZL4";

if('serviceWorker' in navigator) {
  window.addEventListener("load", () => {
    send().catch(err => console.log(err))
  });
}

async function send() {
  const register = await navigator.serviceWorker.register("/worker.js", { scope: "/" });
  console.log("PUSH REGISTERING");
  
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publickVapidKey)
  });
  console.log("PUSH REGISTERED");

  await fetch("/notify", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "Content-Type": "application/json"
    }
  });
  console.log("PUSH SENT");

}

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
