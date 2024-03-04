import React from "react"
import { useTax } from "../../../../../hooks/useTax"
import "./c-sum-tax.scss"

const CSumTax = () => {

    /* JSX */
    return (
        <div className="c-sum-tax-container">
            <p>Tax:</p>
            <p>{useTax()}</p>
        </div>
    )
}

export default CSumTax