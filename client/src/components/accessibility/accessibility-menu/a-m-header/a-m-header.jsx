import React from "react"
import AMHeaderClose from "./a-m-header-close/a-m-header-close"
import AMHearerReset from "./a-m-header-reset/a-m-header-reset"
import "./a-m-header.scss"

const AMHeader = ({ setMenuOpen }) => {

    /* JSX */
    return (
        <div className="a-m-header-container">
            <AMHeaderClose
                setMenuOpen={setMenuOpen}/>
            <AMHearerReset/>
        </div>
    )
}

export default AMHeader