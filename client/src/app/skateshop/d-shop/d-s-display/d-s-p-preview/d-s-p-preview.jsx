// import React, { useContext } from "react"
// import { ShopifyContext } from "../../../../../context/shopify"
// import { useNavigate } from "react-router-dom"
// import DSPPreviewTitle from "./d-s-p-preview-title/d-s-p-preview-title"
// import DSPPreviewImage from "./d-s-p-preview-image/d-s-p-preview-image"
// import "./d-s-p-preview.scss"

// const DSPPreview = ({ product }) => {

//     /* Global */
//     const { storeDisplay } = useContext(ShopifyContext)

//     const navigate = useNavigate()

//     /* Functions */
//     const getBestVariantMetch = ({ selectedOptions }) => {
//         const activeValues = selectedOptions.reduce((acc, option) => {
//             const activeValue = option.values.find(value => value.active)?.value
//             if (activeValue) acc.push({ name: option.name, value: activeValue })
//             return acc
//         }, [])

//         let bestMatchVariant = null
//         let maxMatches = 0

//         product.variants.forEach(variant => {
//             if (variant.available) {
//                 let matchCount = 0
    
//                 activeValues.forEach(activeValue => {
//                     if (variant.selectedOptions.some(option => 
//                         option.name === activeValue.name && option.value === activeValue.value)) {
//                         matchCount++
//                     }
//                 })
    
//                 if (matchCount > maxMatches || 
//                     (matchCount === maxMatches && !bestMatchVariant)) {
//                     bestMatchVariant = variant
//                     maxMatches = matchCount
//                 }
//             }
//         })
//         return bestMatchVariant
//     }

//     const handleClick = () => {
//         const { options: selectedOptions } = storeDisplay?.collection?.options?.find(option => (
//             option.title?.toLowerCase() === storeDisplay?.collection?.selected?.toLowerCase()
//         ))
            
//         let variant = product?.variants.find(variant => variant.available)

//         if (selectedOptions.length > 0) {
//             variant = getBestVariantMetch({ selectedOptions })
//         }

//         if (variant?.idNumber) {
//             navigate(`/product/${product?.idNumber}/${variant?.idNumber}`, { replace: true })
//         } else {
//             navigate(`/product/${product?.idNumber}`, { replace: true })
//         }
//     }

//     /* JSX */
//     return (
//         <div
//             className={"d-s-p-preview-container " + (product?.availableForSale ? "" : "out-of-stock")}
//             onClick={handleClick}>
//             <div className="d-s-p-preview-inner-container">
//                 <DSPPreviewImage product={product}/>
//                 <div className="d-s-p-preview-bottom-container">
//                     <DSPPreviewTitle product={product}/>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default DSPPreview