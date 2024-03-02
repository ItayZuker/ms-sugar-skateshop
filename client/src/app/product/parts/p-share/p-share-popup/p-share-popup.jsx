import React from "react"
import PSharePopupHeader from "./p-share-popup-header/p-share-popup-header"
import PSharePopupOptions from "./p-share-popup-options/p-share-popup-options"
import "./p-share-popup.scss"

const PSharePopup = ({ share, setShare }) => {

    /* Functions */
    const closeShare = () => {
        setShare(false)
    }

    /* JSX */
    return (
        <>
            <div className={"p-share-popup-container " + (share ? "open" : "")}>
                <PSharePopupHeader
                    setShare={setShare}/>
                <PSharePopupOptions
                    setShare={setShare}/>
            </div>
            <div
                onClick={closeShare}
                className={"p-share-popup-cover " + (share ? "open" : "")}/>
        </>
    )
}

export default PSharePopup