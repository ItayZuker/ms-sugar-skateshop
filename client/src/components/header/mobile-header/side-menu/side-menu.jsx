import React, { useContext } from "react"
import { GlobalContext } from "../../../../context/global"
import SideMenuHeader from "./side-menu-header/side-menu-header"
import SideMenuNavigation from "./side-menu-navigation/side-menu-navigation"
import "./side-menu.scss"

const SideMenu = () => {
    /* Global Variables */
    const {
        isSideMenuOpen
    } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className={"side-menu-container " + (isSideMenuOpen ? "open" : "close")}>
            <SideMenuHeader/>
            <SideMenuNavigation/>
        </div>
    )
}

export default SideMenu