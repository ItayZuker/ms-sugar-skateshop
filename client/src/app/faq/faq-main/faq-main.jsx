import React from "react"
import FAQList from "./faq-list/faq-list"
import FAQCategories from "./faq-categories/faq-categories"
import "./faq-main.scss"

const FAQMain = ({ string, categories }) => {

    /* JSX */
    return (
        <div className="faq-main-containter">
            {string
                ? <FAQList/>
                : <FAQCategories
                    categories={categories}/>
            }
        </div>
    )
}

export default FAQMain