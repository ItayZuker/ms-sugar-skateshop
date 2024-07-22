import React from "react"
import "./a-m-text-size.scss"

const AMTextSize = () => {

    /* Functions */
    const increaseTextSize = () => {

    }

    /* JSX */
    return (
        <div className="a-m-text-size-container">
            <button onClick={increaseTextSize}>
                <span class="material-symbols-outlined">add</span>
                Increase text size
            </button>
            <button onClick={increaseTextSize}>
                <span class="material-symbols-outlined">add</span>
                Increase text size
            </button>
        </div>
    )
}

export default AMTextSize