import React, { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { GlobalContext } from "../../../../../../context/global"
import "./m-faq-all-categories.scss"

const MFAQAllCategories = () => {

    /* Global */
    const { category } = useParams()

    /* JSX */
    return (
        <li
            className={"m-faq-all-categories-container " + (category ? "" : "selected")}>
            <Link to={`/faq`}>All</Link>
        </li>
    )
}

export default MFAQAllCategories