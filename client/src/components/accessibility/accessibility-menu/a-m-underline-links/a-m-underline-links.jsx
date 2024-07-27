import React, { useContext, useEffect } from "react"
import { AccessibilityContext } from "../../../../context/accessibility"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./a-m-underline-links.scss"

const AMUnderlineLinks = () => {

    /* Global */
    const { underlineLinks, setUnderlineLinks } = useContext(AccessibilityContext)
    const { t } = useTranslation()

    /* Triggers */
    useEffect(() => {
        if (underlineLinks) {
            document.body.classList.add('underline-links-active')
        } else {
            document.body.classList.remove('underline-links-active')
        }
    }, [underlineLinks])

    /* Functions */
    const toggleUnderlinLinks = () => {
        setUnderlineLinks(prev => !prev)
    }

    /* JSX */
    return (
        <div className="a-m-underline-links-container">
            <button
                aria-pressed={underlineLinks}
                aria-label={t("accessibility.underline_links_button.aria_label")}
                onClick={toggleUnderlinLinks}
                className={underlineLinks ? "active" : ""}>
                <span className="material-symbols-outlined">format_underlined</span>
                {t("accessibility.underline_links_button.title")}
            </button>
        </div>
    )
}

export default AMUnderlineLinks