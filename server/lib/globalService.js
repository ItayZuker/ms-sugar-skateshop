const getTextareaAsHTML = ({ textareaString }) => {
    const encodeHTML = (str) => {
        return str.replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#39;');
    };

    const processedText = encodeHTML(textareaString).replace(/\n/g, '<br>')

    return `<p>${processedText}</p>`
}

module.exports = {
    getTextareaAsHTML
}