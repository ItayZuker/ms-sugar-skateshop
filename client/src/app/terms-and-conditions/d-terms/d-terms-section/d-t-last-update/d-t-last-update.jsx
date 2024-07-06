import React, { useContext, useEffect, useState } from "react"
import { LanguageContext } from "../../../../../context/language"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./d-t-last-update.scss"

const DTLastUpdate = ({ selectedItem }) => {

    /* Global */
    const { lang } = useContext(LanguageContext)
    const { t } = useTranslation()

    /* Locale */
    const [lastDate, setLastDate] = useState("")

    /* Triggers */
    useEffect(() => {
        updateDate()
    }, [selectedItem, lang])

    /* Functions */
    const updateDate = () => {
        if (selectedItem?.createdAt) {
            const date = new Date(selectedItem?.createdAt)

            // Array of month names
            const enMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            const heMonths = ["בינואר", "בפברואר", "במרץ", "באפריל", "במאי", "ביוני", "ביולי", "באוגוסט", "בספטמבר", "באוקטובר", "בנובמבר", "בדצמבר"]

            // Formatting the date
            if (lang === "he") {
                const formattedDate = `${date.getDate()} ${heMonths[date.getMonth()]} ${date.getFullYear()}`
                setLastDate(formattedDate)
            } else {
                const formattedDate = `${enMonths[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
                setLastDate(formattedDate)
            }

        }
    }

    /* JSX */
    return (
        <div className="d-t-last-update-container">
            <p>{t("pages.terms.last_update")} {lastDate}</p>
        </div>
    )
}

export default DTLastUpdate