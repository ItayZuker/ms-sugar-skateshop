import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/app'
import { GlobalProvider } from "./context/global"
import { ShopifyProvider } from './context/shopify'
// import { HelmetProvider } from './context/helmet'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <GlobalProvider>
        <ShopifyProvider>
            {/* <HelmetProvider> */}
               <App/>
            {/* </HelmetProvider> */}
        </ShopifyProvider>
    </GlobalProvider>
)