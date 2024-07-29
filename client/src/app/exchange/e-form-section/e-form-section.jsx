import React, { useContext, useRef, useState } from "react"
import { GlobalContext } from "../../../context/global"
import { useMedia } from "../../../hooks/useMedia"
import { post } from "../../../lib/fetch"
import ReCaptcha from "../../../components/recaptcha/recaptcha"
import EFormTitle from "../e-form-section/e-form-main/e-form-title/e-form-title"
import EFormMain from "./e-form-main/e-form-main"
import EFromTInput from "./e-form-t-input/e-form-t-input"
import EFormMobileTop from "./e-form-mobile-top/e-form-mobile-top"
import EFormTextDir from "./e-form-main/e-form-text-dir/e-form-text-dir"
import "./e-form-section.scss"


const EFormSection = () => {

    /* Global */
    const { setDialog } = useContext(GlobalContext)
    const { media } = useMedia()

    /* Locale */
    const [inputValue, setInputValue] = useState('')
    const [iAgree, setIagree] = useState(false)
    const [textDir, setTextDir] = useState("ltr")
    const [data, setData] = useState({
        text: {
            error: false,
        },
        email: {
            error: false,
        },
        name: {
            error: false,
        },
        iAgree: {
            error: false,
        },
        maxCharacters: {
            error: false,
        }
    })
    const timeoutRef = useRef(null)

    /* Functions */
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const text = e.target.text.value
        const name = e.target.name.value
        const email = e.target.email.value
        if (data.text.error) {
            return
        }
        if (data.name.error) {
            return
        }
        if (data.email.error) {
            return
        }
        if (data.iAgree.error) {
            return
        }
        if (!text) {
            triggerError({ type: "text" })
        }
        if (!name) {
            triggerError({ type: "name" })
        }
        if (!email) {
            triggerError({ type: "email" })
        }
        if (!iAgree) {
            triggerError({ type: "iAgree"})
        }
        if (!!text && !!name && !!email && !!iAgree) {
            setDialog(prev => ({...prev, exchange: {...prev.exchange, loading: true}}))
            const res = await post({ data: {name, text, email, iAgree, textDir}, rout: "/exchange" })
            setDialog(prev => ({...prev, exchange: {...prev.exchange, loading: false}}))
            if (res.err) {
                setDialog(prev => ({...prev, exchange: {...prev.exchange, err: true, message: res.err}}))
            }
            if (res.payload) {
                setDialog(prev => ({...prev, exchange: {...prev.exchange, success: true}}))
                e.target.text.value = ""
                e.target.email.value = ""
                e.target.name.value = ""
                setIagree(false)
                setInputValue("")
            }
        }
    }

    const triggerError = ({ type }) => {
        setData(prev => {
            return {...prev, [type]: {...prev[type], error: true}}
        })
        timeoutRef.current = setTimeout(() => {
            setData(prev => {
                return {...prev, [type]: {...prev[type], error: false}}
            })  
        }, 2000)
    }

    /* JSX */
    return (
        <section className={"e-form " + (media.type === "mobile" ? "mobile" : "")}>
            { media.type === "mobile" && <EFormTitle/> }
            { media.type === "mobile" && <EFormMobileTop/> }
            { media.type === "mobile" && <EFormTextDir
                                            textDir={textDir}
                                            setTextDir={setTextDir}/> }
            <form
                onSubmit={handleSubmit}>
                <ReCaptcha action={"exchange"}/>
                <EFormMain
                    data={data}
                    iAgree={iAgree}
                    setIagree={setIagree}
                    textDir={textDir}
                    setTextDir={setTextDir}/>
                <EFromTInput
                    data={data}
                    textDir={textDir}
                    placeholder="Write here..."
                    value={inputValue}
                    onChange={handleInputChange}
                    triggerError={triggerError}/>
            </form>
        </section>
    );
};

export default EFormSection
