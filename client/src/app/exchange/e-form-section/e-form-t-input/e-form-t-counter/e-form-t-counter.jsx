import React, { useContext, useState, useRef, useEffect } from "react"
import { GlobalContext } from "../../../../../context/global"
import "./e-form-t-counter.scss"

const EFormTCounter = ({ charactersAmount, data, textDir }) => {

    /* Global */
    const { settings } = useContext(GlobalContext)

    /* Locale */
    const [visible, setVisible] = useState(false)
    const timerRef = useRef(null)

    /* Triggers */
    useEffect(() => {
        updateVisible()
        return () => clearTimeout(timerRef.current)
    }, [charactersAmount])

    /* Functions */
    const updateVisible = () => {
        setVisible(true);
        timerRef.current = setTimeout(() => setVisible(false), 1000)
    }

    /* JSX */
    return (
        <div className={"e-form-t-counter-container " +
            (textDir === "rtl" ? "dir-rtl " : "dir-ltr ") +
            (data?.maxCharacters?.error ? "error " : "") +
            (visible ? "visible " : "")}>
            <p>{charactersAmount} / {settings?.exchange?.maxCharacters}</p>
        </div>
    )
}

export default EFormTCounter