import React from "react"
import { useScroll } from "../../../hooks/useScroll"
import LogoWhite from "../../logo-white/logo-white"
import OpenSideMenuButton from "./open-side-menu-button/open-side-menu-button"
import LanguageSwitcher from "../parts/language-switcher/language-switcher"
import MHCart from "./m-h-cart/m-h-cart"
import SideMenu from "./side-menu/side-menu"
import "./mobile-header.scss"

const MobileHeader = () => {
    
    /* Global */
    const { scroll } = useScroll()
 
    /* JSX */
    return (
        <header className={"mobile " + (scroll.direction === "down" ? "scroll-down" : "scroll-up")}>
            <div className="inner-container">
                <LogoWhite/>
                <MHCart/>
                <LanguageSwitcher/>
                <OpenSideMenuButton/>
                <SideMenu/>
            </div>
        </header>
    )
}

export default MobileHeader