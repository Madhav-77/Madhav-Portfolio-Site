import styles from "./career.module.scss";
import { CompanyInterface } from "../../interfaces/CompanyInterface";

const companyList: CompanyInterface[] = [
  {
    id: 1,
    company: "ThinkBridge Software",
    companySite: "https://www.thinkbridge.com/",
    companyLogo: ".\\assets\\logos\\company\\thinkbridge.jpeg",
    position: "Software Engineer",
    location: {
      city: "Pune",
      state: "MH",
      country: "India"
    },
    joining: "Nov 2020",
    ending: "Current",
    summary: [
      "Developed and managed Fintech applications, a Career Service Portal with 1M+ users, and a Product Subscription tool.",
      "Built a maintainable and scalable system with multilingual support (I18N/L10N) and optimized performance by handling data efficiently and implementing caching. Increasing client’s revenue by 2x and expanding the application’s global reach.",
      "Designed a high-performance system for handling a large dataset of 1M+ entries on Client side, and improved the page performance by around 50%.",
      "Migrated a Monolithic (MVC) Architecture to Microservices, increasing application performance by by 30-40%.",
      "Implementing CI/CD pipelines, code reviews, task delegation, and training new team members to ensure coding standards and quality."
    ]
  },
  {
    id: 2,
    company: "Ubisoft India",
    companySite: "https://www.ubisoft.com/en-us/",
    companyLogo: ".\\assets\\logos\\company\\ubisoft_india.jpeg",
    position: "Junior Web Developer",
    location: {
      city: "Pune",
      state: "MH",
      country: "India"
    },
    joining: "Jan 2020",
    ending: "Nov 2020",
    summary: [
      "Drove key initiatives at Ubisoft India, crafting responsive UI screens, developing APIs, and optimizing backend systems.", 
      "Developed an automated HR system, enhancing accuracy by up to 15% and reducing manual workload by 80%."
    ]
  },
  {
    id: 3,
    company: "iTalent Management Consultants",
    companyLogo: ".\\assets\\logos\\company\\iTalent.jpeg",
    companySite: "",
    position: "Web Developer Intern",
    location: {
      city: "Pune",
      state: "MH",
      country: "India"
    },
    joining: "May 2019",
    ending: "Jun 2019",
    summary: [
      "As a proactive intern at iTalent India, I contributed effectively in a dynamic environment, gaining hands-on experience with a range of web development technologies.", 
      "I worked on PHP, Laravel, HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX, and MySQL, where I demonstrated adaptability and a commitment to delivering high-quality solutions."
    ]
  }
]

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
                              <li className={`${styles.company} ${index == 0 ? styles.current : ``}`}>
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
                                    <span className={`${styles.location_float}`}>{carrer_obj.location.city}, {carrer_obj.location.state}, {carrer_obj.location.country}</span>
                                  </div>
                                  <div className={`${styles.company_name} col-12 mb-2`}>
                                    <span className="">{carrer_obj.joining} - {carrer_obj.ending}</span>
                                  </div>
                                </div>
                                <p className="">
                                  <ul>
                                    {carrer_obj.summary.map((obj) => (
                                      <li className="text-justify">{obj}</li>  
                                    ))}
                                  </ul>
                                </p>
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