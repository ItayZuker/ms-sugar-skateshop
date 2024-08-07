import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../../../context/global"
import { LanguageContext } from "../../../../context/language"
import { useTranslation } from "../../../../hooks/useTranslation"
import { useParams } from "react-router-dom"
import "./d-terms-header.scss"

const DTermsHeader = () => {

    /* Global */
    const { legalData } = useContext(GlobalContext)
    const { lang } = useContext(LanguageContext)
    const { t } = useTranslation()
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
        <div className="d-terms-header-container">
            <h3>{t("pages.terms.section_main_title")} / {selectedItem?.[lang]?.title}</h3>
        </div>
    )
}

export default DTermsHeader