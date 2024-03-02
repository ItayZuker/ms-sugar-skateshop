import React from "react"
import ShareIcon from "../../../../../../../components/share-icon/share-icon"
import "./p-share-popup-option.scss"

const PSharePopupOption = ({ option, setShare }) => {

    /* Functions */
    const handleShare = () => {
        switch (option) {
            case "copy":
                const pageUrl = window.location.href
                navigator.clipboard.writeText(pageUrl)
                    .then(() => {
                        alert('Page URL copied to clipboard successfully!');
                        setShare(false)
                    })
                    .catch(err => {
                        console.error('Failed to copy the page URL: ', err);
                        alert('Failed to copy the URL.');
                        setShare(false)
                    });
                break;
            case 'x':
                const twitterText = encodeURIComponent("Check out this amazing product at: " + window.location.href);
                const twitterUrl = `https://twitter.com/intent/tweet?text=${twitterText}`;
                window.open(twitterUrl, '_blank', 'noopener,noreferrer');
                setShare(false)
                break;
            case 'whatsapp':
                const whatsAppText = encodeURIComponent("Check out this amazing product at: " + window.location.href);
                window.open(`https://wa.me/?text=${whatsAppText}`, '_blank', 'noopener,noreferrer');
                setShare(false)
                break;
            case 'signal':
                // Signal does not have a web API for sharing, similar to WhatsApp we can only direct to the app
                console.warn('Signal sharing is not implemented since it does not support direct web sharing.');
                setShare(false)
                break;
            case 'instagram':
                // Instagram does not support direct sharing via web API
                console.warn('Instagram does not support direct sharing via web API.');
                setShare(false)
                break;
            case 'facebook':
                const facebookUrl = encodeURIComponent(window.location.href);
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${facebookUrl}`, '_blank', 'noopener,noreferrer');
                setShare(false)
                break;
            case 'messenger':
                const messengerUrl = encodeURIComponent(window.location.href);
                window.open(`fb-messenger://share?link=${messengerUrl}`, '_blank', 'noopener,noreferrer');
                setShare(false)
                break;
            case 'gmail':
                const subject = encodeURIComponent("Check out this product");
                const body = encodeURIComponent("I found this amazing product, check it out: " + window.location.href);
                window.open(`https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&body=${body}`, '_blank', 'noopener,noreferrer');
                setShare(false)
                break;
            case 'telegram':
                const telegramText = encodeURIComponent("Check out this amazing product at: " + window.location.href);
                window.open(`https://telegram.me/share/url?url=${telegramText}`, '_blank', 'noopener,noreferrer');
                setShare(false)
                break;
            default:
                console.warn(`Share option '${option}' is not implemented.`);
                setShare(false)
        }
    };

    /* JSX */
    return (
        <div
            onClick={handleShare}
            className="p-share-popup-option-container">
            <ShareIcon icon={option}/>
            <p>{option}</p>
        </div>
    )
}

export default PSharePopupOption