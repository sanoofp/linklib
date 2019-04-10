import io from "socket.io-client";
import launch from "./launch.png";
import help from "./help.png";

export function listenSocket(userID) {
  const socket = io("/");
  console.log("WAITING FOR ACTION EMITTING >>> notify-", userID);
  socket.on(`notify-${userID}`, data => {
    console.log("EMITTED >>> notify-" + userID, data);
    if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function(permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          navigator.serviceWorker.getRegistration().then(function(reg) {
            const options = {
              body: data.link.url,
              icon: data.icon,
              // badge: data.icon,
              requireInteraction: true,
              actions: [
                {
                  action: `open--|--${data.link.url}`,
                  title: "Open Link",
                  icon: launch,
                },
                {
                  action: `linklib--|--${data.link._id}`,
                  title: "Open in Linklib",
                  icon: help,
                },
              ]
            };

            reg.showNotification(data.link.linkTitle, options);
          });
          console.log(navigator.serviceWorker);
          navigator.serviceWorker.addEventListener("notificationclick", e => {
            console.log(e);
            window.open(data.link.url, "_blank");
          });
        }
      });
    }
  });
}
