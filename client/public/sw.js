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

