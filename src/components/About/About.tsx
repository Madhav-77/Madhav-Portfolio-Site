import { useState } from "react";
import SocialMedia from "../shared/SocialMedia/SocialMedia";
import styles from "./about.module.scss";
import { aboutPageData } from "../../constants/appData";

export default function About() {
    const [progressBarWidth, setModalContent] = useState<string>("0%")

    const { techStackProficiency, interests, description } = aboutPageData;

    function updateProgressBar(progress: string) {
        setModalContent(progress)
    }

    return (
        <>
            <div className={`${styles.about} pt-5 pb-5`} id="about">
                <div className={`${styles.about_header}`}>
                    <div className="row m-0 text-center justify-content-center">
                        <div className={`col-12 ${styles.heading}`}>
                            About
                        </div>
                        <div className={`col-3`}>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className={`${styles.about_body}`}>
                    <div className="row m-0 justify-content-center">
                        <div className={`${styles.content} col-9 text-justify padding-side-0`}>
                        <p>
                            {description[0]} <br />
                            {description[1]}
                        </p>
                        <p>
                            {description[2]} <br />
                            {description[3]}
                        </p>
                        </div>
                        <div className={`${styles.social_media} col-9 padding-side-0`}>
                            <SocialMedia />
                        </div>
                    </div>
                    <div className="row m-0 justify-content-center">
                        <div className={`${styles.skills} col-9 padding-side-0`}>
                            <div className={`${styles.skills_heading}`}>Skills</div>
                            <div className="row justify-content-center pt-1" onMouseLeave={() => updateProgressBar("0%")}>
                                {techStackProficiency.map((skill, index) => (
                                    <div key={index} className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                        <div className={`cursor-pointer w-fit-content`} onMouseEnter={() => updateProgressBar(skill.proficiency)}>
                                            {skill.name}
                                        </div>
                                    </div>
                                ))}
                                <div className={`col-12 pt-3 pb-3`}>
                                    <b>Proficiency</b>
                                    <div className="progress mt-1">
                                        <div className={`progress-bar ${styles.custom_progress_bar}`} role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: progressBarWidth}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 justify-content-center">
                        <div className={`${styles.interests} col-9 padding-side-0`}>
                            <div className={`${styles.interests_heading}`}>Interests</div>
                            <div className="row justify-content-center pt-1">
                                {interests.map((interest, index) => (
                                    <div key={index} className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                        <div className={`w-fit-content`}>
                                            {interest}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 