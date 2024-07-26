import {
  GiCalendar,
  GiClawSlashes,
  GiMailbox,
  GiMayanPyramid,
  GiPhone
} from "react-icons/gi";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagramSquare
} from "react-icons/fa";

const Aside = () => {
  const resumeLinkStyle = {
    display: "inline-block",
    padding: "4px 18px",
    fontFamily: "Poppins, sans-serif",
    fontSize: "var(--fs-9)",
    fontWeight: "var(--fw-300)",
    backgroundColor: "#2b2b2c",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px"
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={"/images/sandeep.jpg"} alt="Richard hanrick" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            SANDEEP MISHRA
          </h1>

          <p className="title">Backend developer</p>
          <center>
            <br></br>

            <a
              style={resumeLinkStyle}
              href="https://drive.google.com/file/d/1QBB76iNyHHwqyUyh-QgB2xl5U5h5ZwN-/view?usp=drive_link"
              download="Sandeep-Mishra-Resume.pdf"
              className="resume-download-link"
            >
              <span>Download Resume</span>
            </a>
          </center>
        </div>
        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <GiClawSlashes />
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:sandeepmishra156566@gmail.com"
                className="contact-link"
              >
                sandeepmishra156566@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+12133522795" className="contact-link">
                +91 95165-91409
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiCalendar />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">24 January 1996</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiMayanPyramid />
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Indore, M.P., India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/sandeepmishra156566/"
              className="social-link"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/sandy0280" className="social-link">
              <FaGithub />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.facebook.com/profile.php?id=100003234054906"
              className="social-link"
            >
              <FaFacebook />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.instagram.com/sandeeep_mishra_/"
              className="social-link"
            >
              <FaInstagramSquare />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
