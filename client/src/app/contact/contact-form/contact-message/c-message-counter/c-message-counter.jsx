import React, { useContext } from "react"
import { GlobalContext } from "../../../../../context/global"
import "./c-message-counter.scss"

const CMessageCounter = ({ charactersAmount, data }) => {

    /* Global */
    const { settings } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className={"c-message-counter-container " + (data?.maxCharacters?.error ? "error " : "")}>
            <p>{charactersAmount} / {settings?.contact?.maxCharacters}</p>
        </div>
    )
}

export default CMessageCounter