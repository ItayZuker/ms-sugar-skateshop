import React from "react"
import DSCatItem from "./d-s-cat-item/d-s-cat-item"
import "./d-s-cat.scss"

const DSCat = ({ categories }) => {

    /* JSX */
    return (
        <ul className="d-s-cat-container">
            {categories?.map((cat, i) => {
                return <DSCatItem key={i} cat={cat}/>
            })}
        </ul>
    )
}

export default DSCat