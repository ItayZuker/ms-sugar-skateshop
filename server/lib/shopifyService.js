const Shopify = require('shopify-api-node')
var cc = require('coupon-code');

/* Settings */
const shopify = new Shopify({
    shopName: process.env.SHOPIFY_SHOP_NAME,
    accessToken: process.env.SHOPIFY_DISCOUNT_APP_ACCESS_TOKEN
})

/* Functions */
const getDiscountCode = async () => {

    const { code: discountCode } = await shopify.discountCode.create(process.env.SHOPIFY_DISCOUNT_ID, {
        code: cc.generate({ parts : 3 })
    })

    return { discountCode }
}

module.exports = { getDiscountCode }