import React from "react"
import "./value-chack-box.scss"

const ValueChackBox = ({ value }) => {

    /* JSX */
    return (
        <div className={"value-chack-box " +
            (value?.lockActive ? "lock-active " : "") +
            (value.active ? "active " : "") +
            (value.lockDeActive? "lock-de-active " : "")}/>
    )
}

export default ValueChackBox