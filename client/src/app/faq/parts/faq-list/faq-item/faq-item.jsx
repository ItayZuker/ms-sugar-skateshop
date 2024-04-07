import React, { useEffect, useState } from "react"
import FAQTop from "./faq-top/faq-top"
import FAQButtom from "./faq-buttom/faq-buttom"
import "./faq-item.scss"

const FAQItem = ({ item, selectedIndex, itemIndex, setSelectedIndex }) => {

    /* Locale */
    const [open, setOpen] = useState(itemIndex === selectedIndex)

    /* Triggers */
    useEffect(() => {
        updateOpen()
    }, [selectedIndex])

    /* Functions */
    const updateOpen = () => {
        setOpen(itemIndex === selectedIndex)
    }

    const handleClick = () => {
        if (selectedIndex === itemIndex) {
            setSelectedIndex(-1)
        } else {
            setSelectedIndex(itemIndex)
        }
    }

    /* JSX */
    return (
        <li
            className="faq-item-container"
            onClick={handleClick}>
            <FAQTop item={item} open={open}/>
            <FAQButtom item={item} open={open}/>
        </li>
    )
}

export default FAQItem