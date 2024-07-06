import React from "react"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./desktop-footer-bottom.scss"

const DesktopFooterBottom = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="desktop-footer-bottom-container">
            <p>{t("footer.copyright.line_one")}</p>
        </div>
    )
}

export default DesktopFooterBottom