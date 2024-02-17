import React from "react"
import "./d-s-tabs.scss"

const DSTabs = ({ tab, setTab }) => {

    /* JSX */
    return (
        <div className="d-s-tabs-container">
            <div
                onPointerDown={() => setTab("categories")}
                className={"d-s-tab categories " + (tab === "categories" ? "active " : "")}>
                    <span className="material-symbols-outlined">storefront</span>
            </div>
            <div
                onPointerDown={() => setTab("filters")}
                className={"d-s-tab filters " + (tab === "filters" ? "active " : "")}>
                    <span className="material-symbols-outlined">tune</span>
            </div>
        </div>
    )
}

export default DSTabs