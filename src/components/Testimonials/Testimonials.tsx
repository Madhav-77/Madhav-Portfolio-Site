import styles from "./testimonials.module.scss";
import { TestimonialModel } from "../../interfaces/TestimonialModel";
import React, { useEffect, useRef, useState } from "react";

const testimonialList:TestimonialModel[] = [
    {
        id: 1,
        profilePicture: ".\\assets\\profile-pictures\\salaad-nur.jpeg",
        name: "Salaad Nur",
        designation: "Principal & Solution Architect",
        company: "Samla Technology, Inc.",
        testimony: "I have worked with Madhav on a complex Cash Management solution for Consero Global. He is a consummate professional who understands complex projects. He was a key resource for deliverables. The business need was to manage cash processes for 200+ clients, with combined volumes of tens of thousands of transactions daily, within a 4 hour window. With his support, we delivered a solution that allowed clients to get their updated cash positions by the start of their business day. I would recommend Madhav to anyone looking for a highly skilled developer.",
        linkedIn: "https://www.linkedin.com/in/sanur/"
    },
    {
        id: 2,
        profilePicture: ".\\assets\\profile-pictures\\thomas-hessler.jpeg",
        name: "Thomas Hessler",
        designation: "Co-Founder & Managing Director",
        company: "One Stop German Shop Inc.",
        testimony: "I had the pleasure of working with Madhav during his time at Thinkbridge and I got to know him as a dedicated and extremely knowledge full stack developer that is very easy to work with. Not having a developer background myself, Madhav was always able to break down complex problems in an easily understandable manner to enable everyone to find the best solution moving forward.",
        linkedIn: "https://www.linkedin.com/in/thomas-hessler/"
    },
    {
        id: 3,
        profilePicture: ".\\assets\\profile-pictures\\abhinav-das.jpeg",
        name: "Abhinav Das",
        designation: "Head of Engineering",
        company: "Stealth",
        testimony: "Madhav brings strong engineering craft and utmost reliability to his team. At Talent, Inc., he was involved with the successful operation of our core revenue generating products. Madhav has also shown that he's able to pick up new technologies with ease.",
        linkedIn: "https://www.linkedin.com/in/theabhinavdas/"
    },
    {
        id: 4,
        profilePicture: ".\\assets\\profile-pictures\\cedric-richardeau.jpeg",
        name: "Cedric Richardeau",
        designation: "Studio Operations Director",
        company: "Ubisoft",
        testimony: "As Madhav's senior manager at Ubisoft India, I was consistently impressed by his performance as a Junior Web Developer. His work on automating routine emails for our HR Portal reduced manual workload by 40%. Madhav's quick learning, strong coding practices, and collaborative approach made him a valuable asset to our team. I'm confident Madhav would be an excellent addition to any organization.",
        linkedIn: "https://www.linkedin.com/in/cedric-richardeau/"
    },
    {
        id: 5,
        profilePicture: ".\\assets\\profile-pictures\\rishi-nanda.jpeg",
        name: "Rishi Nanda",
        designation: "IT Manager Enterprise",
        company: "Ubisoft",
        testimony: "I had the pleasure of managing Madhav, who played a crucial role in developing our HR portal and Workday integrations. His expertise in PHP, SharePoint, and SQL resulted in high-quality solutions with minimal bugs. Madhav’s ability to translate complex requirements into reliable code, along with his collaborative and positive attitude, made him a valuable asset. I highly recommend him for any development role.",
        linkedIn: "https://www.linkedin.com/in/rishi-nanda/"
    },
    {
        id: 6,
        profilePicture: ".\\assets\\profile-pictures\\rajneesh-bali.jpeg",
        name: "Rajneesh Bali",
        designation: "Associate Director Corporate Relations",
        company: "Indira Group of Institutes, Pune",
        testimony: "I am delighted to recommend Madhav Trivedi for his outstanding contributions to the Training and Placement Cell at MIT WPU, Pune. He built a strong company relationships, enhancing our campus recruitment efforts. His organizational skills, proactive approach, and professionalism were commendable. Madhav’s skills and positive attitude will be a great asset to any organization.",
        linkedIn: "https://www.linkedin.com/in/rajneesh-bali-052968b/"
    },
    {
        id: 7,
        profilePicture: ".\\assets\\profile-pictures\\hasmukh-tank.jpeg",
        name: "Hasmukh Tank",
        designation: "Senior Technical Project Manager",
        company: "career.io",
        testimony: "Madhav is an exceptionally dedicated professional who consistently goes above and beyond. His problem-solving skills and commitment greatly contributed to our team's success and helped meet critical deadlines. His ability to create efficient solutions and his collaborative spirit made him an invaluable team member. I highly recommend Madhav and would be thrilled to work with him again.",
        linkedIn: "https://www.linkedin.com/in/hasmukh-tank-5/"
    },
    {
        id: 8,
        profilePicture: ".\\assets\\profile-pictures\\priyanka-raikar.jpeg",
        name: "Priyanka Raikar",
        designation: "Senior Test Engineer",
        company: "Visa",
        testimony: "As a Full-Stack developer, Madhav showed exceptional design and usability skills. His expertise in front-end and back end technologies was evident seamlessly. Beyond his technical acumen, Madhav’s collaborative nature and innovative insights greatly benefited team discussions. His analytical and creative problem-solving approach led to effective solutions for our key challenges.",
        linkedIn: "https://www.linkedin.com/in/priyanka-raikar-64274119b/"
    },
    {
        id: 9,
        profilePicture: ".\\assets\\profile-pictures\\rakesh-kodagali.jpeg",
        name: "Rakesh Kodagali",
        designation: "Senior Engineer - Product Development",
        company: "Harman Connected Services",
        testimony: "Madhav is an exceptional web app developer with outstanding JavaScript skills. At Thinkbridge, despite his primary expertise in Angular, he contributed significantly to a React project. As the team’s go-to person for TypeScript, he provided invaluable support. His deep knowledge of the JS ecosystem is impressive. I wish him all the best!",
        linkedIn: "https://www.linkedin.com/in/rakesh-kodagali/"
    }
]

export default function Testimonials() {
    const divRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [maxHeight, setMaxHeight] = useState(0);

    const updateMaxHeight = () => {
        const heights = divRefs.current.map(div => div ? div.offsetHeight : 0);
        const largestHeight = Math.max(...heights);
        setMaxHeight(largestHeight);
    };

    useEffect(() => {
        // Calculate the initial height
        updateMaxHeight();
    
        // Listen to the resize event and update height
        const handleResize = () => {
          updateMaxHeight();
        };
        
        window.addEventListener("resize", handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <div className={`${styles.testimonials} pt-5 pb-5`} id="testimonials">
                <div className={`${styles.testimonial_header}`}>
                    <div className="row m-0 text-center justify-content-center">
                        <div className={`col-12 ${styles.heading}`}>
                            Testimonials
                        </div>
                        <div className={`col-3`}>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className={`${styles.testimonial_body}`}>
                    <div className="row m-0 justify-content-center">
                        <div className={`${styles.content} col-9`}>
                            <div className="row m-0 justify-content-center">
                                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                                    <div className={`carousel-indicators ${styles.custom_position}`}>
                                    {testimonialList.map((_, index) => (
                                        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to={index} className={`${index === 0 ? "active" : ""} ${styles.carousel_custom_style}`} aria-current="true" aria-label={`Slide ${index + 1}`}></button>
                                    ))}
                                    </div>
                                    <div className="carousel-inner">
                                        {testimonialList.map((obj, index) => (
                                        <div 
                                        key={index}
                                        ref={el => (divRefs.current[index] = el)}
                                        style={{
                                            height: maxHeight ? `${maxHeight}px` : "auto"
                                        }}
                                        className={`carousel-item ${styles.custom_carousel_item} ${index === 0 ? "active" : ""}`}>
                                            <div className={`${styles.profile_picture_container} w-auto text-center`}>
                                                <a href={obj.linkedIn} target="_blank">
                                                    <img className={`${styles.profile_picture}`} src={obj.profilePicture} alt="" />
                                                </a>
                                                <div className={`${styles.name}`}>{obj.name}</div>
                                                <div className={`${styles.designation}`}>{obj.designation}, {obj.company}</div>
                                                <div className={`${styles.testimony}`}>
                                                    <img src=".\assets\svg\quote-open.svg" alt="" />{obj.testimony}<img src=".\assets\svg\quote-close.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 