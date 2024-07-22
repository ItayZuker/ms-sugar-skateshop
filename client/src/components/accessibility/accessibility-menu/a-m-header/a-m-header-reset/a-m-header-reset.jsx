import React from "react"
import "./a-m-header-reset.scss"

const AMHearerReset = () => {

    /* JSX */
    return (
        <button
            className="a-m-header-reset-container"
            aria-label="Reset Accessibility Menu">
            <span class="material-symbols-outlined">refresh</span>
            <p>Reset</p>
        </button>
    )
}

export default AMHearerReset