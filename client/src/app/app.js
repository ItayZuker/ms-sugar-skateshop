import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Dialog from "./dialog/dialog"
import Header from "../components/header/header"
import Mission from './mission/mission'
import Exchange from "./exchange/exchange"
import Skateshop from "./skateshop/skateshop"
import Product from "./product/product"
import Cart, { TestComponent } from "./cart/cart"
import Contact from "./contact/contact"
import Faq from "./faq/faq"
import TermsAndConditions from "./terms-and-conditions/terms-and-conditions"
import Footer from "../components/footer/footer"
import "./app.scss"

const App = () => {

    /* JSX */
    return (
        <Router>
            <Dialog/>
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate to="/mission" replace /> } />
                <Route path="/mission" element={<Mission />} />
                <Route path="/exchange" element={<Exchange />} />
                <Route path="/skateshop" element={<Skateshop />} />
                <Route path="/product" element={<Navigate to="/skateshop" replace />} />
                <Route path="/product/:productId/:variantId" element={<Product />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/faq/:category" element={<Faq />} />
                <Route path="/terms-and-conditions/" element={<Navigate to="/terms-and-conditions/introduction" replace/>} />
                <Route path="/terms-and-conditions/:section" element={<TermsAndConditions />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;