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
  const eventArr = event.action.split("--|--");
  console.log(eventArr[1]);
  event.preventDefault();
  if (eventArr[0] === "open") {
    event.notification.close();
    clients.openWindow(eventArr[1]);
  } else if (eventArr[0] === "linklib") {
    event.notification.close();
    clients.openWindow(`/link/${eventArr[1]}`);
  }
});

