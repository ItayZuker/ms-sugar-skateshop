import React, { useContext } from "react"
import { GlobalContext } from "../../../../../context/global"
import "./exchange-loading.scss"

const ExchangeLoading = () => {

    /* Global */
    const { dialog } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="exchange-loading-container">
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

export default ExchangeLoading