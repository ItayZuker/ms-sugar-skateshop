import React from "react"
import { Link, useParams } from "react-router-dom"
import "./m-faq-cat-item.scss"

const MFAQCatItem = ({ item }) => {

    /* Global */
    const { category } = useParams()

    /* JSX */
    return (
        <li
            className={"m-faq-cat-item-container " + (category === item?.category ? "selected" : "")}>
            <Link to={`/faq/${item?.category}`}>{item?.category}</Link>
        </li>
    )
}

export default MFAQCatItem