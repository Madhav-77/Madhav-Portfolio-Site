/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./projectModal.module.scss";
import { ProjectModalProps } from "../../../interfaces/ProjectModalProps";

export default function ProjectModal({ title, data, id }: ProjectModalProps) {
    const redirectTo = (link:string) => {
      window.open(link, '_blank');  // Replace with your target URL
    };
    return (
        <>          
          <div className="modal fade" id="projectModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="projectModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <div className={`${styles.modal_title}`} id={`${id}Label`}>{title}</div>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {data.screenshotsList.length > 0 &&  
                    <div id="projectCarousel" className={`carousel slide mb-30px`} data-bs-ride="carousel">
                      <div className={`carousel-indicators ${styles.custom_position}`}>
                      {data.screenshotsList.map((_, index) => ( 
                        <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to={index} className={`${styles.carousel_custom_style} ${index === 0 ? "active" : ""}`} aria-current={index === 0 ? "true" : undefined} aria-label={`Slide ${index+1}`} key={index}></button>
                      ))}
                      </div>
                      <div className="carousel-inner">
                        {data.screenshotsList.map((screenshot, index) => (
                          <div className={`carousel-item ${styles.carousel_container} ${index === 0 ? "active" : ""}`} key={index}>
                            <img src={screenshot} className={`d-block modal-image`} alt={`screenshot ${index}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                  <div className={`row`}>
                    <div className={`${styles.project_modal_heading}`}>Description</div>
                    <div className={`${styles.project_description_body}`} dangerouslySetInnerHTML={{ __html: data.description }}>
                    </div>
                    <div className={`${styles.project_modal_heading} mt-2`}>Technologies and Skills</div>
                    <div>
                      {data.techList.map((tech, index) => (
                        <span key={index}>
                          {tech}{index < data.techList.length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                    <div className={`${styles.project_modal_heading} mt-2`}>Key Learnings</div>
                    <div>
                      <ul className="text-justify">
                        {data.learnings.map((learning, index) => (
                          <li key={index}><b>{learning.heading}: </b>{learning.data}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {
                (data.projectURL || data.sourceCode) &&
                  <div className="modal-footer">
                    {data.projectURL && 
                      <button type="button" className={`btn btn-primary modal-button`} title="Open project" onClick={() => redirectTo(data.projectURL)}>
                        <img className={`modal-button-icon`} src="./assets/svg/redirect.svg" alt="icon" width="24" height="24" />
                        Project URL
                      </button>
                    }
                    {data.sourceCode && 
                      <button type="button" className={`btn btn-primary modal-button`} title="GitHub" onClick={() => redirectTo(data.sourceCode)}>
                        <img className={`modal-button-icon`} src="./assets/svg/github.svg" alt="icon" width="24" height="24" />
                        Source code
                      </button>
                    }
                  </div>
                }
              </div>
            </div>
          </div>
        </>
    )
} 