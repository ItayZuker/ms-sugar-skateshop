import React from 'react'
import { useMedia } from "../../hooks/useMedia"
import MobileHeader from "./mobile-header/mobile-header"
import DesktopHeader from "./desktop-header/desktop-header"
import "./header.scss"

const Header = () => {

    /* Global */
    const { media } = useMedia()

    /* JSX */
    if (media?.type === "mobile") {
        return <MobileHeader/>
    } 
    if (media?.type === "laptop") {
        return <DesktopHeader/>
    }
    if (media?.type === "desktop") {
        return <DesktopHeader/>
    }
};

export default Header;