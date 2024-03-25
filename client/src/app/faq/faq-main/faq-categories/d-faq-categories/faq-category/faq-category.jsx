import React from "react"
import { Link, useParams } from "react-router-dom"
import "./faq-category.scss"

const FAQCategory = ({ item }) => {

    /* Global */
    const { category } = useParams()

    /* JSX */
    return (
        <Link
            to={`/faq/${item?.category}`}
            className={"faq-category-container " + (category === item?.category ? "selected" : "")}>
            {item?.category} ({item?.faqList?.length})
        </Link>
    )
}

export default FAQCategory