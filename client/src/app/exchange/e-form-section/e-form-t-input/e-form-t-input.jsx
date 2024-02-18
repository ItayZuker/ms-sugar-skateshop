import React from "react"
import ExchangeLoading from "./exchange-loading/exchange-loading"
import "./e-form-t-input.scss"

const EFormTInput = ({ value, onChange, textDir, data, dialog }) => {

    /* JSX */
    return (
        <div className="e-form-t-input-container">
            {dialog?.exchange?.loading ? <ExchangeLoading/> : null}
            <textarea
                className={"text" +
                    (textDir === "rtl" ? "dir-rtl " : "dir-ltr ") +
                    (data?.text?.error ? "error " : "") +
                    (dialog?.exchange?.loading ? "loading " : "")}
                name="text"
                placeholder="Write here..."
                value={value}
                onChange={onChange}/>
        </div>
    )
}

export default EFormTInput