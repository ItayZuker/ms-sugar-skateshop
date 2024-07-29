import React from "react"
import { Link, useParams } from "react-router-dom"
import "./d-faq-category.scss"

const DFAQCategory = ({ item }) => {

    /* Global */
    const { category } = useParams()

    /* JSX */
    return (
        <Link
            to={`/faq/${item?.category}`}
            className={"d-faq-category-container " + (category === item?.category ? "selected" : "")}
            aria-label={item?.category}
            aria-current={category === item.category ? "page" : undefined}>
            {item?.category} ({item?.faqList?.length})
        </Link>
    )
}

export default DFAQCategory