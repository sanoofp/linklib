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

