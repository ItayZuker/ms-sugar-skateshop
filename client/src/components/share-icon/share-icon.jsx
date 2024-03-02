import React from "react"
import { ReactComponent as XIcon } from "./icons/x.svg";
import { ReactComponent as WhatsAppIcon } from "./icons/whatsapp.svg";
import { ReactComponent as TelegramIcon } from "./icons/telegram.svg";
import { ReactComponent as SignalIcon } from "./icons/signal.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";
import { ReactComponent as GmailIcon } from "./icons/gmail.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as CopyIcon } from "./icons/copy.svg";


import "./share-icon.scss"

const ShareIcon = ({ icon }) => {

    /* Locale */
    const icons = {
        x: XIcon,
        whatsapp: WhatsAppIcon,
        telegram: TelegramIcon,
        signal: SignalIcon,
        messenger: MessengerIcon,
        instagram: InstagramIcon,
        gmail: GmailIcon,
        facebook: FacebookIcon,
        copy: CopyIcon,
    };

    const IconComponent = icons[icon];

    /* JSX */
    if (!IconComponent) {
        console.warn(`Icon "${icon}" not found.`);
        return null; // or return a default icon
    }

    return <IconComponent className="share-icon" />;

}

export default ShareIcon