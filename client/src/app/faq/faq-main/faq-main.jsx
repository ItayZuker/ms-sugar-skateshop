import React from "react"
import FAQCategories from "./faq-categories/faq-categories"
import "./faq-main.scss"

const FAQMain = ({ string, categories }) => {

    /* JSX */
    return (
        <div className="faq-main-containter">
            {string
                ? <></>
                : <FAQCategories
                    categories={categories}/>
            }
        </div>
    )
}

export default FAQMain