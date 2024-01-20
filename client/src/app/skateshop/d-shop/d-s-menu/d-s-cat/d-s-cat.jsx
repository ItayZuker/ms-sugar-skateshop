import React from "react"
import DSCatSelected from "./d-s-cat-selected/d-s-cat-selected"
import DSCatDrop from "./d-s-cat-drop/d-s-cat-drop"
import "./d-s-cat.scss"

const DSCat = ({ open, setOpen }) => {

    /* JSX */
    return (
        <div className="d-s-cat-container">
            <DSCatSelected
                open={open}
                setOpen={setOpen}/>
            <DSCatDrop
                open={open}
                setOpen={setOpen}/>
        </div>
    )
}

export default DSCat