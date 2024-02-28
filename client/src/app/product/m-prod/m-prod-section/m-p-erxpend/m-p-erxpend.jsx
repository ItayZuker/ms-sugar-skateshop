import React from "react"
import "./m-p-erxpend.scss"

const MPExpend = ({ setExpend }) => {

    /* Functions */
    const handleClick = () => {
        setExpend(false)
    }

    /* JSX */
    return (
        <div className="m-p-erxpend-container">

            <div
                onClick={handleClick}
                className="m-p-expend-close">
                <p>Close</p>
            </div>
        </div>
    )
}

export default MPExpend