export const goToPageTop = () => {
    const html = document.querySelector('html')
    html.scrollTop = 0
}

export const getTotalItems = ({ lineItems }) => {
    let totalItems = 0
    lineItems?.forEach(item => {
        totalItems += item?.quantity
    });
    return totalItems
}

export const formatPrice = (amount = 0, currencyCode = "usd") => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
    }).format(amount);
};