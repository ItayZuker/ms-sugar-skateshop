import React, { useRef, useEffect } from "react"
import ExchangeLoading from "./exchange-loading/exchange-loading"
import EFormChar from "./e-form-char/e-form-char"
import "./e-form-t-input.scss"

const EFormTInput = ({ value, onChange, textDir, data, dialog }) => {

    const textAreaRef = useRef(null);

    useEffect(() => {
        autoGrowTextArea();
    }, [value]); // Automatically adjust height whenever 'value' changes

    const autoGrowTextArea = () => {
        const textArea = textAreaRef.current;
        if (textArea) {
            textArea.style.height = 'auto'; // Reset height to ensure shrinking if text is removed
            textArea.style.height = textArea.scrollHeight + 'px'; // Set height based on scroll height
        }
    };

    /* JSX */

    return (
        <div className="e-form-t-input-container">
            {dialog?.exchange?.loading ? <ExchangeLoading/> : null}
            <textarea
                ref={textAreaRef} // Use ref to access the DOM element
                className={"text " +
                    (textDir === "rtl" ? "dir-rtl " : "dir-ltr ") +
                    (data?.text?.error ? "error " : "") +
                    (dialog?.exchange?.loading ? "loading " : "")}
                name="text"
                placeholder="Write here..."
                value={value}
                onChange={(e) => {
                    onChange(e);
                    autoGrowTextArea(); // Adjust height on each change
                }}/>
        </div>
    );
}

export default EFormTInput