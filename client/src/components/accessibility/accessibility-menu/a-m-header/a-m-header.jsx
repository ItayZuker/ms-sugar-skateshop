import React from "react"
import AMHeaderClose from "./a-m-header-close/a-m-header-close"
import "./a-m-header.scss"

const AMHeader = ({ setMenuOpen }) => {

    /* JSX */
    return (
        <div className="a-m-header-container">
            <AMHeaderClose
                setMenuOpen={setMenuOpen}/>
        </div>
    )
}

export default AMHeader