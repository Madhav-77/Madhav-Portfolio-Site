import Social_media from "../shared/Social-media/Social-media";
import styles from "./footer.module.scss";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className={`${styles.footer}`} id="footer">
            <div className={`row m-0 justify-content-center`}>
                <div className={`col-12 text-center`}>
                    <div className={`${styles.sub_heading}`}>Thanks for stopping by, let's connect!</div>
                    <div className={`${styles.heading}`}>Madhav Trivedi</div>
                    <div className={`${styles.social_media}`}><Social_media /></div>
                </div>
                <div className={`col-9`}>
                    <hr />
                </div>
            </div>
            <div className={`row m-0 justify-content-center`}>
                <div className={`col-12 text-center`}>
                    &copy; <span>{currentYear}</span> <b>Madhav Trivedi</b>. All Rights Reserved.
                </div>
                <div className={`col-12 text-center`}>
                    Built from scratch! 🥂
                </div>
            </div>
        </div>
    )
} 