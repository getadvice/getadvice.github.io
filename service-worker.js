var cacheName = 'getadvice-v1';
var contentToCache = [
  '/',
  '/index.html',
  '/404.html',
  '/assets/img/android-chrome-192x192.png',
  '/assets/img/android-chrome-512x512.png',
  '/assets/img/favicon-32x32.png',
  '/assets/img/favicon-16x16.png',
  '/assets/css/main.css',
  '/assets/main.css',
  'https://kit.fontawesome.com/7dc3015a44.js',
  'https://unpkg.com/bulma@0.8.0/css/bulma.min.css'
];

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
        .then((reg) => {
          console.log('Service worker registered.', reg);
        });
  });
}

// Installing Service Worker
self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(contentToCache);
    })
  );
});

// Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: ' + e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});