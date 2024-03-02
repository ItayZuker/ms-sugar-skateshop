import React, { useEffect } from "react"
import MPShareOption from "./m-p-share-option/m-p-share-option"
import "./m-p-share-options.scss"

const MPShareOptions = ({ setShare }) => {

    /* Locale */
    const options = ["copy", "x", "whatsapp", "facebook", "messenger", "gmail", "telegram"]

    /* JSX */
    return (
        <div className="m-p-share-options-container">
            {options.map((option, i) => {
                return <MPShareOption
                            key={i}
                            option={option}
                            setShare={setShare}/>
            })}
        </div>
    )
}

export default MPShareOptions