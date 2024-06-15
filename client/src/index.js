import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/app'
import { GlobalProvider } from './context/global'
import { ShopifyProvider } from './context/shopify'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <GoogleReCaptchaProvider
        reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
        scriptProps={{
            async: true,
            defer: true,
            appendTo: 'head',
        }}
        useRecaptchaNet={true}
        container={{
            parameters: {
                badge: 'inline', // Set the badge to 'inline' to make it invisible
                theme: 'dark',   // Optional: theme can be 'light' or 'dark'
                size: 'invisible' // Ensure size is set to 'invisible'
            },
        }}>
        <GlobalProvider>
            <ShopifyProvider>
                <App/>
            </ShopifyProvider>
        </GlobalProvider>
    </GoogleReCaptchaProvider>
)