import React, { useState } from "react"
import PSharePopup from "./p-share-popup/p-share-popup"
import "./p-share.scss"

const PShare = () => {

    /* Locale */
    const [share, setShare] = useState(false)

    /* Functions */
    const toggleShareOpen = () => {
        setShare(prev => !prev)
    }

    /* JSX */
    return (
        <>
            <div
                onClick={toggleShareOpen}
                className="p-share-container">
                <span className="material-symbols-outlined">share</span>
            </div>
            <PSharePopup
                share={share}
                setShare={setShare}/>
        </>
    )
}

export default PShare