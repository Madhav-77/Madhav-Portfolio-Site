import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./socialMedia.module.scss";
import { personalInfo, socialMediaLinks } from "../../../constants/appData";

export default function SocialMedia() {
    const [alertVisible, setAlertVisible] = useState<boolean>(false);

    const copyToClipboard = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        try {
            e.preventDefault()
            await navigator.clipboard.writeText(personalInfo.workEmail);
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 3000);
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };

    return (
        <>
            <Alert showAlert={alertVisible}></Alert>
            <div className={`${styles.social_media_links}`}>
                {socialMediaLinks.map((link, index) => (
                    <span key={index} title={link.title}>
                        <a
                            href={link.href}
                            onClick={link.onClick === "copyEmail" ? (e) => copyToClipboard(e) : undefined}
                            target={link.href !== "#" ? "_blank" : undefined}
                            download={link.download}
                        >
                            <img src={link.iconPath} alt={link.alt} width={link.width} height={link.height} />
                        </a>
                    </span>
                ))}
            </div>
        </>
    )
} 