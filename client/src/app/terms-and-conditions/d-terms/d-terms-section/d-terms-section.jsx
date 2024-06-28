import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../../../context/global"
import { useParams } from "react-router-dom"
import DTLastUpdate from "./d-t-last-update/d-t-last-update"
import "./d-terms-section.scss"

const DTermsSection = () => {
    
    /* Global */
    const { legalData } = useContext(GlobalContext)
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
        <section className="d-terms">
           <div
                className="d-terms-inner-container"
                dangerouslySetInnerHTML={{ __html: selectedItem?.contentAsHTML }}/>
            <DTLastUpdate selectedItem={selectedItem}/>
        </section>
    )
}

export default DTermsSection
