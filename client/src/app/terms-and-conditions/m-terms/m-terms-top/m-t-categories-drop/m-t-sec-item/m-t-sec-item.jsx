import React from "react"
import { Link, useParams } from "react-router-dom"
import "./m-t-sec-item.scss"

const MTSecItem = ({ item }) => {

    /* Global */
    const { section } = useParams()

    /* JSX */
    return (
        <li
            className={"m-t-sec-item-container " + (item?.pointer === section ? "selected" : "")}>
            <Link to={`/terms-and-conditions/${item?.pointer}`}>{item?.title}</Link>
        </li>
    )
}

export default MTSecItem