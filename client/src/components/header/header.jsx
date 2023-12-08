import React, { useContext } from 'react';
import { GlobalContext } from '../../context/global';
import MobileHeader from "./mobile-header/mobile-header"
import DesktopHeader from "./desktop-header/desktop-header"
import "./header.scss"

const Header = () => {
    /* Global Variables */
    const {
        media
    } = useContext(GlobalContext)

    /* JSX */
    if (media.type === "mobile") {
        return <MobileHeader/>
    } 
    if (media.type === "laptop") {
        return <DesktopHeader/>
    }
    if (media.type === "desktop") {
        return <DesktopHeader/>
    }
};

export default Header;