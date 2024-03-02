import React from "react"
import PSuccess from "./p-success/p-success"
import PAdd from "./p-add/p-add"
import PLoading from "./p-loading/p-loading"
import "./p-add-button.scss"

const PAddButton = ({ success, loading }) => {

    /* JSX */
    return (
        <div className="p-add-button-container">
            <PSuccess success={success}/>
            <PAdd loading={loading}/>
            <PLoading loading={loading}/>
        </div>
    )
}

export default PAddButton