import CertificateModal from "./Certificate-modal/CertificateModal";
import styles from "./certifications.module.scss";
import { CertificateInterface } from "../../interfaces/CertificateInterface";
import { useState } from 'react';
import { certificateList } from "../../constants/appData";

export default function Certifications() {

    const [modalContent, setModalContent] = useState<CertificateInterface>(
        { 
            id: 0, 
            certificateImg: "", 
            link: "", 
            name: "", 
            organization: "", 
            skills: []
        }
    );

    function setModalContentFunc(id: number) {
        const certificateContent = certificateList.find(obj => obj.id == id);
        setModalContent(certificateContent!)
    }

    return (
        <>
            <div className={`${styles.certification} pt-5 pb-5`} id="certifications">
                <div className={`${styles.certification_header}`}>
                    <div className="row m-0 text-center justify-content-center">
                        <div className={`col-12 ${styles.heading}`}>
                            Certifications
                        </div>
                        <div className={`col-3`}>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className={`${styles.certification_body}`}>
                    <div className="row m-0 justify-content-center">
                        <div className={`${styles.content} col-9 padding-side-0`}>
                            <div className="row m-0">
                                {certificateList.map((obj, index) => (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={obj.id}>
                                    <div className={`card w-auto custom-card-style ${styles.card_margin}`} onClick={() => setModalContentFunc(index + 1)} data-bs-toggle="modal" data-bs-target="#certificateModal">
                                        <img src={obj.certificateImg} className={`card-img-top ${styles.custom_image_style}`} alt={obj.name} />
                                        <div className={`card-body ${styles.custom_card_body_style}`}>
                                            <div className={`card-title ${styles.custom_card_title_style}`}>{obj.name}</div>
                                            <div className={`${styles.custom_card_sub_title_style}`}>{obj.organization}</div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CertificateModal id={modalContent.id} certificateImg={modalContent.certificateImg} link={modalContent.link} name={modalContent.name} organization={modalContent.organization} skills={modalContent.skills}></CertificateModal>
        </>
    )
} 