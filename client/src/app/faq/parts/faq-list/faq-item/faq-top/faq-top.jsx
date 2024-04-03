import React from "react"
import Q from "./q/q"
import "./faq-top.scss"

const FAQTop = ({ item, open }) => {

    /* JSX */
    return (
        <div className={"faq-top-container " + (open ? "open" : "")}>
            <div className="faq-icon"/>
            <Q item={item}/>
        </div>
    )
}

export default FAQTop