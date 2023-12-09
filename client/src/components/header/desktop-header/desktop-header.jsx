import React, { useContext } from "react"
import { GlobalContext } from "../../../context/global"
import AnimatedLogo from "../../animated-logo/animated-logo"
import Navigation from "./navigation/navigation"
import TenPercentButton from "./ten-percent-button/ten-percent-button"
import "./desktop-header.scss"


const DesktopHeader = () => {
    /* Global Variables */
    const {
        scroll
    } = useContext(GlobalContext)

    /* JSX */
    return (
        <header className={"desktop " + (scroll.direction === "up" ? "scroll-up" : "scroll-down")}>
            <div className="inner-container">
                <AnimatedLogo/>
                <Navigation/>
                <TenPercentButton/>
            </div>
        </header>
    )
}

export default DesktopHeader