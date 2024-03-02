import React from "react"
import "./p-loading.scss"

const PLoading = ({ loading }) => {

    /* JSX */
    return (
        <div className={"p-loading-container " + (loading ? "active" : "")}/>
    )
}

export default PLoading