import React from "react"
import "./value-chack-box.scss"

const ValueChackBox = ({ value }) => {

    /* JSX */
    return (
        <div className={"value-chack-box " +
            (value.active ? "active " : "") +
            (value.lock? "lock " : "") +
            (value.oneValue ? "one-value " : "")}/>
    )
}

export default ValueChackBox