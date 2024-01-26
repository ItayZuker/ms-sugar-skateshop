import React from "react"
import DSProdOneOptValue from "./d-s-prod-one-opt-value/d-s-prod-one-opt-value"
import "./d-s-prod-one-opt-values.scss"

const DSProdOneOptValues = ({ values }) => {

    /* JSX */
    return (
        <div className="d-s-prod-one-opt-values-container">
            {values?.map((value, i) => {
                return <DSProdOneOptValue key={i} value={value}/>
            })}
        </div>
    )
}

export default DSProdOneOptValues