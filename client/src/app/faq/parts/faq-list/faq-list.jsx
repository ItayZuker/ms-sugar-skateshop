import React from "react"
import FAQItem from "./faq-item/faq-item"
import "./faq-list.scss"

const FAQList = ({ list, selectedIndex, setSelectedIndex }) => {

    /* JSX */
    return (
        <div className="faq-list-container">
            <ul>
                {list?.map((item, i) => {
                    return <FAQItem
                                key={i}
                                item={item}
                                selectedIndex={selectedIndex}
                                itemIndex={i}
                                setSelectedIndex={setSelectedIndex}/>
                })}
            </ul>
        </div>
    )
}

export default FAQList