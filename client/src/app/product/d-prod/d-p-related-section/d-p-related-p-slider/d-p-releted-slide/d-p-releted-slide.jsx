import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LanguageContext } from "../../../../../../context/language"
import { Img } from "react-image"
import { useTranslation } from "../../../../../../hooks/useTranslation"
import "./d-p-releted-slide.scss"

const DPRelatedPSlide = ({ product }) => {

    /* Global */
    const { lang } = useContext(LanguageContext)
    const { t, fixForTranslation } = useTranslation()
    const navigate = useNavigate()

    /* Locale */
    const [img, setImg] = useState({})

    /* Triggers */
    useEffect(() => {
        updateImg()
    }, [product])

    /* Functions */
    const updateImg = () => {
        setImg(product?.images?.[0] || {})
    }

    const handleClick = () => {
        if (product.availableForSale) {
            let variant = product?.variants?.find(variant => variant?.available)
            navigate(`/product/${product?.idNumber}/${variant?.idNumber}`, { replace: true })
        }
    }
    
    const fixTitle = fixForTranslation({ string: product?.title })

    /* JSX */
    return (
        <button
            onClick={handleClick}
            className="d-p-releted-slide-container"
            aria-label={product.availableForSale ? `View details for ${product?.title}` : `Product ${product?.title} is not available`}
            disabled={!product.availableForSale}
        >
            <div className="d-p-releted-slide-img-container">
                {img?.src && <Img src={img?.src} alt={img?.altText} />}
            </div>
            <div className="d-p-releted-slide-bottom-container">
                <p>
                    {lang === "en"
                        ? product?.title
                        : t(`pages.skateshop.products.list.${fixTitle}.title`)}
                </p>
            </div>
        </button>
        // <div
        //     onClick={handleClick}
        //     className="d-p-releted-slide-container">
        //     <div className="d-p-releted-slide-img-container">
        //         {img?.src && <Img src={img?.src} alt={img?.altText}/> }
        //     </div>
        //     <div className="d-p-releted-slide-bottom-container">
        //         <p>{ lang === "en"
        //             ? product?.title
        //             : t(`pages.skateshop.products.list.${fixTitle}.title`)
        //             }</p>
        //     </div>
        // </div>
    )
}

export default DPRelatedPSlide