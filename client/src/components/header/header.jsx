import React, { useContext } from 'react';
import AnimatedLogo from "./animated-logo/animated-logo"
import Navigation from "./navigation/navigation"
import "./header.scss"

const Header = () => {
    return (
        <header>
            <AnimatedLogo />
            <Navigation />
        </header>
    );
};

export default Header;