import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../../../context/global"
import SideMenuHeader from "./side-menu-header/side-menu-header"
import SideMenuNavigation from "./side-menu-navigation/side-menu-navigation"
import "./side-menu.scss"

const SideMenu = () => {

    /* Global */
    const { isSideMenuOpen } = useContext(GlobalContext)

    /* Functions */
    document.body.style.overflow = isSideMenuOpen ? "hidden" : ""

    /* JSX */
    return (
        <div className={"side-menu-container " + (isSideMenuOpen ? "open" : "close")}>
            <SideMenuHeader/>
            <SideMenuNavigation/>
        </div>
    )
}

export default SideMenu