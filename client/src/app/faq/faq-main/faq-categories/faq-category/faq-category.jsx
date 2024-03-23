import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../../../../context/global"
import "./faq-category.scss"

const FAQCategory = ({ item }) => {
    /* JSX */
    return (
        <div className="faq-category-container">
            <h3>{item?.category}</h3>
            <p>({item?.faqList?.length})</p>
        </div>
    )
}

export default FAQCategory