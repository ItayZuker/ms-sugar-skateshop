import React from "react"
import FooterTop from "./footer-top/footer-top"
import FooterBottom from "./footer-bottom/footer-bottom"

import "./footer.scss"

const Footer = () => {
    /* JSX */
    return (
        <footer>
            <FooterTop />
            <FooterBottom />
        </footer>
    )
}

export default Footer