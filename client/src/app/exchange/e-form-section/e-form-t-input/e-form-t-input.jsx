import React, { useRef, useEffect, useContext } from "react"
import { GlobalContext } from "../../../../context/global"
import ExchangeLoading from "./exchange-loading/exchange-loading"
import EFormChar from "./e-form-char/e-form-char"
import "./e-form-t-input.scss"

const EFormTInput = ({ value, onChange, textDir, data, dialog }) => {

    /* Global */
    const {
        media
    } = useContext(GlobalContext)

    /* Locale */
    const textAreaRef = useRef(null);

    /* Triggers */
    useEffect(() => {
        autoGrowTextArea();
    }, [value])

    /* Functions */
    const autoGrowTextArea = () => {
        const textArea = textAreaRef.current
        if (media.type === "mobile") {
            if (textArea && value) {
                textArea.style.height = 'auto'
                textArea.style.height = textArea.scrollHeight + 'px'
            } else {
                textArea.style.height = 'auto'
            }
        }
    };

    /* JSX */
    return (
        <div className="e-form-t-input-container">
            {(dialog?.exchange?.loading && media.type !== "mobile")
                && <ExchangeLoading/>}
            <textarea
                ref={textAreaRef}
                className={"text " +
                    (textDir === "rtl" ? "dir-rtl " : "dir-ltr ") +
                    (data?.text?.error ? "error " : "") +
                    (dialog?.exchange?.loading ? "loading " : "")}
                name="text"
                placeholder="Write here..."
                value={value}
                onChange={(e) => {
                    onChange(e)
                    autoGrowTextArea()
                }}
                />
        </div>
    );
}

export default EFormTInput