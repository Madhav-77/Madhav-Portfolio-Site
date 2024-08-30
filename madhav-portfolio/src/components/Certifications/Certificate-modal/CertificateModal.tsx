/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./certificateModal.module.scss";
import { CertificateInterface } from "../interfaces/CertificateInterface";

export default function CertificateModal({id, certificateImg, link, name, organization, skills}: CertificateInterface) {
    return (
        <>          
          <div className="modal fade" id="certificateModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <div className={`${styles.modal_title}`} id={`${id}Label`}>{name}</div>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className={`${styles.certificate_container}`}>
                    <img src={certificateImg} className={`d-block ${id == 1 ? `w-auto` : `w-100`} ${styles.certificate_img}`} alt="..." />
                  </div>
                  <div className={`row`}>
                    <div className={`${styles.project_modal_heading}`}>Key Learnings</div>
                    <div>
                      {skills.map((skill) => (
                        skill + ", "
                      ))}
                    </div>
                  </div>
                </div>
                {(link) &&
                  <div className="modal-footer">
                      <button type="button" className="btn btn-primary" title="View certificate">
                        <div className={`${styles.redirect_icon}`}></div>
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