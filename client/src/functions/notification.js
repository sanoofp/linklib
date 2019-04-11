import io from "socket.io-client";
import launch from "./launch.png";
import help from "./help.png";

const socket = io("/", { autoConnect: false });

export function listenSocket(userID) {
  socket.open();
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
              badge: data.icon,
              requireInteraction: true,
              data: {
                url: {
                  main: data.link.url,
                  linklib: `/link/${data.link._id}`
                }
              },
              actions: [
                {
                  action: `open`,
                  title: "Open Link",
                  icon: launch,
                },
                {
                  action: `linklib`,
                  title: "Open in Linklib",
                  icon: help,
                },
              ]
            };

            reg.showNotification(data.link.linkTitle, options);
          });
          
        }
      });
    }
  });
}

export function disconnect() {
  socket.close();
}