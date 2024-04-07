import React, { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ShopifyContext } from "../../../../../../../../context/shopify"
import "./p-option-value.scss"

const POptionValue = ({ value }) => {

    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)

    const { productId } = useParams()

    const navigate = useNavigate()

    /* Functions */
    const handleClick = () => {

        // Retrieve the other options that are not the value object
        const otherOptions = storeDisplay.variant.selectedOptions.filter(option => 
            option.name.toLowerCase() !== value.optionName.toLowerCase())

        // Filter the variants that include the selected option with the specific value
        const optionalVariants = storeDisplay.product.variants.filter(variant => 
            variant.available === true &&
            variant.selectedOptions.some(option => 
                option.name.toLowerCase() === value.optionName.toLowerCase() &&
                option.value.toLowerCase() === value.value.toLowerCase()))

        let bestMatch = null
        let highestScore = -1

        // Iterate through each variant to find the best match
        optionalVariants.forEach(variant => {
            let score = 0

            // Compare each selected option of the variant with otherOptions
            variant.selectedOptions.forEach(selectedOption => {
                // Increase the score for each match
                if (otherOptions.some(option => 
                    option.name.toLowerCase() === selectedOption.name.toLowerCase() &&
                    option.value.toLowerCase() === selectedOption.value.toLowerCase())) {
                    score++
                }
            })

            // Update the best match if the current variant has a higher score
            if (score > highestScore) {
                highestScore = score
                bestMatch = variant
            }
        })

        // Return the best matching variant or null if no match found
        if (productId && bestMatch?.idNumber) {
            navigate(`/product/${productId}/${bestMatch?.idNumber}`)
        }   
    }

    /* JSX */
    return (
        <div
            onClick={handleClick}
            className={"p-option-value-container " +
            (value.active ? "active " : "") +
            (value.selected ? "selected " : "")}>
            <p>{value?.value}</p>
        </div>
    )
}

export default POptionValue