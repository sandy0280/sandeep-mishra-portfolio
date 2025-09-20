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
  FaInstagramSquare,
  FaWhatsappSquare
} from "react-icons/fa";
const currentMobileNo = "+919516591409";

const Aside = () => {
  const resumeLinkStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "4px 12px",
    fontFamily: "Poppins, sans-serif",
    fontSize: "var(--fs-9)",
    fontWeight: "var(--fw-300)",
    backgroundColor: "#FF0000",
    color: "#fff",
    textDecoration: "none",
    border: "none",
    borderRadius: "10px",
    marginTop: "15px"
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
            <p className="title">Backend developer</p>
          </h1>
          <center>
            {/* <a
              style={resumeLinkStyle}
              href="https://drive.google.com/file/d/1QBB76iNyHHwqyUyh-QgB2xl5U5h5ZwN-/view?usp=drive_link"
              download="Sandeep-Mishra-Resume.pdf"
              className="title"
            >
              <span>Download Resume</span>
            </a> */}
          </center>
          <br />
          <ul className="social-list">
            <li className="social-item">
              <a
                href="https://www.linkedin.com/in/sandeepmishra-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://github.com/sandy0280"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.facebook.com/profile.php?id=100003234054906"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.instagram.com/sandeeep_mishra_/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaInstagramSquare />
              </a>
            </li>
            <li className="social-item">
              <a
                href={`https://wa.me/${currentMobileNo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaWhatsappSquare />
              </a>
            </li>
          </ul>
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
      </div>
    </aside>
  );
};

export default Aside;
