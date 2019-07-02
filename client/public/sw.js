self.addEventListener("notificationclick", event => {
  const action = event.action;
  event.preventDefault();
  if (action === "open") {
    event.notification.close();
    clients.openWindow(event.notification.data.url.main);
  } else if (action === "linklib") {
    event.notification.close();
    clients.openWindow(event.notification.data.url.linklib);
  }
});

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("PUSH RECIVED");
  const options = {
    body: data.body,
    icon: data.icon
  };
  if (data.link) {
    options["requireInteraction"] = true;
    options["vibration"] = [100, 200, 100];
    options["data"] = {
      url: {
        main: data.link.url,
        linklib: `/link/${data.link._id}`
      }
    };
    options["actions"] = [
      {
        action: `open`,
        title: "Open Link",
        icon: "assets/img/launch.png"
      },
      {
        action: `linklib`,
        title: "Open in Linklib",
        icon: "assets/img/help.png"
      }
    ];
  }
  self.registration.showNotification(data.title, options);
});
