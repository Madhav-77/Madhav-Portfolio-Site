import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./socialMedia.module.scss";

export default function SocialMedia() {
    const [alertVisible, setAlertVisible] = useState<boolean>(false);
    const myWorkEmail = "madhavtrivedi.work17@gmail.com";
    const copyToClipboard = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        try {
            e.preventDefault()
            await navigator.clipboard.writeText(myWorkEmail);
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
                <span title="madhavtrivedi.work17@gmail.com">
                    <a href="#" onClick={(e) => copyToClipboard(e)}>
                        <img src="./assets/svg/mail.svg" alt="email" width="30" height="30" />
                    </a>
                </span>
                <span title="LinkedIn">
                    <a href="https://www.linkedin.com/in/madhavpt" target="_blank">
                        <img src="./assets/svg/linkedin.svg" alt="linkedIn" width="30" height="30" />
                    </a>
                </span>
                <span title="GitHub">
                    <a href="https://github.com/Madhav-77" target="_blank">
                        <img src="./assets/svg/github.svg" alt="github" width="30" height="30" />
                    </a>
                </span>
                <span title="Hacker Rank">
                    <a href="https://www.hackerrank.com/profile/madhavtrivedi_77" target="_blank">
                        <img src="./assets/svg/hackerrank.svg" alt="hacker rank" width="35" height="35" />
                    </a>
                </span>
                <span title="Geeks For Geeks">
                    <a href="https://www.geeksforgeeks.org/user/madhavtrivedi77/" target="_blank">
                        <img src="./assets/svg/geeksforgeeks.svg" alt="geeks for geeks" width="30" height="30" />
                    </a>
                </span>
                <span title="Free Code Camp">
                    <a href="https://www.freecodecamp.org/madhavtrivedi77" target="_blank">
                        <img src="./assets/svg/freecodecamp.svg" alt="free code camp" width="30" height="30" />
                    </a>
                </span>
                <span title="Download Resume">
                    <a href="./assets/Madhav_Trivedi_Resume.pdf" download="Madhav_Trivedi_Resume.pdf">
                        <img src="./assets/svg/resume.svg" alt="resume" width="30" height="30" />
                    </a>
                </span>
            </div>
        </>
    )
} 