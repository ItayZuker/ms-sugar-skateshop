import React, { useState } from "react"
import PCoppyIcon from "./p-copy-icon/p-copy-icon"
import PXIcon from "./p-x-icon/p-x-icon"
import "./p-share.scss"

const PShare = () => {

    /* Locale */
    const [shareOpen, setShareOpen] = useState(false)

    /* Functions */
    const toggleShareOpen = () => {
        setShareOpen(prev => !prev)
    }

    const handleMouseLeave = () => {
        setShareOpen(false)
    }

    /* JSX */
    return (
        <div
            onMouseLeave={handleMouseLeave}
            onClick={(toggleShareOpen)}
            className={"p-share-container " + (shareOpen ? "open" : "")}>
            <span className="material-symbols-outlined">share</span>
            <div className="p-share-inner-container">
                <PCoppyIcon/>
                <PXIcon/>
            </div>
        </div>
    )
}

export default PShare