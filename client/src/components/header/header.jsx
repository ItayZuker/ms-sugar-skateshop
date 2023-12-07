import React from 'react';
import AnimatedLogo from "./animated-logo/animated-logo"
import Navigation from "./navigation/navigation"
import TenPercentButton from "./ten-percent-button/ten-percent-button"
import "./header.scss"

const Header = () => {
    return (
        <header>
            <AnimatedLogo />
            <Navigation />
            <TenPercentButton />
        </header>
    );
};

export default Header;