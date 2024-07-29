import React from "react"
import { Link } from 'react-router-dom'
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./e-form-i-agree.scss"

const EFormIAgree = ({ iAgree, setIagree, data }) => {

    /* Global */
    const { t } = useTranslation()

    /* Functions */
    const toggleIAgree = () => {
        setIagree(prev => !prev)
    }

    /* JSX */
    return (
        <div 
            tabIndex="0"
            aria-pressed={iAgree}
            className="e-form-i-agree-container">
            <p>{t("pages.exchange.disclamer.content")}</p>
            <p>{t("pages.exchange.disclamer.read_more")} <Link
                                                    to="/terms-and-conditions"
                                                    target="_blank">{t("pages.exchange.disclamer.read_more_link")}</Link></p>
            <button
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleIAgree()}
                onPointerDown={toggleIAgree}
                type="button"
                aria-label={t("pages.exchange.i_agree_input.aria_label")}
                className={"e-form-i-agree-input-container " +
                    (iAgree ? "active " : "") +
                    (data.iAgree.error ? "error " : "")}>
                <div className="i-agree-squere">
                    <span className="material-symbols-outlined">check</span>
                </div>
                <p>{t("pages.exchange.i_agree_input.title")}</p>
            </button>
        </div>
    )
}

export default EFormIAgree