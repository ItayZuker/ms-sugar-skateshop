import React from "react"
import LogoBlack from "../../../../logo-black/logo-black"
import CloseSideMenuButton from "./close-side-menu-button/close-side-menu-button"
import "./side-menu-header.scss"

const SideMenuHeader = () => {

    /* JSX */
    return (
        <div className="side-menu-header-container">
            <div className="inner-container">
                <LogoBlack/>
                <CloseSideMenuButton/>
            </div>
        </div>
    )
}

export default SideMenuHeader