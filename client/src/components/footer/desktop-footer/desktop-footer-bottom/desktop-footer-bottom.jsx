import React from "react"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./desktop-footer-bottom.scss"

const DesktopFooterBottom = () => {

    /* Global */
    const { translate } = useTranslation()

    /* JSX */
    return (
        <div className="desktop-footer-bottom-container">
            <p>{translate("footer.copyright.line_one")}</p>
        </div>
    )
}

export default DesktopFooterBottom