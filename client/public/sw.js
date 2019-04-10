const cacheName = "linklib-v1";

const self = this;

self.addEventListener("install", e => console.log("SW INSTALLED"));

self.addEventListener("activate", e => {
  // console.log("SW ACTIVATED");
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// self.addEventListener("fetch", e => {
//   e.respondWith(
//     fetch(e.request)
//       .then(res => {
//         const resClone = res.clone();
//         caches.open(cacheName).then(cache => {
//           cache.put(e.request, resClone);
//         });
//         return res;
//       })
//       .catch(err => caches.match(e.request).then(res => res))
//   );
// });

self.addEventListener("notificationclick", event => {
  const eventArr = event.action.split("-");
  event.preventDefault();
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: "window" }).then(windowClients => {
      if (clients.openWindow) {
        if (eventArr[0] === "open") {
          return clients.openWindow(eventArr[1]);
        } else if (eventArr[0] === "linklib") {
          return clients.openWindow(`/link/${eventArr[1]}`);
        }
      }
    })
  );
});

// self.addEventListener("push", e => {
//   const data = e.data.json();
//   console.log("PUSH RECIEVED");
//   self.registration.showNotification(data.title, {
//     body: data.body,
//     icon: ""
//   })
// })
