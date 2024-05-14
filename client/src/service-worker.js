/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'v1' // Update version to refresh cache
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/css/main.css'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response  // if cache is available, return it
          }
  
          // Fetch from network and cache the response for future requests
          return fetch(event.request).then(networkResponse => {
            // To ensure we don't cache bad responses, check that response is ok
            if (!networkResponse || !networkResponse.ok) {
              return networkResponse
            }
  
            // Clone the response because a response is a stream and can only be consumed once.
            // We need one copy to return to the browser and one to cache.
            const responseToCache = networkResponse.clone()
  
            caches.open('dynamic-assets').then(cache => {
              cache.put(event.request, responseToCache)
            })

            return networkResponse
          })
        })
    )
  })

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      )
    })
  )
})
