importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.routing.registerRoute(/\.(?:js|css|html|png|ico)$/, workbox.strategies.networkFirst());

self.addEventListener('install', (e) => {
    caches.open('test-cache').then((cache) => {
        return cache.addAll([
            'http://192.168.0.161:1337/test-file-1',
            'http://192.168.0.161:1337/test-file-2',
            'http://192.168.0.161:1337/test-file-3',
            'http://192.168.0.161:1337/test-file-4',
        ]);
    });
});
