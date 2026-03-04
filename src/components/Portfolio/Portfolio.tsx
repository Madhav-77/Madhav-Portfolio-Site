import styles from "./portfolio.module.scss";
import { useState } from 'react';
import ProjectModal from "./Project-modal/ProjectModal";
import { ProjectModalProps } from "../../interfaces/ProjectModalProps";
import { projectList } from "../../constants/appData";

export default function Portfolio() {
    const [modalContent, setModalContent] = useState<ProjectModalProps>(
        { 
          id: 0,
          title: '',
          logo: '',
          data: {
            screenshotsList: [''],
            description: '',
            techList: [''],
            learnings: [{
              heading: '',
              data: ''
            }],
            projectURL: '',
            sourceCode: ''
          }
        }
    );

    function setModalContentFunc(id: number) {
      const projectContent = projectList.find(obj => obj.id == id);
      setModalContent(projectContent!)
    }

    return (
      <>
        <div className={`${styles.portfolio} pt-5 pb-5`} id="portfolio">
          <div className={`${styles.portfolio_header}`}>
              <div className="row m-0 text-center justify-content-center">
                  <div className={`col-12 ${styles.heading}`}>
                      Portfolio
                  </div>
                  <div className={`col-3`}>
                      <hr />
                  </div>
              </div>
          </div>
          <div className={`${styles.portfolio_body}`}>
            <div className="row m-0 justify-content-center">
              <div className={`${styles.content} col-9 padding-side-0`}>
                <div className="row m-0">
                  {projectList.map((obj, index) => (
                    <div className={`col-12 col-sm-6 col-md-4 col-lg-3 ${styles.project}`} key={obj.id}>
                      <div className={`card w-auto custom-card-style ${styles.card_margin}`}>
                        <img src={obj.logo} className="custom-card-style" alt={obj.title} onClick={() => setModalContentFunc(index + 1)} data-bs-toggle="modal" data-bs-target="#projectModal"/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProjectModal id={modalContent.id} title={modalContent.title} data={modalContent.data} logo={modalContent.logo}></ProjectModal>
      </>
    )
} 