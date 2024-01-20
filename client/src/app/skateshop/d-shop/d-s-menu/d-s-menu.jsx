import React, { useState } from "react"
import DSCategory from "./d-s-cat/d-s-cat"
import DSOptions from "./d-s-options/d-s-options"
import "./d-s-menu.scss"

const DSMenu = () => {

    /* Locale */
    const [open, setOpen] = useState(false)

    /* JSX */
    return (
        <div className="d-s-menu-container">
            <div className="inner-d-s-menu-container">
                <DSCategory open={open} setOpen={setOpen}/>
                <DSOptions open={open}/>
            </div>
        </div>
    )
}

export default DSMenu