self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("editor-cache").then(cache => {
      return cache.addAll([
        /* "./0_OutlineEditor.html", */
        "./index.html",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

