import styles from "./header.module.scss";
// import 'bootstrap/dist/css/bootstrap.css';

export default function Header() {
    return <nav className="navbar sticky-top navbar-expand-lg navbar-light position-absolute w-100">
    <div className={`container-fluid ${styles.navbar_content_center}`}>
      {/* <a className="navbar-brand" href="#">Madhav Trivedi</a> */}
      <button className="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
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