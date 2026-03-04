import styles from "./testimonials.module.scss";
import { useEffect, useRef, useState } from "react";
import { testimonialList } from "../../constants/appData";

export default function Testimonials() {
    const elementRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [elementHeight, setElementHeight] = useState(0);
  
    const updateHeight = () => {
      if (elementRefs.current[0]) {
        const height = elementRefs.current[0].offsetHeight;
        setElementHeight(height);
      }
    };
  
    useEffect(() => {
        updateHeight();
        const handleResize = () => {
            const carouselList = document.querySelectorAll<HTMLDivElement>(`#testimonials .carousel-item`);
            const carouselButtonList = document.querySelectorAll<HTMLDivElement>(`#testimonials .carousel-item-button`);
            carouselList.forEach((div, index) => {
                if(index > 0) {
                    if (div.classList.contains('active') && index > 0) {
                        div.classList.remove('active');
                        carouselButtonList[index].classList.remove('active');
                    }
                } else {
                    div.classList.add('active');
                    carouselButtonList[index].classList.add('active');
                }
            });
            updateHeight();
        };
        window.addEventListener('resize', handleResize);
        return () => {
            // window.removeEventListener('resize', handleResize);
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
                        <div className={`${styles.content} col-9 padding-side-0`}>
                            <div className="row m-0 justify-content-center">
                                <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                                    <div className={`carousel-indicators ${styles.custom_position}`}>
                                    {testimonialList.map((obj, index) => (
                                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to={index} className={`carousel-item-button ${index === 0 ? "active" : ""} ${styles.carousel_custom_style}`} aria-current="true" aria-label={`Slide ${index + 1}`} key={obj.id}></button>
                                    ))}
                                    </div>
                                    <div className="carousel-inner">
                                        {testimonialList.map((obj, index) => (
                                        <div 
                                        ref={(el) => (elementRefs.current[index] = el)}
                                        style={elementHeight > 0 ? { minHeight: elementHeight } : {}}
                                        className={`carousel-item ${styles.custom_carousel_item} ${index === 0 ? "active" : ""}`} key={obj.id}>
                                            <div className={`${styles.profile_picture_container} w-auto text-center`}>
                                                <a href={obj.linkedIn} target="_blank">
                                                    <img className={`${styles.profile_picture}`} src={obj.profilePicture} alt="" />
                                                </a>
                                                <div className={`${styles.name}`}>{obj.name}</div>
                                                <div className={`${styles.designation}`}>{obj.designation}, {obj.company}</div>
                                                <div className={`${styles.testimony}`}>
                                                    <img src=".\assets\svg\quote-open.svg" alt="quote open" />{obj.testimony}<img src=".\assets\svg\quote-close.svg" alt="quote close" />
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