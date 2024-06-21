import React, { useContext, useRef, useState, useEffect } from "react"
import { GlobalContext } from "../../../../../context/global"
import "./c-message-counter.scss"

const CMessageCounter = ({ charactersAmount, data }) => {

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
        if (charactersAmount > 0) {
            setVisible(true);
            timerRef.current = setTimeout(() => setVisible(false), 1000)
        }
    }

    /* JSX */
    return (
        <div className={"c-message-counter-container " + (data?.maxCharacters?.error ? "error " : "") + (visible ? "visible" : "")}>
            <p>{charactersAmount} / {settings?.contact?.maxCharacters}</p>
        </div>
    )
}

export default CMessageCounter