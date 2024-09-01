import Header from "./Header/Header";
import styles from "./home.module.scss";

export default function Home() {
    return <div className={styles.background}>
        <Header />
        <div className={`row m-0 justify-content-center ${styles.name_section_div}`}>
            <div className={`col-9`}>
                <div className={`playfair-font ${styles.name_line_1}`}>Hello world!</div>
                <div className={`playfair-font ${styles.name_line_2}`}>I'm Madhav Trivedi</div>
                <div className={`playfair-font ${styles.name_line_3}`}>A Software Engineer</div>
            </div>
        </div>
    </div>;
}