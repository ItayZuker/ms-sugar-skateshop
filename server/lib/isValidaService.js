const isValidEmail = ({ email }) => {
    if (typeof email !== 'string') {
        throw new Error("Invalid email: Must be a string.")
    }
    if (email.trim().length >= 100) {
        throw new Error(`Invalid email: Must be less then 50 characters.`)
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(email.toLowerCase())) {
        throw new Error("Invalid email: Does not match the expected format.")
    }
    return true
}

const isValidMessage = ({ message, maxCharacters }) => {
    if (typeof message !== 'string') {
        throw new Error("Invalid message: Must be a string.")
    }
    if (message.trim().length === 0) {
        throw new Error(`Invalid message: Must be a non-empty string.`)
    }
    if (message.trim().length >= maxCharacters) {
        throw new Error(`Invalid message: Must be less then ${maxCharacters} characters.`)
    }
    return true
}

const isValidProductName = ({ productName }) => {
    if (typeof productName !== 'string') {
        throw new Error("Invalid product name: Must be a string.")
    }
    if (productName.trim().length === 0) {
        throw new Error("Invalid product name: Must be a non-empty string.")
    }
    if (productName.trim().length >= 50) {
        throw new Error("Invalid product name: Must be less then 50 characters.")
    }
    return true
}

const isValidName = ({ name }) => {
    if (typeof name !== 'string') {
        throw new Error("Invalid name: Must be a string.")
    }
    if (name.trim().length === 0) {
        throw new Error("Invalid name: Must be a non-empty string.")
    }
    if (name.trim().length >= 20) {
        throw new Error("Invalid name: Must be less then 20 characters.")
    }
    return true
}

const isValidText = ({ text, maxCharacters }) => {
    if (typeof text !== 'string') {
        throw new Error("Invalid text: Must be a string.")
    }
    if (text.trim().length === 0) {
        throw new Error("Invalid text: Must be a non-empty string.")
    }
    if (text.trim().length >= maxCharacters) {
        throw new Error(`Invalid text: Must be a less then ${maxCharacters} characters.`)
    }
    return true
}

const isValidIAgree = ({ iAgree }) => {
    if (typeof iAgree !== 'boolean') {
        throw new Error("Invalid iAgree: Must be boolean.")
    }
    if (iAgree !== true) {
        throw new Error("Invalid iAgree: Must be true.")
    }
    return true
}

const isValidTextDir = ({ textDir }) => {
    if (textDir !== 'rtl' && textDir !== 'ltr') {
        throw new Error("Invalid text direction: Must be 'rtl' or 'ltr'.")
    }
    return true
}

module.exports = {
    isValidEmail,
    isValidMessage,
    isValidName,
    isValidText,
    isValidIAgree,
    isValidTextDir,
    isValidProductName
}