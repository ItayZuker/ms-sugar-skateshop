const isValidEmail = ({ email }) => {
    if (typeof email !== 'string') {
        throw new Error("Invalid input: email must be a string.")
    }

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email.toLowerCase())
}

const isValidMessage = ({ message, maxCharacters }) => {
    if (typeof message !== 'string' || message.trim().length === 0 || message.trim().length >= maxCharacters) {
        throw new Error(`Invalid message: must be a string between 1 and ${maxCharacters} characters.`)
    }
    return true;
}

const isValidName = ({ name }) => {
    if (typeof name !== 'string' || name.trim().length === 0 || name.trim().length >= 50) {
        throw new Error("Invalid name: must be a string between 1 and 49 characters.")
    }
    return true
}

const isValidText = ({ text }) => {
    if (typeof text !== 'string' || text.trim().length === 0) {
        throw new Error("Invalid text: must be a non-empty string.")
    }
    return true
}

const isValidIAgree = ({ iAgree }) => {
    if (typeof iAgree !== 'boolean' || iAgree !== true) {
        throw new Error("Invalid input: iAgree must be a boolean and true.");
    }
    return true;
}

const isValidTextDir = ({ textDir }) => {
    if (textDir !== 'rtl' && textDir !== 'ltr') {
        throw new Error("Invalid textDir: must be 'rtl' or 'ltr'.");
    }
    return true;
}

module.exports = {
    isValidEmail,
    isValidMessage,
    isValidName,
    isValidText,
    isValidIAgree,
    isValidTextDir
}