import styles from "./portfolio.module.scss";
import React, { useState } from 'react';
import ProjectModal from "./Project-modal/ProjectModal";
import { ProjectModalProps } from "./interfaces/ProjectModalProps"; 

export default function Portfolio() {
    const [modalContent, setModalContent] = useState<ProjectModalProps>(
        { 
          title: '', 
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
          }, 
          id: ''
        }
      );

    const openModal1 = () => {
      setModalContent({ 
        title: 'Tab\'s Archive', 
        data: {
          screenshotsList: ['./src/assets/project-screenshots/Tabs-archive/Home.png', './src/assets/project-screenshots/Tabs-archive/Open.png', './src/assets/project-screenshots/Tabs-archive/Archive.png', './src/assets/project-screenshots/Tabs-archive/Window.png'],
          description: "Tab's Archive, a Chrome extension designed to close inactive windows and tabs, saving them in local storage for easy retrieval. With Tab's Archive, you can instantly boost RAM performance, enhance browsing speed, and reduce clutter. Perfect for anyone who handles multiple windows and tabs, aiming for a smoother browsing experience. Your saved archive stays intact until you decide to delete it.",
          techList: ['HTML', 'CSS', 'JavaScript', 'Chrome APIs', 'Design Patterns', 'Problem solving'],
          learnings: [
            {
              heading: 'Project Management',
              data: 'Breaking down tasks, setting timelines, and organizing tasks to achieve goals within timelines.'
            },
            {
              heading: 'Low-Level System Design',
              data: 'Breaking down tasks, setting timelines, and organizing tasks to achieve goals within timelines. Designing and optimizing system components at a detailed level to enhance performance and scalability.'
            },
            {
              heading: 'Design Patterns',
              data: 'Implemented design patterns for better scalability, performance, and maintenance.'
            },
            {
              heading: 'Chrome API',
              data: 'Utilizing Chrome\'s API for data retrieval and integration.'
            },
            {
              heading: 'JavaScript',
              data: 'Implementing logic and functionality using JavaScript, including asynchronous programming.'
            },
            {
              heading: 'Problem Solving',
              data: 'Applying analytical and creative thinking to solve challenges encountered during development.'
            }
          ],
          projectURL: 'https://chromewebstore.google.com/detail/tabs-archive/pjidfmalicjodbajneapigbaahobhgdh',
          sourceCode: 'https://github.com/Madhav-77/TabsArchive'
        }, 
        id: 'dynamicModal'
      });
    };

    const openModal2 = () => {
      setModalContent({
        title: 'Curve 19', 
        data: {
          screenshotsList: ['./src/assets/project-screenshots/Curve-19/Dashboard.jpeg', './src/assets/project-screenshots/Curve-19/Dashboard2.jpeg', './src/assets/project-screenshots/Curve-19/Dashboard3.jpeg', './src/assets/project-screenshots/Curve-19/District Details.jpeg', './src/assets/project-screenshots/Curve-19/District List Table.jpeg', './src/assets/project-screenshots/Curve-19/District List.jpeg', './src/assets/project-screenshots/Curve-19/Home.jpeg', './src/assets/project-screenshots/Curve-19/Searching.jpeg', './src/assets/project-screenshots/Curve-19/State List.jpeg', './src/assets/project-screenshots/Curve-19/Watch List.jpeg'],
          description: "Tab's Archive, a Chrome extension designed to close inactive windows and tabs, saving them in local storage for easy retrieval. With Tab's Archive, you can instantly boost RAM performance, enhance browsing speed, and reduce clutter. Perfect for anyone who handles multiple windows and tabs, aiming for a smoother browsing experience. Your saved archive stays intact until you decide to delete it.",
          techList: ['HTML', 'CSS', 'JavaScript', 'Chrome APIs', 'Design Patterns', 'Problem solving'],
          learnings: [
            {
              heading: 'Project Management',
              data: 'Breaking down tasks, setting timelines, and organizing tasks to achieve goals within timelines.'
            },
            {
              heading: 'Low-Level System Design',
              data: 'Breaking down tasks, setting timelines, and organizing tasks to achieve goals within timelines. Designing and optimizing system components at a detailed level to enhance performance and scalability.'
            },
            {
              heading: 'Design Patterns',
              data: 'Implemented design patterns for better scalability, performance, and maintenance.'
            },
            {
              heading: 'Chrome API',
              data: 'Utilizing Chrome\'s API for data retrieval and integration.'
            },
            {
              heading: 'JavaScript',
              data: 'Implementing logic and functionality using JavaScript, including asynchronous programming.'
            },
            {
              heading: 'Problem Solving',
              data: 'Applying analytical and creative thinking to solve challenges encountered during development.'
            }
          ],
          projectURL: '',
          sourceCode: 'https://github.com/Madhav-77/TabsArchive'
        }, 
        id: 'dynamicModal'
      });
    };

    const openModal3 = () => {
      setModalContent({
        title: 'Face Detection System', 
        data: {
          screenshotsList: [],
          description: "Tab's Archive, a Chrome extension designed to close inactive windows and tabs, saving them in local storage for easy retrieval. With Tab's Archive, you can instantly boost RAM performance, enhance browsing speed, and reduce clutter. Perfect for anyone who handles multiple windows and tabs, aiming for a smoother browsing experience. Your saved archive stays intact until you decide to delete it.",
          techList: ['HTML', 'CSS', 'JavaScript', 'Chrome APIs', 'Design Patterns', 'Problem solving'],
          learnings: [
            {
              heading: 'Project Management',
              data: 'Breaking down tasks, setting timelines, and organizing tasks to achieve goals within timelines.'
            },
            {
              heading: 'Low-Level System Design',
              data: 'Breaking down tasks, setting timelines, and organizing tasks to achieve goals within timelines. Designing and optimizing system components at a detailed level to enhance performance and scalability.'
            },
            {
              heading: 'Design Patterns',
              data: 'Implemented design patterns for better scalability, performance, and maintenance.'
            },
            {
              heading: 'Chrome API',
              data: 'Utilizing Chrome\'s API for data retrieval and integration.'
            },
            {
              heading: 'JavaScript',
              data: 'Implementing logic and functionality using JavaScript, including asynchronous programming.'
            },
            {
              heading: 'Problem Solving',
              data: 'Applying analytical and creative thinking to solve challenges encountered during development.'
            }
          ],
          projectURL: '',
          sourceCode: ''
        }, 
        id: 'dynamicModal'
      });
    };

    const openModal4 = () => {
      setModalContent({
        title: 'Fund GOGO', 
        data: {
          screenshotsList: [],
          description: "Tab's Archive, a Chrome extension designed to close inactive windows and tabs, saving them in local storage for easy retrieval. With Tab's Archive, you can instantly boost RAM performance, enhance browsing speed, and reduce clutter. Perfect for anyone who handles multiple windows and tabs, aiming for a smoother browsing experience. Your saved archive stays intact until you decide to delete it.",
          techList: ['HTML', 'CSS', 'JavaScript', 'Chrome APIs', 'Design Patterns', 'Problem solving'],
          learnings: [
            {
              heading: 'Project Management',
              data: 'Breaking down tasks, setting timelines, and organizing tasks to achieve goals within timelines.'
            },
            {
              heading: 'Low-Level System Design',
              data: 'Breaking down tasks, setting timelines, and organizing tasks to achieve goals within timelines. Designing and optimizing system components at a detailed level to enhance performance and scalability.'
            },
            {
              heading: 'Design Patterns',
              data: 'Implemented design patterns for better scalability, performance, and maintenance.'
            },
            {
              heading: 'Chrome API',
              data: 'Utilizing Chrome\'s API for data retrieval and integration.'
            },
            {
              heading: 'JavaScript',
              data: 'Implementing logic and functionality using JavaScript, including asynchronous programming.'
            },
            {
              heading: 'Problem Solving',
              data: 'Applying analytical and creative thinking to solve challenges encountered during development.'
            }
          ],
          projectURL: '',
          sourceCode: ''
        }, 
        id: 'dynamicModal'
      });
    };

    return (
      <>
        <div className={`${styles.portfolio}`}>
          <div className={`${styles.portfolio_header}`}>
              <div className="row m-0 pt-5 text-center justify-content-center">
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
              <div className={`${styles.content} col-9`}>
                <div className="row m-0">
                  <div className={`col-3 ${styles.project}`}>
                    <div className={`${styles.card}`}>
                      <img src=".\src\assets\logos\portfolios\tabs-archive.png" className="card-img-top" alt="..." onClick={openModal1} data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
                    </div>
                  </div>
                  <div className={`col-3 ${styles.project}`}>
                    <div className={`${styles.card}`}>
                      <img src=".\src\assets\logos\portfolios\curve19.png" className="card-img-top" alt="..." onClick={openModal2} data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
                    </div>
                  </div>
                  <div className={`col-3 ${styles.project}`}>
                    <div className={`${styles.card}`}>
                      <img src=".\src\assets\logos\portfolios\face-detection-attendance.png" className="card-img-top" alt="..." onClick={openModal3} data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
                    </div>
                  </div>
                  <div className={`col-3 ${styles.project}`}>
                    <div className={`${styles.card}`}>
                      <img src=".\src\assets\logos\portfolios\fund-gogo.png" className="card-img-top" alt="..." onClick={openModal4} data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProjectModal id={modalContent.id} title={modalContent.title} data={modalContent.data}></ProjectModal>
      </>
    )
} 