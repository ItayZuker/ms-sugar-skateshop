import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../../../context/global"
import { useParams } from "react-router-dom"
import "./d-terms-header.scss"

const DTermsHeader = () => {

    /* Global */
    const { legalData } = useContext(GlobalContext)

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
            return item.pointer === section 
        } )
        setSelectedItem(selectedItem)
    }

    /* JSX */
    return (
        <div className="d-terms-header-container">
            <h3>Terms & Conditions / {selectedItem?.title}</h3>
        </div>
    )
}

export default DTermsHeader