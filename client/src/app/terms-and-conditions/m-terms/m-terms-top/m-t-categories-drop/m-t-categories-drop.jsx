import React, { useContext } from "react"
import { GlobalContext } from "../../../../../context/global"
import MTSecItem from "./m-t-sec-item/m-t-sec-item"
import "./m-t-categories-drop.scss"

const MTCategoriesDrop = ({ dropdownOpen }) => {

    /* Locale */
    const { legalData } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className={"m-t-categories-drop-container " + (dropdownOpen ? "open" : "")}>
            {legalData?.termsAndConditions?.map((item, i) => {
                return <MTSecItem key={i} item={item}/>})}
        </div>
    )
}

export default MTCategoriesDrop