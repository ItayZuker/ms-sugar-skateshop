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