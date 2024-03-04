import React from "react"
import { useMedia } from "../../hooks/useMedia"
import MobileFooter from "./mobile-footer/mobile-footer"
import DesktopFooter from "./desktop-footer/desktop-footer"
import "./footer.scss"

const Footer = () => {

    /* Global */
    const { media } = useMedia()
 
    /* JSX */
    if (media.type === "mobile") {
        return <MobileFooter/>
    }
    if (media.type === "laptop") {
        return <DesktopFooter/>
    }
    if (media.type === "desktop") {
        return <DesktopFooter/>
    }
}

export default Footer