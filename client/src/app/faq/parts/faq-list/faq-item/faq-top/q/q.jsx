import React from "react"
import "./q.scss"

const Q = ({ item }) => {

    /* JSX */
    return (
        <div className="q-container">
            <p dangerouslySetInnerHTML={{__html: item?.questionAsHTML}}/>
        </div>
    )
}

export default Q