import React from "react"
import "./faq-buttom.scss"

const FAQButtom = ({ item, open }) => {

    /* JSX */
    return (
        <div className={"faq-buttom-container " + (open ? "open" : "")}>
            <p dangerouslySetInnerHTML={{ __html: item?.answerAsHTML }}/>
        </div>
    )
}

export default FAQButtom