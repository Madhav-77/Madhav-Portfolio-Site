import styles from "./testimonials.module.scss";
import { TestimonialModel } from "./interfaces/TestimonialModel";

const testimonialList:TestimonialModel[] = [
    {
        id: 1,
        profilePicture: ".\\src\\assets\\profile-pictures\\abhinav-das.jpeg",
        name: "Abhinav Das",
        designation: "Head of Engineering",
        company: "Stealth",
        testimony: "Madhav brings strong engineering craft and utmost reliability to his team. At Talent, Inc., he was involved with the successful operation of our core revenue generating products. Madhav has also shown that he's able to pick up new technologies with ease.",
        linkedIn: "https://www.linkedin.com/in/theabhinavdas/"
    },
    {
        id: 2,
        profilePicture: ".\\src\\assets\\profile-pictures\\cedric-richardeau.jpeg",
        name: "Cedric Richardeau",
        designation: "Studio Operations Director",
        company: "Ubisoft",
        testimony: "As Madhav's senior manager at Ubisoft India, I was consistently impressed by his performance as a Junior Web Developer. His ability to tackle complex requirements and deliver effective solutions stood out. Madhav's majorly worked on our HR Portal and helped automating routine emails which reduced manual workload of users on this process by 40%. Throughout his tenure, Madhav demonstrated a strong grasp of best coding practices, efficient troubleshooting, and a collaborative approach. His quick learning and dedication made him a valuable asset to our development team. Based on his performance at Ubisoft India, I'm confident Madhav would be an excellent addition to any organization seeking a skilled and motivated developer. All the best Madhav!",
        linkedIn: "https://www.linkedin.com/in/cedric-richardeau/"
    },
    {
        id: 3,
        profilePicture: ".\\src\\assets\\profile-pictures\\hasmukh-tank.jpeg",
        name: "Hasmukh Tank",
        designation: "Senior Technical Project Manager",
        company: "career.io",
        testimony: "Madhav is one of the most dedicated professionals I’ve had the pleasure of working with. He consistently goes above and beyond to solve problems and provide support whenever needed. His commitment to delivering 100% effort significantly contributed to our team’s success and was crucial in meeting deadlines. His skills allowed us to create more efficient solutions for various projects. His contributions were invaluable, and his collaborative spirit made him an essential part of our team. I highly recommend Madhav and would be delighted to work with him again.",
        linkedIn: "https://www.linkedin.com/in/hasmukh-tank-5/"
    },
    {
        id: 4,
        profilePicture: ".\\src\\assets\\profile-pictures\\rajneesh-bali.jpeg",
        name: "Rajneesh Bali",
        designation: "Associate Director Corporate Relations",
        company: "Indira Group of Institutes, Pune",
        testimony: "I am delighted to recommend Madhav Trivedi for his exceptional contributions to the Training and Placement Cell at MIT WPU, Pune. He has built strong relationships with companies, significantly improving our campus recruitment efforts. His organizational skills, proactive approach, and ability to manage multiple tasks while maintaining professionalism have been truly commendable. I highly recommend Madhav for any future endeavors he chooses to pursue. His skills, commitment, and positive attitude will undoubtedly be an asset to any organization.",
        linkedIn: "https://www.linkedin.com/in/rajneesh-bali-052968b/"
    },
    {
        id: 5,
        profilePicture: ".\\src\\assets\\profile-pictures\\salaad-nur.jpeg",
        name: "Salaad Nur",
        designation: "Principal & Solution Architect",
        company: "Samla Technology, Inc.",
        testimony: "I have worked with Madhav in the design and the deployment of a complex Cash Management solution for Consero Global. He is a consummate professional that is able to understand complex projects. He was a key resource both in documenting the requirements and deliverables, and executing the development tasks. The business need that we needed to tackle was how to manage cash processes for 200+ clients with combined daily volumes of tens of thousands of transactions in a 4 hour window. With his support, my team was able to deliver a custom solution that ensured clients were able to get their updated cash positions by the start of their business day. I would recommend Madhav for anyone that is looking for a highly skilled developer.",
        linkedIn: "https://www.linkedin.com/in/sanur/"
    },
    {
        id: 6,
        profilePicture: ".\\src\\assets\\profile-pictures\\rakesh-kodagali.jpeg",
        name: "Rakesh Kodagali",
        designation: "Senior Engineer - Product Development",
        company: "Harman Connected Services",
        testimony: "Madhav is an excellent resource for building web apps, his skills in Javascript is exceptional. I remember working with him at Thinkbridge, even though his primary skill was Angular he didn't hesitate in helping us with building a React project. Since most of the team members were new to Typescript, Madhav was a go to person for anything related to TS. Thanks Madhav for being there! I am sure he has built a lot of knowledge around JS ecosystems. I wish him all the very best.",
        linkedIn: "https://www.linkedin.com/in/rakesh-kodagali/"
    },
    {
        id: 7,
        profilePicture: ".\\src\\assets\\profile-pictures\\rishi-nanda.jpeg",
        name: "Rishi Nanda",
        designation: "IT Manager Enterprise",
        company: "Ubisoft",
        testimony: "I had the pleasure of managing the team Madhav was on. He worked on several projects within our team, where he played a pivotal role in the development of our HR portal and Workday integrations. Madhav consistently demonstrated his technical expertise in PHP, SharePoint, and SQL, delivering high-quality solutions with minimal bugs. His ability to understand complex requirements and translate them into efficient, reliable code was impressive. Madhav’s work ethic and attention to detail were evident in every task he undertook. He not only met project deadlines but also ensured that the end products were robust and easy to maintain. His contributions significantly improved the functionality and user experience of our HR systems. Moreover, Madhav was a collaborative team member who communicated effectively and was always willing to lend a hand or share his knowledge with others. His positive attitude and problem-solving skills made him a valuable asset to our team. I highly recommend Madhav for any development role. His technical skills, combined with his dedication and team-oriented approach, make him a standout professional in his field.",
        linkedIn: "https://www.linkedin.com/in/rishi-nanda/"
    },
    {
        id: 8,
        profilePicture: ".\\src\\assets\\profile-pictures\\thomas-hessler.jpeg",
        name: "Thomas Hessler",
        designation: "Co-Founder & Managing Director",
        company: "One Stop German Shop Inc.",
        testimony: "I had the pleasure of working with Madhav during his time at Thinkbridge and I got to know him as a dedicated and extremely knowledge full stack developer that is very easy to work with. Not having a developer background myself, Madhav was always able to break down complex problems in an easily understandable manner to enable everyone to find the best solution moving forward.",
        linkedIn: "https://www.linkedin.com/in/thomas-hessler/"
    },
    {
        id: 9,
        profilePicture: ".\\src\\assets\\profile-pictures\\priyanka-raikar.jpeg",
        name: "Priyanka Raikar",
        designation: "Senior Test Engineer",
        company: "Visa",
        testimony: "As a Full-Stack developer, Madhav has always demonstrated a keen eye for design and usability. His expertise in front-end and back end technologies was evident seamlessly. Beyond his technical skills, Madhav is an excellent collaborator. He consistently contributed to team discussions with valuable insights and innovative ideas. His approach to problem-solving was both analytical and creative, often leading to the development of effective solutions that addressed our most pressing challenges.",
        linkedIn: "https://www.linkedin.com/in/priyanka-raikar-64274119b/"
    },
]

export default function Testimonials() {
    return (
        <>
            <div className={`${styles.testimonials}`}>
                <div className={`${styles.testimonial_header}`}>
                    <div className="row m-0 pt-5 text-center justify-content-center">
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
                                        <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                            <div className={`${styles.profile_picture_container} w-auto text-center`}>
                                                <a href={obj.linkedIn}>
                                                    <img className={`${styles.profile_picture}`} src={obj.profilePicture} alt="" />
                                                </a>
                                                <div className={`${styles.name}`}>{obj.name}</div>
                                                <div className={`${styles.designation}`}>{obj.designation}, {obj.company}</div>
                                                <div className={`${styles.testimony}`}>
                                                    <img src=".\src\assets\svg\quote-open.svg" alt="" />{obj.testimony}<img src=".\src\assets\svg\quote-close.svg" alt="" />
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