import React from "react"
import { useScroll } from "../../../hooks/useScroll"
import AnimatedLogo from "../../animated-logo/animated-logo"
import Navigation from "./navigation/navigation"
import LanguageSwitcher from "../parts/language-switcher/language-switcher"
import TenPercentButton from "./ten-percent-button/ten-percent-button"
import "./desktop-header.scss"


const DesktopHeader = () => {
    
    /* Global */
    const { scroll } = useScroll()

    /* JSX */
    return (
        <header className={"desktop " + (scroll.direction === "down" ? "scroll-down" : "scroll-up")}>
            <div className="inner-container">
                <AnimatedLogo/>
                <Navigation/>
                <LanguageSwitcher/>
                <TenPercentButton/>
            </div>
        </header>
    )
}

export default DesktopHeader