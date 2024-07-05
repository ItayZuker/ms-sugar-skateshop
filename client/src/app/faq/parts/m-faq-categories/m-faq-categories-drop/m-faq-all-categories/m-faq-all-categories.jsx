import React from "react"
import { Link, useParams } from "react-router-dom"
import { useTranslation } from "../../../../../../hooks/useTranslation"
import "./m-faq-all-categories.scss"

const MFAQAllCategories = () => {

    /* Global */
    const { category } = useParams()
    const { translate } = useTranslation()

    /* JSX */
    return (
        <li
            className={"m-faq-all-categories-container " + (category ? "" : "selected")}>
            <Link to={`/faq`}>{translate("pages.faq.all")}</Link>
        </li>
    )
}

export default MFAQAllCategories