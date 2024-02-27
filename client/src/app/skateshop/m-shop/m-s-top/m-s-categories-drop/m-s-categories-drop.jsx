import React from "react"
import MSCatItem from "./m-s-cat-item/m-s-cat-item"
import "./m-s-categories-drop.scss"

const MSCategoriesDrop = ({ categories, dropdownOpen }) => {

    /* JSX */
    return (
        <div className={"m-s-categories-drop-container " + (dropdownOpen ? "open" : "")}>
            {categories?.map((cat, i) => {
                return <MSCatItem key={i} cat={cat}/>})}
        </div>
    )
}

export default MSCategoriesDrop