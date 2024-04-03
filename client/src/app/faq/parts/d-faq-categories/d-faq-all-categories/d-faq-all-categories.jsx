import React, { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { GlobalContext } from "../../../../../context/global"
import "./d-faq-all-categories.scss"

const DFAQAllCategories = () => {

    /* Global */
    const { faqData } = useContext(GlobalContext)

    const { category } = useParams()

    /* JSX */
    return (
        <Link
            to={`/faq`}
            className={"d-faq-all-categories-container " + (!category ? "selected" : "")}>
            All ({faqData?.length})
        </Link>
    )
}

export default DFAQAllCategories