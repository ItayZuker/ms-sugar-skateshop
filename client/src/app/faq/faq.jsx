import React, { useEffect, useState, useContext } from "react"
import { GlobalContext } from "../../context/global"
import { useLocation, useNavigate } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import { useMedia } from "../../hooks/useMedia"
import MFAQCategories from "./parts/m-faq-categories/m-faq-categories"
import DFAQCategories from "./parts/d-faq-categories/d-faq-categories"
import FAQSearch from "./faq-search/faq-search"
import FAQList from "./parts/faq-list/faq-list"
import "./faq.scss"

const Faq = () => {

    /* Global */
    const { faqData } = useContext(GlobalContext)

    const { media } = useMedia()

    const location = useLocation()

    const navigate = useNavigate()

    /* Locale */
    const [string, setString] = useState("")
    const [categories, setCategories] = useState([])
    const [list, setList] = useState([])
    const [selectedIndex, setSelectedIndex] = useState(-1)

    /* Triggers */
    useEffect(() => {
        updateDefaultCategory()
    }, [categories])

    useEffect(() => {
        updateCategories()
        updateList()
    }, [faqData])

    useEffect(() => {
        goToPageTop()
    }, [location])

// console.log("faqData: ", faqData)
    /* Functions */
    const getSortedList = () => {
        // if category
        //  sort list by categories
        //  filter category
        //  sort by alfabet
        //  return sorted
        // else
        //  sort by alfabet
        //  return sorted
        return faqData
    }

    const updateList = () => {
        const sorted = getSortedList()
        setList(sorted)
    }

    const updateDefaultCategory = () => {
        if (categories.length > 0) {
            const cat = categories[0].category
            navigate(`/faq/${cat}`)
        } else {
            navigate(`/faq`)
        }
    }

    const updateCategories = () => {
        const categories = faqData?.map(item => {
            return item.category?.toLowerCase()
        })
        const uniqueCategories = [...new Set(categories)]
        const categoryList = uniqueCategories.map(category => {
            const faqList = faqData.filter(faq => faq.category.toLowerCase() === category.toLowerCase())
            return { category, faqList }
        })
        setCategories(categoryList)
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
            { media?.type === "mobile" && <MFAQCategories
                                            string={string}
                                            categories={categories}/> }
            <FAQSearch setString={setString}/>
            { media?.type !== "mobile" && <DFAQCategories
                                            string={string} 
                                            categories={categories}/> }
            <FAQList
                list={list}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}/>
        </div>
    )
}

export default Faq