import styles from "./achievements.module.scss";

export default function Achievements() {
    return (
        <>
            <div className={`${styles.achievements}`}>
                <div className={`${styles.achievements_header}`}>
                    <div className="row m-0 pt-5 text-center justify-content-center">
                        <div className={`col-12 ${styles.heading}`}>
                            Achievements
                        </div>
                        <div className={`col-3`}>
                            <hr />
                        </div>
                    </div>
                    {/* <div className="row m-0 pt-3">
                        <div className={`col-5 ${styles.sub_heading} ${styles.technical}`}>
                            Technical
                        </div>
                        <div className={`col-2 p-0 ${styles.vertical_divider}`}></div>
                        <div className={`col-5 ${styles.sub_heading} ${styles.non_technical}`}>
                            !Technical
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className={`col-12 ${styles.divider}`}>
                            <div className={`${styles.horizontal_divider}`}></div>
                        </div>
                    </div> */}
                </div>
                <div className={`${styles.about_body}`}>
                    <div className="row m-0 justify-content-center">
                        <div className={`${styles.content} col-9 text-justify`}>
                            As a software engineer with 4+ years of industrial exposure, I have strong problem-solving ability and expertise in Angular, JavaScript, SQL, .Net, PHP, and Python. I bring along experience working in an Agile environment, managing juniors, delegating responsibilities, building good connections with clients and stakeholders, engaging in effective communication to understand requirements, and delivering great solutions that exceed expectations.
                        </div>
                        <div className={`${styles.social_media} col-9`}>
                            LinkedIn
                            GitHub
                            HackerRank
                            GeeksForGeeks
                            FreeCodeCamp
                        </div>
                    </div>
                </div>
                {/* <div className={`${styles.journey_body}`}>
                    <div className={`${styles.tech}`}>
                        <div className={`${styles.summary} ${styles.journey_sub_section}`}>
                            <div className={`${styles.heading}`}>
                                Summary
                            </div>
                            <div className={`${styles.content} text-justify`}>
                                As a software engineer with 4+ years of industrial exposure, I have strong problem-solving ability and expertise in Angular, 
                                JavaScript, SQL, .Net, PHP, and Python. I bring along experience working in an Agile environment, managing juniors, delegating 
                                responsibilities, building good connections with clients and stakeholders, engaging in effective communication to understand 
                                requirements, and delivering great solutions that exceed expectations.
                            </div>
                        </div>
                        <div className={`${styles.career} ${styles.journey_sub_section}`}>
                            <div className={`${styles.heading}`}>
                                Career
                            </div>
                            <div className={`${styles.content}`}>
                                <div className={`${styles.company}`}>
                                    <div className={`${styles.sub_heading}`}>
                                        <div>
                                            <img className={`${styles.company_logo}`} src="..\..\src\assets\logos\thinkbridge.jpeg" alt="" />
                                            <span>Thinkbridge</span>
                                        </div>
                                        <div className="row">
                                            <div className={`float-start`}>
                                                <div>Software Engineer</div>
                                                <div>Pune, Maharashtra, IN</div>
                                            </div>
                                            <div className={`float-end`}>
                                                Nov, 2020 - Currently working
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.content}`}>
                                        Work
                                        <ul>
                                            <li>
                                                Worked on a variety of projects, Fintech Web Application for an US based client, Career Service Portal with over 1 million users, and Product Subscription tool.
                                            </li>
                                            <li>
                                                Developed a maintainable and scalable application along with multilingual support through Internationalization (I18N) and Localization (L10N). Expanding the application's global reach and around 2x increase in client’s revenue.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={`${styles.company}`}>
                                    <div className={`${styles.company_name}`}>
                                        (company logo) Thinkbridge
                                        (time period) 
                                        (position) 
                                        (location) 
                                    </div>
                                    <div className={`${styles.content}`}>
                                        Work
                                        <ul>
                                            <li>
                                                Worked on a variety of projects, Fintech Web Application for an US based client, Career Service Portal with over 1 million users, and Product Subscription tool.
                                            </li>
                                            <li>
                                                Developed a maintainable and scalable application along with multilingual support through Internationalization (I18N) and Localization (L10N). Expanding the application's global reach and around 2x increase in client’s revenue.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.projects} ${styles.journey_sub_section}`}>
                            <div className={`${styles.heading}`}>
                                Projects
                            </div>
                            <div className={`${styles.project}`}>
                                <div className={`${styles.sub_heading}`}>
                                    (Project logo) Tab’s Archive
                                    (skills) 
                                </div>
                                <div className={`${styles.content}`}>
                                    Project description
                                </div>
                                <div className={`${styles.projects_links}`}>
                                    Github: https://github.com/Madhav-77<br/>
                                    Project URL: https://github.com/Madhav-77
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.certifications} ${styles.journey_sub_section}`}>
                            <div className={`${styles.heading}`}>
                                Certifications
                            </div>
                            <div className={`${styles.certificate}`}>
                                <div className={`${styles.certificate_name}`}>
                                    Data Structures and Algorithms
                                    (Issued by name)
                                    (year)
                                </div>
                                <div className={`${styles.content}`}>
                                    (Skills learnt)
                                </div>
                                <div className={`${styles.certificate_link}`}>
                                    Certificate: https://github.com/Madhav-77
                                </div>
                            </div>
                            <div className={`${styles.certificate}`}>
                                <div className={`${styles.certificate_name}`}>
                                    Data Structures and Algorithms
                                    (Issued by name)
                                    (year)
                                </div>
                                <div className={`${styles.content}`}>
                                    (Skills learnt)
                                </div>
                                <div className={`${styles.certificate_link}`}>
                                    Certificate: https://github.com/Madhav-77
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.achievements} ${styles.journey_sub_section}`}>
                            <div className={`${styles.heading}`}>
                                Achievements
                            </div>
                            <div className={`${styles.content}`}>
                                <ul>
                                    <li>Graduated with an 8.15 GPA from MIT Pune.</li>
                                    <li>Graduated with an 8.15 GPA from MIT Pune.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.skills} ${styles.journey_sub_section}`}>
                            <div className={`${styles.heading}`}>
                                Skills
                            </div>
                            <div className={`${styles.content}`}>
                                <div className={`${styles.sub_heading}`}>
                                    Technical Skills
                                </div>
                                <div className={`${styles.skill_list}`}>
                                    <ul>
                                        <li>Languages: JavaScript, TypeScript, HTML/CSS, SQL, Python, C#, PHP, Dart</li>
                                        <li>Frameworks: Angular, CodeIgniter, Laravel, Flask, Node JS, Express JS, .NET, .NET Core, Flutter</li>
                                    </ul>
                                </div>
                                <div className={`${styles.sub_heading}`}>
                                    Soft Skills
                                </div>
                                <div className={`${styles.skill_list}`}>
                                    <ul>
                                        <li>Leadership</li>
                                        <li>Team Collaboration</li>
                                        <li>Adaptability</li>
                                        <li>Interpersonal Communication</li>
                                        <li>Delegation</li>
                                        <li>Self-motivation</li>
                                        <li>Detail-oriented</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.non_tech}`}>
                        <div className={`${styles.summary}`}></div>
                        <div className={`${styles.hobbies}`}></div>
                        <div className={`${styles.gallary}`}></div>
                        <div className={`${styles.achievements}`}></div>
                    </div>
                </div> */}
            </div>
        </>
    )
} 