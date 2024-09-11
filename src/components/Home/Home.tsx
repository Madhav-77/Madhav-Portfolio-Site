import { useEffect, useState } from "react";
import Header from "./Header/Header";
import styles from "./home.module.scss";

const words = ["Software Engineer", "Musician", "Traveler"];

export default function Home() {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
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
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(typingInterval);
    }, [displayedText, isDeleting, currentWordIndex]);

    return <div className={styles.background}>
        <Header />
        <div className={`row m-0 justify-content-center ${styles.name_section_div}`}>
            <div className={`col-9 padding-side-0`}>
                <div className={`playfair-font ${styles.name_line_1}`}>Hello world!</div>
                <div className={`playfair-font ${styles.name_line_2}`}>I’m Madhav Trivedi</div>
                <div className={`playfair-font ${styles.name_line_3}`}>
                    <span className="test">A&nbsp;</span>
                    <span className={styles.what_i_do}>{displayedText}</span>
                </div>
            </div>
        </div>
    </div>;
}