import React, { useContext } from 'react';
import Navigation from "./navigation/navigation"
import "./header.scss"

const Header = () => {
    return (
        <header>
            <Navigation />
        </header>
    );
};

export default Header;