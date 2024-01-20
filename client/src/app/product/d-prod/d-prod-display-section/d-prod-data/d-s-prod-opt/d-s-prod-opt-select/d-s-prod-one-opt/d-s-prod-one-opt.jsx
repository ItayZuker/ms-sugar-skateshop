import React from "react"
import DSProdOneOptName from "./d-s-prod-one-opt-name/d-s-prod-one-opt-name"
import DSProdOneOptValues from "./d-s-prod-one-opt-values/d-s-prod-one-opt-values"
import "./d-s-prod-one-opt.scss"

const DSProdOneOpt = ({ option }) => {

    /* JSX */
    return (
        <div className="d-s-prod-one-opt-container">
            <DSProdOneOptName name={option?.name}/>
            <DSProdOneOptValues values={option?.values || []}/>
        </div>
    )
}

export default DSProdOneOpt