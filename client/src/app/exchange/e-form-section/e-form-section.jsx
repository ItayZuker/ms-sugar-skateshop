import React, { useContext, useState } from "react"
import { GlobalContext } from "../../../context/global"
import EFormMain from "./e-form-main/e-form-main"
import EFromTInput from "./e-form-t-input/e-form-t-input"
import "./e-form-section.scss"


const EFormSection = () => {

    /* Global */
    const {
        media
    } = useContext(GlobalContext)

    /* Locale */
    const [inputValue, setInputValue] = useState('');

    /* Functions */
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <section className={"e-form " + (media.type === "mobile" ? "mobile" : "")}>
            <form>
                <EFormMain/>
                <EFromTInput
                    placeholder="Write here..."
                    value={inputValue}
                    onChange={handleInputChange}/>
            </form>
        </section>
    );
};

export default EFormSection