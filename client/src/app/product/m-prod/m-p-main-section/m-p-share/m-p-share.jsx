import React from "react"
import MPShareHeader from "./m-p-share-header/m-p-share-header"
import MPShareOptions from "./m-p-share-options/m-p-share-options"
import "./m-p-share.scss"

const MPShare = ({ share, setShare }) => {

    /* Functions */
    const closeShare = () => {
        setShare(false)
    }

    /* JSX */
    return (
        <>
            <div className={"m-p-share-container " + (share ? "open" : "")}>
                <MPShareHeader
                    setShare={setShare}/>
                <MPShareOptions
                    setShare={setShare}/>
            </div>
            <div
                onClick={closeShare}
                className={"m-p-share-cover " + (share ? "open" : "")}/>
        </>
    )
}

export default MPShare