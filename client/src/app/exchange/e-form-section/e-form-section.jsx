import React, { useContext, useRef, useState } from "react"
import { GlobalContext } from "../../../context/global"
import EFormMain from "./e-form-main/e-form-main"
import EFromTInput from "./e-form-t-input/e-form-t-input"
import EFormMobileTop from "./e-form-mobile-top/e-form-mobile-top"
import EFormTextDir from "./e-form-main/e-form-text-dir/e-form-text-dir"
import { post } from "../../../lib/fetch"
import "./e-form-section.scss"


const EFormSection = () => {

    /* Global */
    const {
        media,
        setDialog,
        dialog
    } = useContext(GlobalContext)

    /* Locale */
    const [inputValue, setInputValue] = useState('');
    const [iAgree, setIagree] = useState(false)
    const [textDir, setTextDir] = useState("ltr")
    const [data, setData] = useState({
        text: {
            error: false,
            placeholder: "Write here..."
        },
        email: {
            error: false,
            placeholder: "*example@mail.com"
        },
        name: {
            error: false,
            placeholder: "*yourname"
        },
        iAgree: {
            error: false,
            placeholder: ""
        }
    })

    const timeoutRef = useRef(null);

    /* Functions */
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

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
            const res = await post({ data: {text, email, iAgree, textDir}, rout: "/exchange" })
            setDialog(prev => ({...prev, exchange: {...prev.exchange, loading: false}}))
            if (res.err) {
                console.log(1)
                setDialog(prev => ({...prev, exchange: {...prev.exchange, err: true}}))
            }
            if (res.payload) {
                console.log(2)
                setDialog(prev => ({...prev, exchange: {...prev.exchange, success: true}}))
                e.target.text.value = ""
                e.target.email.value = ""
                setIagree(false)
                
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

    return (
        <section className={"e-form " + (media.type === "mobile" ? "mobile" : "")}>
            { media.type === "mobile" && <EFormMobileTop/> }
            { media.type === "mobile" && <EFormTextDir
                                            textDir={textDir}
                                            setTextDir={setTextDir}/> }
            <form
                onSubmit={handleSubmit}>
                <EFormMain
                    data={data}
                    dialog={dialog}
                    iAgree={iAgree}
                    setIagree={setIagree}
                    textDir={textDir}
                    setTextDir={setTextDir}/>
                <EFromTInput
                    dialog={dialog}
                    data={data}
                    textDir={textDir}
                    placeholder="Write here..."
                    value={inputValue}
                    onChange={handleInputChange}/>
            </form>
        </section>
    );
};

export default EFormSection
