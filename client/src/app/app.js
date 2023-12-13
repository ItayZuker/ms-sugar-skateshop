import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "./app.scss"

import ErrorCover from "./error-cover/error-cover"
import Header from "../components/header/header"
import Mission from './mission/mission'
import Exchange from "./exchange/exchange"
import Skateshop from "./skateshop/skateshop"
import Cart from "./cart/cart"
import Contact from "./contact/contact"
import Faq from "./faq/faq"
import PrivecyPolicy from "./privacy-policy/privacy-policy"
import TermsAndConditions from "./terms-and-conditions/terms-and-conditions"
import Footer from "../components/footer/footer"

const App = () => {
 
    /* JSX */
    return (
        <Router>
            <ErrorCover/>
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate to="/mission" replace /> } />
                <Route path="/mission" element={<Mission />} />
                <Route path="/exchange" element={<Exchange />} />
                <Route path="/skateshop" element={<Skateshop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/privecy-policy" element={<PrivecyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;