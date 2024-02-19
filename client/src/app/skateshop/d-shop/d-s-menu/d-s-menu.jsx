import React from "react"
import DSTabs from "./d-s-tabs/d-s-tabs"
import DSCat from "./d-s-cat/d-s-cat"
import DSFilters from "./d-s-filters/d-s-filters"
import "./d-s-menu.scss"

const DSMenu = ({ tab, setTab }) => {

    /* JSX */
    return (
        <div className="d-s-menu-container">
            <DSTabs tab={tab} setTab={setTab}/>
            <div className={"inner-d-s-menu-container " + tab}>
                {tab === "categories"
                    ?   <div className="d-s-categories-container">
                            <DSCat/>
                        </div>
                    :   <div className="d-s-all-filters-container">
                            <DSFilters/>
                        </div>
                }

            </div>
        </div>
    )
}

export default DSMenu