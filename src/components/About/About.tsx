import { useState } from "react";
import Social_media from "../shared/Social-media/Social-media";
import styles from "./about.module.scss";

export default function About() {
    const [progressBarWidth, setModalContent] = useState<string>("0%")

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
                        <div className={`${styles.content} col-9 text-justify`}>
                            As a software engineer with 4+ years of industrial exposure, I have strong problem-solving ability and expertise in Angular, JavaScript, SQL, .Net, and Python. I bring along experience working in an Agile environment, managing juniors, delegating responsibilities, building good connections with clients and stakeholders, engaging in effective communication to understand requirements, and delivering great solutions that exceed expectations.
                        </div>
                        <div className={`${styles.social_media} col-9`}>
                            <Social_media />
                        </div>
                    </div>
                    <div className="row m-0 justify-content-center">
                        <div className={`${styles.skills} col-9`}>
                            <div className={`${styles.skills_heading}`}>Skills</div>
                            <div className="row justify-content-center pt-1" onMouseLeave={() => updateProgressBar("0%")}>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`cursor-pointer w-fit-content`} onMouseEnter={() => updateProgressBar("65%")}>
                                        Python
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`cursor-pointer w-fit-content`} onMouseEnter={() => updateProgressBar("55%")}>
                                        C# 
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`cursor-pointer w-fit-content`} onMouseEnter={() => updateProgressBar("60%")}>
                                        .NET                             
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`cursor-pointer w-fit-content`} onMouseEnter={() => updateProgressBar("80%")}>
                                        JavaScript
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`cursor-pointer w-fit-content`} onMouseEnter={() => updateProgressBar("80%")}>
                                        TypeScript
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`cursor-pointer w-fit-content`} onMouseEnter={() => updateProgressBar("80%")}>
                                        Angular 
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`cursor-pointer w-fit-content`} onMouseEnter={() => updateProgressBar("40%")}>
                                        React 
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`cursor-pointer w-fit-content`} onMouseEnter={() => updateProgressBar("70%")}>
                                        SQL
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`cursor-pointer w-fit-content`} onMouseEnter={() => updateProgressBar("70%")}>
                                        Data structures and Algorithms
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`cursor-pointer w-fit-content`} onMouseEnter={() => updateProgressBar("65%")}>
                                        System Design
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`cursor-pointer w-fit-content`} onMouseEnter={() => updateProgressBar("85%")}>
                                        Problem solving 
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`cursor-pointer w-fit-content`} onMouseEnter={() => updateProgressBar("88%")}>
                                        Debugging and Troubleshooting
                                    </div>
                                </div>
                                <div className={`col-12 pt-3`}>
                                    <div className="progress">
                                        <div className={`progress-bar ${styles.custom_progress_bar}`} role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: progressBarWidth}}></div>
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