import styles from "./career.module.scss";
import { companyList } from "../../constants/appData";

export default function Career() {
    return (
        <>
            <div className={`${styles.career} pt-5 pb-5`} id="career">
                <div className={`${styles.career_header}`}>
                    <div className="row m-0 text-center justify-content-center">
                        <div className={`col-12 ${styles.heading}`}>
                            Career
                        </div>
                        <div className="col-3">
                            <hr />
                        </div>
                    </div>
                </div>
                <div className={`${styles.about_body}`}>
                    <div className="row m-0 justify-content-center">
                        <div className={`${styles.content} col-9 padding-side-0`}>
                            <section className={styles.company_section}>
                                <ul className={styles.company_list}>
                                    {companyList.map((company, index) => (
                                        <li className={`${styles.company} ${index === 0 ? styles.current : ''}`} key={company.id}>
                                            <div className={`${styles.company_heading} row`}>
                                                <div className="col-12 col-md-8">
                                                    {company.companySite !== "" ? (
                                                        <a href={company.companySite} target="_blank" className={styles.company_link}>
                                                            <span className={styles.company_name_text}>{company.company}</span>
                                                        </a>
                                                    ) : (
                                                        <span className={styles.company_name_text}>{company.company}</span>
                                                    )}
                                                    <div className={styles.company_role}>{company.position}</div>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <span className={styles.location_float}>
                                                        {company.location.city} {company.location.state} {company.location.country}
                                                    </span>
                                                </div>
                                                <div className="col-12 mb-2">
                                                    <span className={styles.company_dates}>{company.joining} – {company.ending}</span>
                                                </div>
                                            </div>
                                            <ul className={styles.company_summary}>
                                                {company.summary.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
