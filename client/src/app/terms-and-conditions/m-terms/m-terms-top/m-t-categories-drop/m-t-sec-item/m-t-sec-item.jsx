import React, { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { LanguageContext } from "../../../../../../context/language"
import "./m-t-sec-item.scss"

const MTSecItem = ({ item }) => {

    /* Global */
    const { lang } = useContext(LanguageContext)
    const { section } = useParams()

    /* JSX */
    return (
        <li
            className={"m-t-sec-item-container " + (item?.pointer === section ? "selected" : "")}>
            <Link
                to={`/terms-and-conditions/${item?.pointer}`}
                aria-current={item.pointer === section ? "page" : undefined}>{item?.[lang]?.title}</Link>
        </li>
    )
}

export default MTSecItem