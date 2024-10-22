import styles from "./header.module.scss";
// import 'bootstrap/dist/css/bootstrap.css';

export default function Header() {
    return <nav className={`navbar sticky-top navbar-expand-lg navbar-light position-absolute w-100 ${styles.custom_nav_justify}`}>
    <div className={`container-fluid ${styles.navbar_content_center} w-auto ${styles.custom_nav_justify}`}>
      <a className={`navbar-brand`} href="https://www.linkedin.com/in/madhavpt" target="_blank">
        <img src="./android-chrome-192x192.png" alt="" width="35" height="35" className="d-inline-block align-text-top"/>
      </a>
      <button className={`navbar-toggler float-end ${styles.custom_menu_button}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className={`navbar-toggler-icon`}></span>
      </button>
      <div className={`collapse navbar-collapse`} id="navbarScroll">
        <ul className={`navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ${styles.custom_text_align}`}>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#career">Career</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#testimonials">Testimonials</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#certifications">Certifications</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}