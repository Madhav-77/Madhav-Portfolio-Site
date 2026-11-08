import styles from "./blogs.module.scss";
import { blogList } from "../../constants/appData";

export default function Blogs() {
    const redirectTo = (link: string) => {
        window.open(link, '_blank');
    };

    return (
        <div className={`${styles.blogs} pt-5 pb-5`} id="blogs">
            <div className={`${styles.blogs_header}`}>
                <div className="row m-0 text-center justify-content-center">
                    <div className={`col-12 ${styles.heading}`}>
                        Blogs
                    </div>
                    <div className="col-3">
                        <hr />
                    </div>
                </div>
            </div>
            <div className={`${styles.blogs_body}`}>
                <div className="row m-0 justify-content-center">
                    <div className={`col-9 padding-side-0`}>
                        <div className="row m-0">
                            {blogList.map((blog) => (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={blog.id}>
                                    <div className={`card w-auto custom-card-style ${styles.card_margin}`} onClick={() => redirectTo(blog.link)}>
                                        <div className={styles.card_header_area}>
                                            {blog.tags.map((tag, i) => (
                                                <span key={i} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>
                                        <div className={`card-body ${styles.card_body_style}`}>
                                            <div className={styles.card_title_style}>{blog.title}</div>
                                            <div className={styles.card_description_style}>{blog.description}</div>
                                            <div className={styles.card_footer_style}>
                                                <span className={styles.date}>{blog.date}</span>
                                                <img src="./assets/svg/redirect.svg" alt="" width="14" height="14" className={styles.redirect_icon} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
