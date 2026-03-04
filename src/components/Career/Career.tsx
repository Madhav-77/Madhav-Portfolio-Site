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
                        <div className={`col-3`}>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className={`${styles.about_body}`}>
                    <div className="row m-0 justify-content-center">
                        <div className={`${styles.content} col-9 padding-side-0`}>
                        <section className={styles.company_section}>
                          <ul className={styles.company_list}>

                            {companyList.map((carrer_obj, index) => (
                              <li className={`${styles.company} ${index == 0 ? styles.current : ``}`} key={carrer_obj.id}>
                                <div className={`${styles.company_heading} row`}>
                                  <div className={`${styles.company_name} col-12 col-md-8`}>
                                    {carrer_obj.companySite != "" &&
                                      <a href={carrer_obj.companySite} target="_blank">
                                        <span className={styles.company_name}>{carrer_obj.company} ({carrer_obj.position})</span>
                                      </a>
                                    }
                                    {carrer_obj.companySite == "" &&
                                      <span>
                                        <span className={styles.company_name}>{carrer_obj.company} ({carrer_obj.position})</span>
                                      </span>
                                    }
                                  </div>
                                  <div className={`${styles.company_name} col-12 col-md-4`}>
                                    <span className={`${styles.location_float}`}>{carrer_obj.location.city} {carrer_obj.location.state} {carrer_obj.location.country}</span>
                                  </div>
                                  <div className={`${styles.company_name} col-12 mb-2`}>
                                    <span className="">{carrer_obj.joining} - {carrer_obj.ending}</span>
                                  </div>
                                </div>
                                <div className="">
                                  <ul>
                                    {carrer_obj.summary.map((obj, index) => (
                                      <li className="text-justify" key={index}>{obj}</li>  
                                    ))}
                                  </ul>
                                </div>
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
