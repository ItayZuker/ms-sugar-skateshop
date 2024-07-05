import React, { useState, useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../../../../context/global"
import { LanguageContext } from "../../../../../context/language"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./m-t-selected-cat.scss"

const MTSelectedCat = ({ hanbleCategoriesClick, dropdownOpen }) => {

    /* Global */
    const { legalData } = useContext(GlobalContext)
    const { lang } = useContext(LanguageContext)
    const { translate } = useTranslation()
    const { section } = useParams()

    /* Locale */
    const [selectedItem, setSelectedItem] = useState("")

    /* Triggers */
    useEffect(() => {
        updateTitle()
    }, [section, legalData])

    /* Functions */
    const updateTitle = () => {
        const selectedItem = legalData?.termsAndConditions?.find(item => {
            return item?.pointer === section
        } )
        setSelectedItem(selectedItem)
    }

    /* JSX */
    return (
        <div
            onClick={hanbleCategoriesClick}
            className={"m-t-selected-cat-container " + (dropdownOpen ? "open" : '')}>
            <h3>{translate("pages.terms.section_main_title")} \ {selectedItem?.[lang]?.title}</h3>
            <div className="arrow-container">
                <span className="material-symbols-outlined">expand_more</span>
            </div>
        </div>
    )
}

export default MTSelectedCat