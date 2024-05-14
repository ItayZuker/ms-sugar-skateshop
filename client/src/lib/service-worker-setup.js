const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', async () => {
        try {
          const registration = await navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/service-worker.js`)
          console.log('Service worker registration succeeded:', registration)
  
          registration.onupdatefound = () => {
            const installingWorker = registration.installing
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  console.log('New content is available; please refresh.')
                } else {
                  console.log('Content is cached for offline use.')
                }
              }
            }
          }
        } catch (error) {
          console.error(`Service worker registration failed: ${error}`)
        }
      })
    } else {
      console.error('Service workers are not supported.')
    }
  }
  
  export default registerServiceWorker
  