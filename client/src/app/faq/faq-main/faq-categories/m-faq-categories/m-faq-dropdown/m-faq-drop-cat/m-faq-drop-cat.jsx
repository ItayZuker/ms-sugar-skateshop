import React from "react"
import { useParams, Link } from "react-router-dom"
import "./m-faq-drop-cat.scss"

const MFAQDropCat = ({ item }) => {

    // console.log("category: ", category)

    /* Global */
    const { category } = useParams()

    /* JSX */
    return (
        <Link
            to={`/faq/${item?.category}`}
            className={"m-faq-drop-cat-container " + (category === item?.category ? "selected" : "")}>
            <p>{item?.category} ({item?.faqList?.length})</p>
        </Link>
    )
}

export default MFAQDropCat