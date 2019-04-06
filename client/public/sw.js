const cacheName = "linklib-v1";

self.addEventListener("install", e => {
  console.log("SW INSTALLED");
});

self.addEventListener("activate", e => {
  console.log("SW ACTIVATED");

  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if(cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      )
    })
  );
});

self.addEventListener("fetch", e => {
  console.log("SW FETCHING");
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const resClone = res.clone();
        caches
          .open(cacheName)
          .then(cache => {
            cache.put(e.request, resClone)
          });
        return res;
      })
      .catch(err => caches.match(e.request).then(res => res))
  );
})
