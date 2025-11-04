import SocialMedia from "../shared/SocialMedia/SocialMedia";
import styles from "./footer.module.scss";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className={`${styles.footer} pt-4 pb-3`} id="footer">
            <div className={`row m-0 justify-content-center`}>
                <div className={`col-9 text-center padding-side-0`}>
                    <div className={`${styles.sub_heading}`}>Thanks for stopping by, let’s connect!</div>
                    <div className={`${styles.heading}`}><a className={`${styles.linkedin_link}`} href="https://www.linkedin.com/in/madhavpt" target="_blank">Madhav Trivedi</a></div>
                    <div className={`${styles.social_media}`}><SocialMedia /></div>
                </div>
                <div className={`col-9 padding-side-0`}>
                    <hr />
                </div>
            </div>
            <div className={`row m-0 justify-content-center`}>
                <div className={`col-9 text-center padding-side-0`}>
                    &copy; <span>{currentYear}</span> <b><a className={`${styles.linkedin_link}`} href="https://www.linkedin.com/in/madhavpt" target="_blank">Madhav Trivedi</a></b>. All Rights Reserved.
                </div>
                <div className={`col-9 text-center padding-side-0`}>
                    Built from scratch! 🥂
                </div>
            </div>
        </div>
    )
} 