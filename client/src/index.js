import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { GlobalProvider } from "./context/global"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <GlobalProvider>
        <App />
    </GlobalProvider>
);