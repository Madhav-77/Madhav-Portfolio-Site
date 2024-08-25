import styles from "./career.module.scss";

export default function Career() {
    return (
        <>
            <div className={`${styles.career}`}>
                <div className={`${styles.career_header}`}>
                    <div className="row m-0 pt-5 text-center justify-content-center">
                        <div className={`col-12 ${styles.heading}`}>
                            Career
                        </div>
                        <div className={`col-3`}>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className={`${styles.about_body}`}>
                    <div className="row m-0 justify-content-center">
                        <div className={`${styles.content} col-9 text-justify`}>
                        <section className={styles.company_section}>
                          <ul className={styles.company_list}>
                            <li className={`${styles.company} ${styles.current}`}>
                              <div className={`${styles.company_heading} row`}>
                                <div className={`${styles.company_name} col-12`}>
                                  <span className={styles.company_name}><a href="#">ThinkBridge Software</a> (Software Engineer)</span>
                                  <span className="float-end">Pune, MH, India</span>
                                </div>
                                <div className={`${styles.company_name} col-12 mb-2`}>
                                  <span className="">Nov 2020 - Current</span>
                                </div>
                              </div>
                              <p className="">
                                <ul>
                                  <li>Worked on a variety of projects, Fintech Web Application for an US based client, Career Service Portal with over 1 million users, and Product Subscription tool.</li>
                                  <li>Developed a maintainable and scalable application along with multilingual support through Internationalization (I18N) and Localization (L10N). Expanding the application's global reach and around 2x increase in client’s revenue.</li>
                                  <li>Implemented client-side Caching and a file versioning system to detect file changes and invalidate Cache when file is updated.</li>
                                  <li>Designed a high-performance system for handling a large dataset with dropdown options ranging from 10 to 100,000 entries. It improved the page performance by around 60%.</li>
                                  <li>Migrated a project from Monolith(MVC) Architecture to Microservice Architecture. This reduced the page response time by around 20-30%.</li>
                                </ul>
                              </p>
                            </li>

                            <li className={`${styles.company}`}>
                              <div className={`${styles.company_heading} row`}>
                                <div className={`${styles.company_name} col-12`}>
                                  <span className={styles.company_name}><a href="#">Ubisoft India</a> (Junior Web Developer)</span>
                                  <span className="float-end">Pune, MH, India</span>
                                </div>
                                <div className={`${styles.company_name} col-12 mb-2`}>
                                  <span className="">Jan 2020 - Nov 2020</span>
                                </div>
                              </div>
                              <p className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                                necessitatibus adipisci, ad alias, voluptate pariatur officia
                                repellendus repellat inventore fugit perferendis totam dolor
                                voluptas et corrupti distinctio maxime corporis optio?
                              </p>
                            </li>

                            <li className={`${styles.company}`}>
                              <div className={`${styles.company_heading} row`}>
                                <div className={`${styles.company_name} col-12`}>
                                  <span className={styles.company_name}><a href="#">iTalent Management Consultants</a> (Web Developer Intern)</span>
                                  <span className="float-end">Pune, MH, India</span>
                                </div>
                                <div className={`${styles.company_name} col-12 mb-2`}>
                                  <span className="">May 2019 - Jun 2019</span>
                                </div>
                              </div>
                              <p className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                                necessitatibus adipisci, ad alias, voluptate pariatur officia
                                repellendus repellat inventore fugit perferendis totam dolor
                                voluptas et corrupti distinctio maxime corporis optio?
                              </p>
                            </li>
                          </ul>
                        </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 