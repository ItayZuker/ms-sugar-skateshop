import React, { useContext } from "react"
import { GlobalContext } from "../../../../../context/global"
import { Link } from "react-router-dom"
import "./notify-available-success-message.scss"

const NotifyAvailableSuccessMessage = () => {

    /* Global */
    const { dialog } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="notify-available-success-message-container">
            { dialog?.notifyWhenAvailable?.res?.payload?.message?.title &&
                <h2>{dialog?.notifyWhenAvailable?.res?.payload?.message?.title}</h2> }
            { dialog?.notifyWhenAvailable?.res?.payload?.message?.body &&
                <p>{dialog?.notifyWhenAvailable?.res?.payload?.message?.body}</p> }
            <br/>
            <p>Go to <Link to="/exchange">Exchange page</Link> to get a 10% discount.</p>
        </div>
    )
}

export default NotifyAvailableSuccessMessage