import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../../../context/global"
import { LanguageContext } from "../../../../context/language"
import { useParams } from "react-router-dom"
import MTLastUpdate from "./m-t-last-update/m-t-last-update"
import "./m-terms-section.scss"

const MTermsSection = () => {
    
    /* Global */
    const { legalData } = useContext(GlobalContext)
    const { lang } = useContext(LanguageContext)
    const { section } = useParams()

    /* Locale */
    const [selectedItem, setSelectedItem] = useState({})

    /* Triggers */
    useEffect(() => {
        updateSelectedItem()
    }, [section, legalData])

    /* Functions */
    const updateSelectedItem = () => {
        const item = legalData?.termsAndConditions?.find(item => item.pointer === section)
        setSelectedItem(item || {})
    }

    /* JSX */
    return (
        <section className="m-terms">
            <h3>{selectedItem?.title}</h3>
            <div
                className="m-terms-inner-container"
                dangerouslySetInnerHTML={{ __html: selectedItem?.[lang]?.contentAsHTML }}/>
            <MTLastUpdate selectedItem={selectedItem}/>
        </section>
    )
}

export default MTermsSection
