/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./certificateModal.module.scss";
import { CertificateInterface } from "../../../interfaces/CertificateInterface";

export default function CertificateModal({id, certificateImg, link, name, skills}: CertificateInterface) {
    const redirectTo = (link:string) => {
      window.open(link, '_blank');  // Replace with your target URL
    };

    return (
        <>          
          <div className="modal fade" id="certificateModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="certificateModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <div className={`${styles.modal_title}`} id={`${id}Label`}>{name}</div>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className={`mb-30px ${styles.certificate_container}`}>
                    <img src={certificateImg} className={`d-block modal-image`} alt={name} />
                  </div>
                  <div className={`row`}>
                    <div className={`${styles.project_modal_heading}`}>Key Learnings</div>
                    <div>
                      {skills.map((skill, index) => (
                        <span key={index}>
                          {skill}{index < skills.length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {(link) &&
                  <div className="modal-footer">
                      <button type="button" className={`btn btn-primary modal-button`} title="View certificate" onClick={() => redirectTo(link)}>
                        <img className={`modal-button-icon`} src="./assets/svg/redirect.svg" alt="icon" width="24" height="24" />
                        View certificate
                      </button>
                  </div>
                }
              </div>
            </div>
          </div>
        </>
    )
} 