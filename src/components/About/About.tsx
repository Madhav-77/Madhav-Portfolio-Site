import SocialMedia from "../shared/SocialMedia/SocialMedia";
import styles from "./about.module.scss";
import { aboutPageData } from "../../constants/appData";

export default function About() {
    const { techStackProficiency, interests, description } = aboutPageData;

    return (
        <>
            <div className={`${styles.about} pt-5 pb-5`} id="about">
                <div className={`${styles.about_header}`}>
                    <div className="row m-0 text-center justify-content-center">
                        <div className={`col-12 ${styles.heading}`}>
                            About
                        </div>
                        <div className="col-3">
                            <hr />
                        </div>
                    </div>
                </div>
                <div className={`${styles.about_body} mt-4`}>
                    <div className="row m-0 justify-content-center">
                        <div className="col-11 col-lg-9 padding-side-0">
                            <div className={styles.two_col}>
                                <div>
                                    <div className={styles.description}>
                                        <p>{description[0]}</p>
                                        <p>{description[1]}</p>
                                    </div>
                                    <div className={styles.description}>
                                        <p>{description[2]}</p>
                                        <p>{description[3]}</p>
                                    </div>
                                    <div className={styles.social_media}>
                                        <SocialMedia />
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.skills_heading}>Skills</div>
                                    <div>
                                        {techStackProficiency.map((skill, index) => (
                                            <span key={index} className={styles.skill_tag}>{skill.name}</span>
                                        ))}
                                    </div>
                                    <div className={styles.interests_heading}>Interests</div>
                                    <div>
                                        {interests.map((interest, index) => (
                                            <span key={index} className={styles.interest_tag}>{interest}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
