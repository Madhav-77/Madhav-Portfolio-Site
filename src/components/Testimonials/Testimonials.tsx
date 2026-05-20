import styles from "./testimonials.module.scss";
import { testimonialList } from "../../constants/appData";

export default function Testimonials() {

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
                        <div className={`${styles.content} col-9 padding-side-0`}>
                            <div className="row m-0 justify-content-center">
                                <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                                    <div className={`carousel-indicators ${styles.custom_position}`}>
                                    {testimonialList.map((obj, index) => (
                                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to={index} className={`carousel-item-button ${index === 0 ? "active" : ""} ${styles.carousel_custom_style}`} aria-current="true" aria-label={`Slide ${index + 1}`} key={obj.id}></button>
                                    ))}
                                    </div>
                                    <div className={`carousel-inner ${styles.carousel_inner_grid}`}>
                                        {testimonialList.map((obj, index) => (
                                        <div
                                        className={`carousel-item ${index === 0 ? "active" : ""}`} key={obj.id}>
                                            <div className={`${styles.profile_picture_container} w-auto text-center`}>
                                                <a href={obj.linkedIn} target="_blank">
                                                    <img className={`${styles.profile_picture}`} src={obj.profilePicture} alt="" />
                                                </a>
                                                <div className={`${styles.name}`}>{obj.name}</div>
                                                <div className={`${styles.designation}`}>{obj.designation}, {obj.company}</div>
                                                <div className={`${styles.testimony}`}>
                                                    <img src="./assets/svg/quote-open.svg" alt="quote open" />{obj.testimony}<img src="./assets/svg/quote-close.svg" alt="quote close" />
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