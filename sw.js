// Service worker: maakt de app offline bruikbaar. Wordt automatisch gemaakt door de bouwstap.
const CACHE = 'olympus-84296af95c';
const FILES = [
 "./",
 "content/handout.json",
 "content/mythen/01-strijd-om-de-wereld.md",
 "content/mythen/02-adelaar-en-ram.md",
 "content/mythen/03-poseidons-woede.md",
 "content/mythen/04-rijkdom-onder-de-grond.md",
 "content/olympus.json",
 "fonts/atkinson-hyperlegible-latin-400-normal.woff2",
 "fonts/atkinson-hyperlegible-latin-700-normal.woff2",
 "fonts/baloo-2-latin-600-normal.woff2",
 "fonts/baloo-2-latin-800-normal.woff2",
 "icons/apple-touch-icon.png",
 "icons/icon-192.png",
 "icons/icon-512.png",
 "icons/icon-maskable-512.png",
 "img/attributen/hades.attribuut.hoorn-des-overvloeds.webp",
 "img/attributen/poseidon.attribuut.drietand.webp",
 "img/attributen/zeus.attribuut.bliksem.webp",
 "img/attributen/zeus.attribuut.troon.webp",
 "img/dieren/hades.dier.driekoppige-hond.webp",
 "img/dieren/poseidon.dier.paard.webp",
 "img/dieren/poseidon.dier.stier.webp",
 "img/dieren/zeus.dier.adelaar.webp",
 "img/dieren/zeus.dier.ram.webp",
 "img/goden/hades.god.webp",
 "img/goden/hermes.god.webp",
 "img/goden/poseidon.god.webp",
 "img/goden/zeus.god.webp",
 "img/olympus.webp",
 "img/portretten/hades.webp",
 "img/portretten/hermes.webp",
 "img/portretten/poseidon.webp",
 "img/portretten/zeus.webp",
 "index.html",
 "manifest.webmanifest"
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(res => { if (res.ok) cache.put(e.request, res.clone()); return res; }).catch(() => hit);
    return hit || net;
  }));
});
