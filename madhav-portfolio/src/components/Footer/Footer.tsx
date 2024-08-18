import Social_media from "../shared/Social-media/Social-media";
import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <div className={`${styles.footer}`}>
            <div className={`row m-0 justify-content-center`}>
                <div className={`col-12 text-center`}>
                    <div className={`${styles.heading}`}>Madhav Trivedi</div>
                    <div className={`${styles.social_media}`}><Social_media /></div>
                </div>
                <div className={`col-9`}>
                    <hr />
                </div>
            </div>
            <div className={`row m-0 justify-content-center`}>
                <div className={`col-12 text-center`}>
                    &copy; <span>2024</span> <b>Madhav Trivedi</b>. All Rights Reserved.
                </div>
            </div>
        </div>
    )
} 