import styles from "./header.module.scss";
// import 'bootstrap/dist/css/bootstrap.css';

export default function Header() {
    return <nav className="navbar sticky-top navbar-expand-lg navbar-light position-absolute w-100">
    <div className={`container-fluid ${styles.navbar_content_center}`}>
      {/* <a className="navbar-brand playfair-font" href="#">Navbar scroll</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item">
            <a className="nav-link active playfair-font" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link playfair-font" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link playfair-font" href="#">Career</a>
          </li>
          <li className="nav-item">
            <a className="nav-link playfair-font" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link playfair-font" href="#">Testimonials</a>
          </li>
          <li className="nav-item">
            <a className="nav-link playfair-font" href="#">Achievements</a>
          </li>
          <li className="nav-item">
            <a className="nav-link playfair-font" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}