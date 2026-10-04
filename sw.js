const C='summerhouse-v19';
const F=['./','index.html','room1.jpg','kitchen-room2.jpg','room-afternoon.jpg','room-sunset.jpg','room-dusk.jpg','room-twilight.jpg','room-night.jpg','fan-night.png','fan-twilight.png','fan-room1.png','fan-pm.png','fan-sunset.png','fan-dusk.png','curtain-left.png','curtain-right.png','chiikawa.png','chiikawa-open.png','chiikawa-blink.png','chiikawa-blink-open.png','chiikawa-hurt1.png','chiikawa-hurt2.png','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==C).map(n=>caches.delete(n)))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
