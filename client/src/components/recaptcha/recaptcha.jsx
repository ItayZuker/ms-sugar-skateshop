import { useEffect } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const ReCaptcha = ({ action }) => {

    /* Global */
    const { executeRecaptcha } = useGoogleReCaptcha()

    /* Triggers */
    useEffect(() => {
        handleReCaptchaVerify()
    }, [executeRecaptcha])

    /* Functions */
    const handleReCaptchaVerify = () => {
        if (executeRecaptcha) {
            executeRecaptcha(action || "global")
        }
    }

    return null
}

export default ReCaptcha
