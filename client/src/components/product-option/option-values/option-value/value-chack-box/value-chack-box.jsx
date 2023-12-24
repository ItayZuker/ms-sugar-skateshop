import React from "react"
import "./value-chack-box.scss"

const ValueChackBox = ({ selected }) => {

    /* JSX */
    return (
        <div className={"value-chack-box " + (selected ? "selected" : "")}>

        </div>
    )
}

export default ValueChackBox