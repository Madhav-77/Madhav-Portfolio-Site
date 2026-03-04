import { useEffect, useState } from "react";
import Header from "./Header/Header";
import styles from "./home.module.scss";
import { homePageData } from "../../constants/appData";

export default function Home() {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const currentWord = homePageData.roles[currentWordIndex];
        let typingInterval;

        if (isDeleting) {
        typingInterval = setTimeout(() => {
            setDisplayedText(currentWord.substring(0, displayedText.length - 1));
            setTypingSpeed(100);
        }, typingSpeed);
        } else {
        typingInterval = setTimeout(() => {
            setDisplayedText(currentWord.substring(0, displayedText.length + 1));
            setTypingSpeed(150);
        }, typingSpeed);
        }

        if (!isDeleting && displayedText === currentWord) {
            setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && displayedText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % homePageData.roles.length);
        }

        return () => clearTimeout(typingInterval);
    }, [displayedText, isDeleting, currentWordIndex]);

    return <div className={styles.background}>
        <Header />
        <div className={`row m-0 justify-content-center ${styles.name_section_div}`}>
            <div className={`col-8 padding-side-0`}>
                <div className="float-end">
                    <div className={`playfair-font ${styles.name_line_1}`}>{homePageData.greeting}</div>
                    <div className={`playfair-font ${styles.name_line_2}`}>{homePageData.name}</div>
                    <div className={`playfair-font ${styles.name_line_3}`}>
                        <span>A&nbsp;</span>
                        <span className={styles.what_i_do}>{displayedText}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}