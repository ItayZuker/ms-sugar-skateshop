import React from "react"
import { useMedia } from "../../../../hooks/useMedia"
import MFAQCategories from "./m-faq-categories/m-faq-categories"
import DFAQCategories from "./d-faq-categories/d-faq-categories"
import "./faq-categories.scss"

const FAQCategories = ({ categories }) => {

    /* Global */
    const { media } = useMedia()

    /* JSX */
    if (media?.type === "mobile") {
        return <MFAQCategories categories={categories}/>
    } else {
        return <DFAQCategories categories={categories}/>
    }
}

export default FAQCategories