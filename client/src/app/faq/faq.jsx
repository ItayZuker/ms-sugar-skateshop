import React, { useEffect, useState, useContext } from "react"
import { useLocation, useParams } from "react-router-dom"
import { GlobalContext } from "../../context/global"
import { LanguageContext } from "../../context/language"
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
    const { lang } = useContext(LanguageContext)
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
        updateList()
    }, [faqData, lang, category, string])

    useEffect(() => {
        updateCategories()
    }, [list])

    useEffect(() => {
        goToPageTop()
    }, [location])

    /* Functions */
    const getFilterdLang = () => {
        if (lang) {
            return faqData.map(item => {
                const q = item[lang].questionAsHTML
                const a = item[lang].questionAsHTML
                return q && a ? item[lang] : null
            } 
        )
        } else {
            return []
        }
    }

    const getFilterdCatregory = ({ list }) => {
        if (category) {
            return list?.filter(item => item?.category?.toLowerCase() === category?.toLowerCase())
        } else {
            return list
        }
    }

    const getFilterdSearch = ({ list }) => {
        if (string) {
            const searchRegex = new RegExp(`(${string})`, 'gi')
            const filterdByString = list?.filter(item => {
                return item.questionAsHTML.toLowerCase().includes(string.toLowerCase()) || item.answerAsHTML.toLowerCase().includes(string.toLowerCase())
            })
            return filterdByString?.map(item => ({...item,
                questionAsHTML: item.questionAsHTML.replace(searchRegex, '<b>$1</b>'),
                answerAsHTML: item.answerAsHTML.replace(searchRegex, '<b>$1</b>')
            }))
        } else {
            return list
        }
    }

    const updateList = () => {
        const filterdByLang = getFilterdLang()
        const filterdByCategory = getFilterdCatregory({ list: filterdByLang })
        const filterdBySearch = getFilterdSearch({ list: filterdByCategory })
        setList(filterdBySearch)
    }

    const updateCategories = () => {
        const filterdByLang = getFilterdLang()
        const categories = filterdByLang?.map(item => {
            return item.category?.toLowerCase()
        })
        const uniqueCategories = [...new Set(categories)]
        const categoryList = uniqueCategories.map(category => {
            const filterdByLang = getFilterdLang()
            const faqList = filterdByLang.filter(faq => {
                return faq.category?.toLowerCase() === category?.toLowerCase()
            })
            return { category, faqList }
        })
        setCategories(categoryList)
    }

    /* JSX */
    return (
        <div className="page faq">
            { media?.type === "mobile" && <MFAQCategories
                                            string={string}
                                            categories={categories}/> }
            <FAQSearch setString={setString}/>
            { media?.type !== "mobile" && <DFAQCategories
                                            list={list}
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