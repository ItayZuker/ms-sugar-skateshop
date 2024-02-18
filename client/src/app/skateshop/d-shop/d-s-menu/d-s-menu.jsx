import React, { useState } from "react"
import DSTabs from "./d-s-tabs/d-s-tabs"
import DSCategory from "./d-s-cat/d-s-cat"
import DSOptions from "./d-s-options/d-s-options"
import "./d-s-menu.scss"

const DSMenu = () => {

    /* Locale */
    const [tab, setTab] = useState("categories")

    /* JSX */
    return (
        <div className="d-s-menu-container">
            <DSTabs tab={tab} setTab={setTab}/>
            <div className={"inner-d-s-menu-container " + tab}>
                {tab === "categories"
                    ?   <div className="d-s-categories-container">
                            <DSCategory/>
                        </div>
                    :   <div className="d-s-filters-container">
                            <DSOptions/>
                        </div>
                }

            </div>
        </div>
    )
}

export default DSMenu