import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app'
import { GlobalProvider } from "./context/global"
import { ShopifyProvider } from './context/shopify'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <GlobalProvider>
        <ShopifyProvider>
           <App />
        </ShopifyProvider>
    </GlobalProvider>
)