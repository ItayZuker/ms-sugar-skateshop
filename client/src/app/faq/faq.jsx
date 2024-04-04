import React, { useEffect, useState, useContext } from "react"
import { useLocation, useParams } from "react-router-dom"
import { GlobalContext } from "../../context/global"
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
    console.log("faqData: ", faqData)
    const { media } = useMedia()

    const { category } = useParams()
    
    const location = useLocation()

    /* Locale */
    const [string, setString] = useState("")
    
    const [categories, setCategories] = useState([])
    
    const [list, setList] = useState([])
    
    const [selectedIndex, setSelectedIndex] = useState(-1)

    /* Triggers */
    useEffect(() => {
        updateCategories()
        updateList()
    }, [faqData, category, string])

    useEffect(() => {
        goToPageTop()
    }, [location])

    /* Functions */
    const getFilterdCatregory = () => {
        if (category) {
            return faqData?.filter(item => item?.category?.toLowerCase() === category?.toLowerCase())
        } else {
            return faqData
        }
    }

    const getFilterdSearch = ({ list }) => {
        if (string) {
            const searchRegex = new RegExp(`(${string})`, 'gi')
            const filterdByString = list?.filter(item => {
                return item.questionAsHTML.toLowerCase().includes(string.toLowerCase()) || item.answerAsHTML.toLowerCase().includes(string.toLowerCase())
            })
            return filterdByString?.map(item => ({
                ...item,
                questionAsHTML: item.questionAsHTML.replace(searchRegex, '<b>$1</b>'),
                answerAsHTML: item.answerAsHTML.replace(searchRegex, '<b>$1</b>')
            }))
        } else {
            return list
        }
    }

    const updateList = () => {
        const filterdByCategory = getFilterdCatregory()
        const filterdBySearch = getFilterdSearch({ list: filterdByCategory })
        setList(filterdBySearch)
    }

    const updateCategories = () => {
        const categories = faqData?.map(item => item.category?.toLowerCase())
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