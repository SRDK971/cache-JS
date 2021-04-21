const cacheName = "cache-v1"
const assets = ['/', '/index.html', '/style.css', '/assets/img.jpg', '/assets/Lobster-Regular.ttf']

// put in cache

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            cache.addAll(assets)
        })
    )
})

// fetch the cache

self.addEventListener('fetch', (e) => {
    // console.log(e.request);
    e.respondWith(
        caches.match(e.request)
        .then((cache) => {
            return cache || fetch(e.request)
        })
    )
})