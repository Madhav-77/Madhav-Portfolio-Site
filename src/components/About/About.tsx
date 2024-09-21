import { useState } from "react";
import SocialMedia from "../shared/SocialMedia/SocialMedia";
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
                        <div className={`${styles.content} col-9 text-justify padding-side-0`}>
                        {/* <p>
                            I’m a software engineer with 5 years of experience communicating with machines—and 20+ years with people! My day job is to convince my computer that yes, it can do that. I’m all about building something that makes life easier (or at least makes you say, “Hey, that’s cool!”).
                        </p> */}
                        <p>
                            I’m a Software Engineer with 5 years of experience. Always up for new challenges, whether it’s building scalable systems or solving complex problems. When I’m away from the screen, you’ll find me hiking trails, looking for a different kind of bugs, or playing guitar.
                        </p>
                        <p>
                            Oh, and whether it’s tech, global events, or exchanging good ideas, I’m always up for a meaningful conversation over coffee.
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
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`w-fit-content`}>
                                        Global Affairs/Events
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`w-fit-content`}>
                                        Investment & Trading
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`w-fit-content`}>
                                        Astrophysics                            
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`w-fit-content`}>
                                        Music (Guitar, Ukulele, Singing)
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`w-fit-content`}>
                                        Reading
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`w-fit-content`}>
                                        Cooking 
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`w-fit-content`}>
                                        Swimming 
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-1">
                                    <div className={`w-fit-content`}>
                                        Photography
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