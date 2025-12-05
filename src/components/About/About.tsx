import { useState } from "react";
import SocialMedia from "../shared/SocialMedia/SocialMedia";
import styles from "./about.module.scss";

export default function About() {
    const [progressBarWidth, setModalContent] = useState<string>("0%")

    const techStackProficiency = [
        {
            name: "NestJs",
            proficiency: "75%"
        },
        {
            name: "NodeJs",
            proficiency: "70%"
        },
        {
            name: "Python",
            proficiency: "60%"
        },
        {
            name: "AWS (Amazon Web Services)",
            proficiency: "40%"
        },
        {
            name: "JavaScript",
            proficiency: "80%"
        },
        {
            name: "TypeScript",
            proficiency: "80%"
        },
        {
            name: "PostgreSQL",
            proficiency: "60%"
        },
        {
            name: "MongoDB",
            proficiency: "40%"
        },
        {
            name: "Docker",
            proficiency: "40%"
        },
        {
            name: "CI/CD",
            proficiency: "50%"
        },
        {
            name: "Data structures and Algorithms",
            proficiency: "60%"
        },
        {
            name: "System Design",
            proficiency: "65%"
        },
        {
            name: "React",
            proficiency: "40%"
        },
        {
            name: "Angular",
            proficiency: "70%"
        },
        {
            name: "Problem solving",
            proficiency: "90%"
        },
        {
            name: "Debugging and Troubleshooting",
            proficiency: "90%"
        }
    ];

    const interests = [
        "Global Affairs/Events",
        "Investment & Trading",
        "Astrophysics",
        "Music (Guitar, Ukulele, Singing)",
        "Reading",
        "Cooking",
        "Swimming",
        "Photography"
    ];

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
                            I’m a Software Engineer with 6 years of experience leading teams, scaling systems, and building features that make a real business impact. I’ve worked across the stack — from designing microservices and AI-driven workflows to setting up CI/CD pipelines and pulling off smooth deployments.

                        </p>
                        <p>
                            I escapse standups and retros by hiking a trail or jamming on my guitar. <br />
                            Always up for a good conversation — tech, global events, or startup ideas. Deal is to have coffee involved. 😄
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