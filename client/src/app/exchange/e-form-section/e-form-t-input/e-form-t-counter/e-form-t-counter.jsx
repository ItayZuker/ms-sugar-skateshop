import React, { useContext } from "react"
import { GlobalContext } from "../../../../../context/global"
import "./e-form-t-counter.scss"

const EFormTCounter = ({ charactersAmount, data, textDir }) => {

    /* Global */
    const { settings } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className={"e-form-t-counter-container " +
            (textDir === "rtl" ? "dir-rtl " : "dir-ltr ") +
            (data?.maxCharacters?.error ? "error " : "")}>
            <p>{charactersAmount} / {settings?.exchange?.maxCharacters}</p>
        </div>
    )
}

export default EFormTCounter