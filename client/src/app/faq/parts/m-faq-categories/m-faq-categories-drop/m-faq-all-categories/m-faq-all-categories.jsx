import React from "react"
import { Link, useParams } from "react-router-dom"
import { useTranslation } from "../../../../../../hooks/useTranslation"
import "./m-faq-all-categories.scss"

const MFAQAllCategories = () => {

    /* Global */
    const { category } = useParams()
    const { t } = useTranslation()

    /* JSX */
    return (
        <li
            className={"m-faq-all-categories-container " + (category ? "" : "selected")}>
            <Link
                to={`/faq`}
                aria-current={!category ? "page" : undefined}>
                {t("pages.faq.all")}</Link>
        </li>
    )
}

export default MFAQAllCategories