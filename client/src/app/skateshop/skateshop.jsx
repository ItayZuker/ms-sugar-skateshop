import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../context/shopify"
// import { HelmetContext } from "../../context/helmet"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import { useMedia } from "../../hooks/useMedia"
import MShop from "./m-shop/m-shop"
import DShop from "./d-shop/d-shop"
import "./skateshop.scss"

const Skateshop = () => {

    /* Global */
    const { storeDisplay, store } = useContext(ShopifyContext)

    // const { updateOgTags } = useContext(HelmetContext)

    const { media } = useMedia()

    const location = useLocation();
    
    /* Locale */
    const [products, setProducts] = useState([])

    const [categories, setCategories] = useState([])

    const [collectionOptions, setCollectionOptions] = useState([])

    /* Triggers */
    useEffect(() => {
        goToPageTop()
        // updateOgTags({url: `ms-sugar.com/${location.pathname}`})
    }, [location, storeDisplay?.collection])
    
    useEffect(() => {
        updateProducts()
    }, [storeDisplay?.collection?.products])

    useEffect(() => {
        updateCollectionOptions()
    }, [storeDisplay])

    useEffect(() => {
        updateOptions()
    }, [store])

    /* Functions */
    const updateOptions = () => {
        if (store?.options?.length > 0) {
            const sort = ["all products", "decks", "wheels", "bearings", "trucks", "grips", "hardware"] 
            setCategories(() => {
                return store.options
                    .filter(option => sort.includes(option?.title?.toLowerCase()))
                    .sort((a, b) => sort.indexOf(a?.title?.toLowerCase()) - sort?.indexOf(b?.title?.toLowerCase()))
            })
        }
    }

    const getOptions = ({ selectedOptions }) => {
        const optionsCopy = JSON.parse(JSON.stringify(selectedOptions));
    
        const activeOptions = optionsCopy?.reduce((acc, option) => {
            const activeValue = option?.values?.find(value => value?.active)?.value;
            if (activeValue) acc?.push({ name: option?.name, value: activeValue });
            return acc;
        }, []);
    
        const hasActiveValues = activeOptions?.length > 0;
    
        optionsCopy.forEach(option => {
            const isActiveOption = activeOptions?.some(opt => opt?.name === option?.name);
    
            option?.values?.forEach(value => {
                if (isActiveOption) {
                    value.lock = !value?.active;
                } else {
                    if (hasActiveValues) {
                        value.lock = !storeDisplay?.collection?.products?.some(product => 
                            product?.variants?.some(variant => 
                                variant?.available && 
                                activeOptions?.every(activeOpt => 
                                    variant?.selectedOptions?.some(selectedOption => 
                                        selectedOption?.name === activeOpt?.name && selectedOption?.value === activeOpt?.value
                                    )
                                ) &&
                                variant?.selectedOptions.some(selectedOption => 
                                    selectedOption?.name === option?.name && selectedOption?.value === value?.value
                                )
                            )
                        );
                    } else {
                        value.lock = false;
                    }
                }
            });
        });
    
        return optionsCopy;
    }

    const updateCollectionOptions = () => {

        const selected = storeDisplay?.collection?.options?.find(option => (
            option?.title?.toLowerCase() === storeDisplay?.collection?.selected?.toLowerCase()
        ));

        const options = getOptions({ selectedOptions: selected?.options || [] })
        setCollectionOptions(options || []);
    
    }

    const updateProducts = async () => {
        const typeOrder = ["decks", "wheels", "bearings", "trucks", "grips", "tools", "spacers"]

        const sortedProducts = await storeDisplay?.collection?.products?.sort((a, b) => {
            const indexA = typeOrder.indexOf(a.productType);
            const indexB = typeOrder.indexOf(b.productType);
    
            // If both types are in the typeOrder array, sort by their index
            if (indexA !== -1 && indexB !== -1) {
                return indexA - indexB;
            }
            // If a's type is not in the array, it should come after b
            else if (indexA === -1) {
                return 1;
            }
            // If b's type is not in the array, it should come after a
            else if (indexB === -1) {
                return -1;
            }
        })

        setProducts(sortedProducts)
        
    }

    /* JSX */
    return (
        <div className="page skateshop">
            {media?.type === "mobile"
                ? <MShop
                    categories={categories}
                    products={products}/>
                : <DShop
                    products={products}
                    collectionOptions={collectionOptions}/>
            }
        </div>
    )
}

export default Skateshop