import React from "react"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./desktop-footer-bottom.scss"

const DesktopFooterBottom = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="desktop-footer-bottom-container">
            <p
                aria-label={t("footer.copyright.aria_label")}
                >{t("footer.copyright.line_one")}</p>
        </div>
    )
}

export default DesktopFooterBottom