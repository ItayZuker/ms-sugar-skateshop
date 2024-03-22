import React, { useContext } from "react"
import { GlobalContext } from "../../../../context/global"
import DTNavItem from "./d-t-nav-item/d-t-nav-item"
import "./d-terms-nav.scss"

const DTermsNav = () => {

    /* Global */
    const { legalData } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="d-terms-nav-container">
            {legalData?.termsAndConditions?.map((item, i) => {
                return <DTNavItem key={i} item={item}/>
            })}
        </div>
    )
}

export default DTermsNav