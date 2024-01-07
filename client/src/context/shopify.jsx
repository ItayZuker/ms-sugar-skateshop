import React, { createContext, useEffect, useState } from 'react'
import ShopifyBuy from 'shopify-buy';


export const ShopifyContext = createContext();

export const ShopifyProvider = ({ children }) => {

    /* Init Shopify */
    const client = ShopifyBuy.buildClient({
        domain: process.env.REACT_APP_SHOPIFY_SHOP_URL,
        storefrontAccessToken: process.env.REACT_APP_SHOPIFY_PUBLIC_ACCESS_TOKEN
    });

    /* Locale Variables */
    const [loadingStore, setLoadingStore] = useState(true)
    const [store, setStore] = useState({
        collections: [],
        options: []
    })
    const [storeDisplay, setStoreDisplay] = useState({
        collection: {selected: "", options: [], products: []},
        product: {},
        variant: {}
    })

    /* Triggers */
    useEffect(() => {
        initStore()
    }, [])

    useEffect(() => {
        updateCollectionDisplay({ selected: "all products", resetOption: true })
    }, [store])

    useEffect(() => {
        updateStoreDisplayProducts()
    }, [storeDisplay.collection.options, storeDisplay.collection.selected]) 

    /* Functions */
    const initStore = async () => {
        initCheckout()
        const collections = await getCollections()
        const options = getOptions({ collections })
        setStore(prev => ({...prev, collections}));
        setStore(prev => ({...prev, options}));
        setStoreDisplay(prev => ({...prev, collection: {...prev.collection, options}}))
        setLoadingStore(false)
    }
    
    const initCheckout = async () => {
    }

    const getFilteredCollection = ({ products, activeOptions }) => {
        if (!activeOptions || Object.values(activeOptions).every(option => option.length === 0)) {
            return products;
        }

        return products.filter(product => {
            return product.variants.some(variant => {
                if (!variant.available) {
                    return false
                }

                return Object.entries(activeOptions).every(([optionName, activeValues]) => {
                    if (activeValues.length === 0) {
                        return true
                    }
                    const variantOption = variant.selectedOptions.find(opt => opt.name.toLowerCase() === optionName.toLowerCase())
                    return variantOption && activeValues.map(val => val.toLowerCase()).includes(variantOption.value.toLowerCase())
                })
            })
        })
    }

    const getActiveOption = ({ options }) => {

        const optionsMap = {}

        options?.forEach(option => {
            if (!optionsMap[option.name]) {
                optionsMap[option.name] = new Set()
            }
    
            option.values.forEach(val => {
                if (val.active) {
                    optionsMap[option.name].add(val.value)
                }
            })
        })
    
        const optionsWithActiveValues = {}
        for (const [key, value] of Object.entries(optionsMap)) {
            optionsWithActiveValues[key] = Array.from(value)
        }
    
        return optionsWithActiveValues
    }
 
    const updateStoreDisplayProducts = () => {

        const collection = store?.collections?.find(collection => collection?.title?.toLowerCase() === storeDisplay?.collection?.selected?.toLowerCase())

        const selectedCollection = storeDisplay?.collection?.options?.find(option => option?.title?.toLowerCase() === storeDisplay?.collection?.selected?.toLowerCase())
        const activeOptions = getActiveOption({ options: selectedCollection?.options })
        const products = getFilteredCollection({ products: collection?.products || [], activeOptions })

        setStoreDisplay(prev => ({...prev, collection: {...prev.collection, products}}))
    }

    const handleCollection = async (collectionId) => {
        try {
            const collectionWithProducts = await client.collection.fetchWithProducts(collectionId)
            collectionWithProducts.products.forEach(product => {
                const match = product.id.match(/Product\/(\d+)$/);
                if (match) {
                    product.idNumber = match[1]
                } else {
                    console.warn(`Product ID ${product.id} did not match expected format.`)
                }
            })
            return collectionWithProducts
        } catch (err) {
            console.error(`Error fetching collection with ID ${collectionId}:`, err)
            throw err
        }
    }

    const getCollections = async () => {
        try {
            const collections = await client.collection.fetchAll()
            const collectionPromises = collections.map(collection => 
                handleCollection(collection.id)
            )
            return await Promise.all(collectionPromises)
        } catch (err) {
            console.error("Error fetching collections:", err)
        } 
    }

    const getOptions = ({ collections }) => {
        let collectionOptions = []
    
        collections.forEach(collection => {
            let optionsObject = {
                title: collection.title,
                options: []
            }
    
            collection.products.forEach(product => {
                if (product.productType.toLowerCase() === collection.title.toLowerCase()) {
                    product.variants.forEach(variant => {
                        if (variant.available) {
                            variant.selectedOptions.forEach((selectedOption, optIndex) => {
                                let existingOption = optionsObject.options.find(opt => opt.name === selectedOption.name)
    
                                if (existingOption) {
                                    let existingValueIndex = existingOption.values.findIndex(val => val.value === selectedOption.value)
                                    if (existingValueIndex === -1) {
                                        existingOption.values.push({
                                            value: selectedOption.value,
                                            active: false,
                                            optIndex: optIndex,
                                            optName: selectedOption.name,
                                            valIndex: existingOption.values.length,
                                            title: product.productType
                                        })
                                    }
                                } else {
                                    optionsObject.options.push({
                                        name: selectedOption.name,
                                        values: [{
                                            value: selectedOption.value,
                                            active: false,
                                            optIndex: optIndex,
                                            optName: selectedOption.name,
                                            valIndex: 0,
                                            title: product.productType
                                        }]
                                    })
                                }
                            })
                        }
                    })
                }
            })
            collectionOptions.push(optionsObject)
        })
        return collectionOptions
    }

    const updateCollectionDisplay = ({ selected, resetOption }) => {
        setStoreDisplay(prev => {
            if (resetOption) {
                const updatedOptions = prev.collection.options.map(collection => {
                    const updatedCollection = collection.options.map(option => {

                        const isSingleValue = option.values.length === 1

                        const updatedValues = option.values.map(value => ({
                            ...value,
                            active: isSingleValue
                        }))
    
                        return { ...option, values: updatedValues }
                    })
                    return { ...collection, options: updatedCollection }
                })
    
                return {
                    ...prev,
                    collection: {
                        ...prev.collection,
                        options: updatedOptions,
                        selected: selected
                    },
                    product: {}
                };
            } else {
                return {
                    ...prev,
                    collection: {
                        ...prev.collection,
                        selected: selected
                    },
                    product: {}
                }
            }
        })
    }

    const getDefaultVariant = ({ product }) => {
    
        const selectedTitle = storeDisplay?.collection?.selected?.toLowerCase()
        const optionsObject = storeDisplay?.collection?.options?.find(option => 
            option.title.toLowerCase() === selectedTitle
        )
    
        if (!optionsObject || optionsObject.options.length === 0) {
            return product.variants.find(variant => variant.available) || null
        }
    
        const availableVariants = product.variants.filter(variant => variant.available)
    
        const hasSelectedOptions = (variant) => {
            return optionsObject.options.every(option => {
                const activeOption = option.values.find(value => value.active)
                if (!activeOption) return false
    
                return variant.selectedOptions.some(selectedOption => 
                    selectedOption.name.toLowerCase() === option.name.toLowerCase() && 
                    selectedOption.value.toLowerCase() === activeOption.value.toLowerCase()
                )
            })
        }
    
        const matchingVariant = availableVariants.find(hasSelectedOptions)
    
        return matchingVariant || availableVariants[0]
    }

    const updateProductDisplay = async ({ productId }) => {
        const product = await client.product.fetch(`gid://shopify/Product/${productId}`)
        const defaultVariant = getDefaultVariant({ product })
        setStoreDisplay(prev => ({...prev, product, variant: defaultVariant}))
    }

    const payload = {
        store,
        storeDisplay,
        loadingStore,
        setStoreDisplay,
        updateCollectionDisplay,
        updateProductDisplay
    }

    /* JSX */
    return (
        <ShopifyContext.Provider value={payload}>
            {children}
        </ShopifyContext.Provider>
    );
};