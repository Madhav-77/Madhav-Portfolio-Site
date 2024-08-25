/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./projectModal.module.scss";
import { ProjectModalProps } from "../interfaces/ProjectModalProps";

export default function ProjectModal({ title, data, id }: ProjectModalProps) {
    return (
        <>          
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <div className={`${styles.modal_title}`} id={`${id}Label`}>{title}</div>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                    {data.screenshotsList.map((_, index) => ( 
                      index === 0 ? 
                      (
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className="active" aria-current="true" aria-label={`Slide ${index+1}`}></button>
                      ) :
                      (
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={`Slide ${index+1}`}></button>
                      )
                    ))}
                    </div>
                    <div className="carousel-inner">
                      {data.screenshotsList.map((screenshot) => (
                        <div className="carousel-item active">
                          <img src={screenshot} className="d-block w-100" alt="..." />
                        </div>
                      ))}
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button> */}
                  </div>
                  <div className="row">
                    <div className={`${styles.project_modal_heading}`}>Description</div>
                    <div className={`${styles.project_description_body}`}>
                      {data.description}
                    </div>
                    {/* <div><a href="https://chromewebstore.google.com/detail/tabs-archive/pjidfmalicjodbajneapigbaahobhgdh" target="_blank">Link to Project</a> | <a href="https://github.com/Madhav-77/TabsArchive" target="_blank">Source code</a></div> */}
                    <div className={`${styles.project_modal_heading}`}>Technologies and Skills</div>
                    <div>
                      {data.techList.map((tech) => (
                        tech
                      ))}
                    </div>
                    <div className={`${styles.project_modal_heading}`}>Key Learnings</div>
                    <div>
                      <ul>
                        {data.learnings.map((learning) => (
                          <li><b>{learning.heading}: </b>{learning.data}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Project URL</button>
                  <button type="button" className="btn btn-primary">
                  <span title="GitHub">
                    <a href={data.sourceCode}>
                        <img src="../src/assets/svg/github.svg" alt="Github" width="30" height="30" />
                    </a>
                </span>Source code</button>
                </div>
              </div>
            </div>
          </div>
        </>
    )
} 