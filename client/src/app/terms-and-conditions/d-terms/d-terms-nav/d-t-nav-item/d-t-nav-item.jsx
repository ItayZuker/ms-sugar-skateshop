import React from "react"
import { Link, useParams } from "react-router-dom"
import "./d-t-nav-item.scss"

const DTNavItem = ({ item }) => {

    /* Global */
    const { section } = useParams()

    /* JSX */
    return (
        <Link
            className={"d-t-nav-item " + (section === item?.pointer ? "active" : "")}
            to={`/terms-and-conditions/${item?.pointer}`}> 
            {item.title}
        </Link>
    )
}

export default DTNavItem