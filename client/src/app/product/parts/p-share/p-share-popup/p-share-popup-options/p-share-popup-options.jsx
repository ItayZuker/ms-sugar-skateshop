import React from "react"
import MPShareOption from "./p-share-popup-option/p-share-popup-option"
import "./p-share-popup-options.scss"

const PSharePopupOptions = ({ setShare }) => {

    /* Locale */
    const options = ["copy", "x", "whatsapp", "facebook", "messenger", "gmail", "telegram"]

    /* JSX */
    return (
        <div className="p-share-popup-options-container">
            {options.map((option, i) => {
                return <MPShareOption
                            key={i}
                            option={option}
                            setShare={setShare}/>
            })}
        </div>
    )
}

export default PSharePopupOptions