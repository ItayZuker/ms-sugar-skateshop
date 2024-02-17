import React from "react"
import DSCatItem from "./d-s-cat-item/d-s-cat-item"
import DSCatSelected from "./d-s-cat-selected/d-s-cat-selected"
import DSCatDrop from "./d-s-cat-drop/d-s-cat-drop"
import "./d-s-cat.scss"

const DSCat = ({ open, setOpen }) => {

    /* JSX */
    return (
        <div className="d-s-cat-container">

            <DSCatItem cat="decks" />
            <DSCatItem cat="wheels" />
            <DSCatItem cat="bearings" />
            <DSCatItem cat="trucks" />
            <DSCatItem cat="grips" />
            <DSCatItem cat="all products" />


            {/* <DSCatSelected
                open={open}
                setOpen={setOpen}/>
            <DSCatDrop
                open={open}
                setOpen={setOpen}/> */}
        </div>
    )
}

export default DSCat