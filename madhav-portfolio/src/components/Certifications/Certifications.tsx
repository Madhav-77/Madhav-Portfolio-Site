import CertificateModal from "./Certificate-modal/CertificateModal";
import styles from "./certifications.module.scss";
import { CertificateInterface } from "../../interfaces/CertificateInterface";
import { useState } from 'react';

const certificateList:CertificateInterface[] = [
    {
        id: 1,
        certificateImg: ".\\src\\assets\\certificates\\workInProgress.png",
        name: "Data Structures and Algorithms",
        organization: "GeeksForGeeks",
        skills: ["Python", "Data Structures", "Algorithms", "Problem Solving"],
        link: ""
    },
    {
        id: 2,
        certificateImg: ".\\src\\assets\\certificates\\systemDesignGFG.png",
        name: "System Design from Low Level to High Level",
        organization: "GeeksForGeeks",
        skills: ["System Architecture", "High Level System Design", "Low Level System Design", "Design Patterns"],
        link: ""
    },
    {
        id: 3,
        certificateImg: ".\\src\\assets\\certificates\\virtualInternshipFORAGE.png",
        name: "J.P. Morgan's Software Engineering Virtual Experience ",
        organization: "Forage",
        skills: ["Python", "Data Analysis", "Data Processing"],
        link: ""
    },
    {
        id: 4,
        certificateImg: ".\\src\\assets\\certificates\\dataAnalysisFCC.png",
        name: "Data Analytics with Python",
        organization: "FreeCodeCamp",
        skills: ["Python", "NumPy", "Pandas", "MatplotLib", "Data Analysis", "Data Visualization"],
        link: "https://www.freecodecamp.org/certification/madhavtrivedi77/data-analysis-with-python-v7"
    },
    {
        id: 5,
        certificateImg: ".\\src\\assets\\certificates\\pythonFCC.png",
        name: "Scientific Computing with Python",
        organization: "FreeCodeCamp",
        skills: ["Python", "Problem Solving"],
        link: "https://www.freecodecamp.org/certification/madhavtrivedi77/scientific-computing-with-python-v7"
    },
    {
        id: 6,
        certificateImg: ".\\src\\assets\\certificates\\dataStructureJavaScriptFCC.png",
        name: "JavaScript Algorithms and Data Structures",
        organization: "FreeCodeCamp",
        skills: ["JavaScript", "ES6", "Data Structures", "Problem Solving"],
        link: "https://www.freecodecamp.org/certification/madhavtrivedi77/javascript-algorithms-and-data-structures"
    },
    {
        id: 7,
        certificateImg: ".\\src\\assets\\certificates\\nodejsFCC.png",
        name: "Back End Development and APIs",
        organization: "FreeCodeCamp",
        skills: ["NodeJS"],
        link: "https://www.freecodecamp.org/certification/madhavtrivedi77/back-end-development-and-apis"
    },
]

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
            <div className={`${styles.certification}`} id="certifications">
                <div className={`${styles.certification_header}`}>
                    <div className="row m-0 pt-5 text-center justify-content-center">
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
                        <div className={`${styles.content} col-9`}>
                            <div className="row m-0">
                                {certificateList.map((obj, index) => (
                                <div className="col-3">
                                    <div className={`card w-auto ${styles.custom_card_style}`} onClick={() => setModalContentFunc(index + 1)} data-bs-toggle="modal" data-bs-target="#certificateModal">
                                        <img src={obj.certificateImg} className={`card-img-top ${styles.custom_image_style}`} alt="..." />
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