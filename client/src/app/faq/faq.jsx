import React, { useEffect, useState, useContext } from "react"
import { GlobalContext } from "../../context/global"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import FAQTop from "./faq-top/faq-top"
import FAQMain from "./faq-main/faq-main"
import "./faq.scss"

const Faq = () => {

    /* Global */
    const { faqData } = useContext(GlobalContext)
    const location = useLocation();

    /* Locale */
    const [string, setString] = useState("")
    const [categories, setCategories] = useState([])

    /* Triggers */
    useEffect(() => {
        updateCategories()
    }, [faqData])

    useEffect(() => {
        goToPageTop()
    }, [location])

    /* Functions */
    const updateCategories = () => {
        const categories = faqData.map(item => item.category)
        const uniqueCategories = [...new Set(categories)]
        setCategories(uniqueCategories)
    }


    // const uploadPlaceholderFAQ = () => {
    //     fetch('/faq/upload-placeholder-faq', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //     .then(response => response.text())
    //     .then(data => {
    //         alert(data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //         alert('Failed to upload FAQ data');
    //     });
    // }

    /* JSX */
    return (
        <div className="page faq">
            {/* <button onClick={uploadPlaceholderFAQ} style={{margin: "20px", padding: "10px", position: "fixed", zIndex: "10000"}}>Upload Placeholder faq</button> */}
            <FAQTop
                setString={setString}/>
            <FAQMain
                string={string}
                categories={categories}/>
        </div>
    )
}

export default Faq