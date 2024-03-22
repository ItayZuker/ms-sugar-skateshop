import React, { useEffect, useState } from "react"
import "./d-t-last-update.scss"

const DTLastUpdate = ({ selectedItem }) => {

    /* Locale */
    const [lastDate, setLastDate] = useState("")

    /* Triggers */
    useEffect(() => {
        updateDate()
    }, [selectedItem])

    /* Functions */
    const updateDate = () => {
        if (selectedItem?.createdAt) {
            const date = new Date(selectedItem?.createdAt)

            // Array of weekday names
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

            // Array of month names
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            // Formatting the date
            const formattedDate = `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;

            setLastDate(formattedDate)
        }
    }

    /* JSX */
    return (
        <div className="d-t-last-update-container">
            <p>Last update: {lastDate}</p>
        </div>
    )
}

export default DTLastUpdate