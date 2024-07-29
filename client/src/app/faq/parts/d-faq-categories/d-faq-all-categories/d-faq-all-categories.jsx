import React from "react"
import { Link, useParams } from "react-router-dom"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./d-faq-all-categories.scss"

const DFAQAllCategories = ({ list }) => {

    /* Global */
    const { category } = useParams()
    const { t } = useTranslation()

    /* JSX */
    return (
        <Link
            to={`/faq`}
            aria-label={t("pages.faq.all")}
            className={"d-faq-all-categories-container " + (!category ? "selected" : "")}
            aria-current={!category ? "page" : undefined}>
            {t("pages.faq.all")} ({list?.length})
        </Link>
    )
}

export default DFAQAllCategories