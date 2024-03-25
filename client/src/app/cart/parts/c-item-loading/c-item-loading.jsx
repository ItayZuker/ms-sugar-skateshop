import React from "react"
import "./c-item-loading.scss"

const CItemLoading = ({ loading, index }) => {

    /* JSX */
    if (loading === index) {
        return (
            <div className="c-item-loading-container"/>
        )
    }
}

export default CItemLoading