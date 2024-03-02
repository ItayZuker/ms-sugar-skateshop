import React from "react"
import "./m-p-share-header.scss"

const MPShareHeader = ({ setShare }) => {

    /* Functions */
    const closeShare = () => {
        setShare(false)
    }

    /* JSX */
    return (
        <div className="m-p-share-header-container">
            <h3>Share page:</h3>
            <div
                onClick={closeShare}
                className="m-p-share-icon-container">
                <span className="material-symbols-outlined">close</span>
            </div>
        </div>
    )
}

export default MPShareHeader