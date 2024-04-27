import React, { useContext } from "react"
import { GlobalContext } from "../../../../../context/global"
import "./exchange-error-message.scss"

const ExchangeErrorMessage = () => {

    /* Global */
    const { dialog } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="exchange-error-message-container">
            <h2>Sorry :(</h2>
            <p>{dialog?.exchange?.message || "Something went wrong."}</p>
        </div>
    )
}

export default ExchangeErrorMessage