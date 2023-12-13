import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../context/global"
import ErrorMessage from "./error-message/error-message"
import CoverLayer from "./cover-layer/cover-layer"
import "./error.scss"

const Error = () => {

    /* Globale Variables */
    const {
        dialog
    } = useContext(GlobalContext)

    /* Locale Variables */
    const [active, setActive] = useState(false)

    /* Triggers */
    useEffect(() => {
        updateErrorCover()
    }, [dialog])

    /* Functions */
    const updateErrorCover = () => {
        if (dialog.contact.err) {
            setActive(true)
        } else {
            setActive(false)
        }
    }


    /* JSX */
    if (active)
        return (
            <div className={"error-container " + (active ? "active" : "")}>
                <ErrorMessage/>
                <CoverLayer/>
            </div>
        )
}

export default Error