import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/app'
import { LanguageProvider } from "./context/language"  
import { GlobalProvider } from './context/global'
import { ShopifyProvider } from './context/shopify'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <GoogleReCaptchaProvider
        reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}>
        <LanguageProvider>
            <GlobalProvider>
                <ShopifyProvider>
                    <App/>
                </ShopifyProvider>
            </GlobalProvider>
        </LanguageProvider>
    </GoogleReCaptchaProvider>
)