import React from "react"
import "./goto-mission-section-button.scss"

const GotoMissionSectionButton = () => {

    /* JSX */
    return (
        <a
            href="#mission-section"
            className="go-to-mission-section-button-container">
                {/* <h4>Mission</h4> */}
                <span className="material-symbols-outlined">south_east</span>
            </a>
    )
}

export default GotoMissionSectionButton