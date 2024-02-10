import React from "react"
import DSProdCoppyIcon from "./d-s-prod-copy-icon/d-s-prod-copy-icon"
import DSProdXIcon from "./d-s-prod-x-icon/d-s-prod-x-icon"
import "./d-s-prod-share.scss"

const DSProdShare = () => {

    /* JSX */
    return (
        <div className="d-s-prod-share-container">
            <span className="material-symbols-outlined">share</span>
            <div className="d-s-prod-share-inner-container">
                <DSProdCoppyIcon/>
                <DSProdXIcon/>
            </div>
        </div>
    )
}

export default DSProdShare