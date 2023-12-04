import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "./variables.scss"
import "./app.scss"

import Header from "../components/header/header"

import Cart from "./cart/cart"
import Contact from "./contact/contact"
import Discount from "./discount/discount"
import Homepage from './homepage/homepage';
import Mission from './mission/mission';

import Footer from "../components/footer/footer"

const App = () => {

    /* JSX */
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/homepage" replace /> } />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/discount" element={<Discount />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/mission" element={<Mission />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;