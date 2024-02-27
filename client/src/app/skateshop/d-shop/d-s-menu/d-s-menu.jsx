import React from "react"
import DSFilters from "./d-s-filters/d-s-filters"
import "./d-s-menu.scss"

const DSMenu = ({ collectionOptions }) => {

    /* JSX */
    return (
        <div className="d-s-menu-container">
            <div className={"d-s-menu-inner-container "}>
                <div className="d-s-all-filters-container">
                    <DSFilters
                        collectionOptions={collectionOptions}/>
                </div>
            </div>
        </div>
    )
}

export default DSMenu