var appShellFiles = [
  '/',
  '/index.html',
  '/assets/img/android-chrome-192x192.png',
  '/assets/img/android-chrome-512x512.png',
  '/assets/img/favicon-32x32.png',
  '/assets/img/favicon-16x16.png',
  '/assets/css/main.css',
  '/assets/main.css',
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
    caches.open(appShellFiles).then(function(cache) {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(appShellFiles);
    })
  );
});