import React, { useContext } from "react"
import { GlobalContext } from "../../context/global"
import MobileFooter from "./mobile-footer/mobile-footer"
import DesktopFooter from "./desktop-footer/desktop-footer"
import "./footer.scss"

const Footer = () => {

    /* Global Variables */
    const { media } = useContext(GlobalContext)
 
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