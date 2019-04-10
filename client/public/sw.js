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
  event.preventDefault();
  if (eventArr[0] === "open") {
    event.notification.close();
    return clients.openWindow(eventArr[1]);
  } else if (eventArr[0] === "linklib") {
    event.notification.close();
    return clients.openWindow(`/link/${eventArr[1]}`);
  }
});

// self.addEventListener("push", event => {
//   const data = event.data.json();
//   console.log("PUSH RECIEVED");

//   const options = {
//     body: data.link.url,
//     icon: data.icon,
//     // badge: data.icon,
//     requireInteraction: true,
//     actions: [
//       {
//         action: `open-${data.link.url}`,
//         title: "Open Link",
//         icon: "./assets/img/launch.png",
//       },
//       {
//         action: `linklib-${data.link._id}`,
//         title: "Open in Linklib",
//         icon: "./assets/img/launch.png",
//       },
//     ]
//   };
//   event.waitUntil(
//     self.registration.showNotification(data.title, options)
//   )
// });
