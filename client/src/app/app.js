import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "./app.scss"

import Header from "../components/header/header"
import Mission from './mission/mission'
import Exchange from "./exchange/exchange"
import Shop from "./shop/shop"
import Cart from "./cart/cart"
import Contact from "./contact/contact"
import Footer from "../components/footer/footer"

const App = () => {

    /* JSX */
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/mission" replace /> } />
                <Route path="/mission" element={<Mission />} />
                <Route path="/exchange" element={<Exchange />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;