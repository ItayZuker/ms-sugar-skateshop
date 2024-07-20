import React, { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { LanguageContext } from "../../../../../context/language"
import "./d-t-nav-item.scss"

const DTNavItem = ({ item }) => {

    /* Global */
    const { lang } = useContext(LanguageContext)
    const { section } = useParams()

    /* JSX */
    return (
        <Link
            className={"d-t-nav-item " + (section === item?.pointer ? "active" : "")}
            to={`/terms-and-conditions/${item?.pointer}`}
            aria-current={section === item.pointer ? "page" : undefined}> 
            {item?.[lang]?.title}
        </Link>
    )
}

export default DTNavItem