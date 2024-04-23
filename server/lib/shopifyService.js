const Shopify = require('shopify-api-node')
const { v4: uuidv4 } = require('uuid')

/* Settings */
const shopify = new Shopify({
    shopName: process.env.SHOPIFY_SHOP_NAME,
    accessToken: process.env.SHOPIFY_DISCOUNT_APP_ACCESS_TOKEN
})

/* Functions */
const getDiscountCode = async () => {

    const { code: discountCode } = await shopify.discountCode.create(process.env.SHOPIFY_DISCOUNT_ID, {
        code: uuidv4()
    })

    return { discountCode }
}

module.exports = { getDiscountCode }