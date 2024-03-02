import React from "react"
import "./p-add.scss"

const PAdd = ({ loading }) => {

    /* JSX */
    return (
        <div className={"p-add-container " + (loading ? "" : "active")}>
            <p>Add To Cart<span className="material-symbols-outlined">add_shopping_cart</span></p>
        </div>
    )
}

export default PAdd