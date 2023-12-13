import React, { useEffect, useState } from "react"
import "./loading-cover.scss"

const LoadingCover = ({ background, dots}) => {

    /* JSX */
    return (
        <div className="loading-container">
            <div className="lds-default">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default LoadingCover