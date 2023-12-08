import React, { useContext } from "react"
import { GlobalContext } from "../../../context/global"
import LogoWhite from "../../logo-white/logo-white"
import OpenSideMenuButton from "./open-side-menu-button/open-side-menu-button"
import SideMenu from "./side-menu/side-menu"
import "./mobile-header.scss"

const MobileHeader = () => {
    /* Global Variables */
    const {
        scroll
    } = useContext(GlobalContext)
 
    /* JSX */
    return (
        <header className={"mobile " + (scroll.direction === "up" ? "scroll-up" : "scroll-down")}>
            <div className="inner-container">
                <LogoWhite/>
                <OpenSideMenuButton/>
                <SideMenu/>
            </div>
        </header>
    )
}

export default MobileHeader