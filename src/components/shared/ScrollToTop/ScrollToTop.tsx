import { useEffect, useState } from "react";
import styles from "./scrollToTop.module.scss";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <button className={`btn btn-primary ${styles.scrollToTopButton} ${isVisible ? styles.visible : ''}`} onClick={scrollToTop} aria-label="Scroll to top">
                <span className={styles.scrollToTopButtonText}>^</span>
            </button>
        </>
    )
} 