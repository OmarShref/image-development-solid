import "./Navbar.css";
import logo from "../../assets/logo.png";
import { createSignal } from "solid-js";

export const [isEnglish, setIsEnglish] = createSignal(false);

const Navbar = () => {
  const texts = {
    home: ["Home", "الصفحة الرئيسية"],
    aboutCompany: ["About Company", "حول الشركة"],
    projects: ["Projects", "المشاريع"],
    contactUs: ["Contact Us", "اتصل بنا"],
  };

  const [showLinks, setShowLinks] = createSignal(true);

  const handleLanguageChange = () => {
    isEnglish() ? setIsEnglish(false) : setIsEnglish(true);
  };
  const handleOpen = () => {
    setShowLinks(false);
    document.getElementsByClassName("dropdown-menu")[0].classList.add("opened");
    document.getElementsByClassName("menu-icon")[0].classList.add("flipped");
  };
  const handleClose = () => {
    setShowLinks(true);
    document
      .getElementsByClassName("dropdown-menu")[0]
      .classList.remove("opened");
    document.getElementsByClassName("menu-icon")[0].classList.remove("flipped");
  };

  function resizeListener() {
    if (window.innerWidth >= 851) {
      setShowLinks(true);
      document
        .getElementsByClassName("dropdown-menu")[0]
        .classList.remove("opened");
      document
        .getElementsByClassName("menu-icon")[0]
        .classList.remove("flipped");
    }
  }
  window.addEventListener("resize", resizeListener);

  let scrollPos = 0;
  function scrollListener() {
    if (document.body.getBoundingClientRect().top < scrollPos) {
      document.getElementById("navbar").classList.add("scrolled-up");
    } else {
      document.getElementById("navbar").classList.remove("scrolled-up");
    }
    scrollPos = document.body.getBoundingClientRect().top;

    // ------------------------------------------------------------------------

    document.getElementById("1").classList.remove("current-link");
    document.getElementById("2").classList.remove("current-link");
    document.getElementById("3").classList.remove("current-link");
    document.getElementById("4").classList.remove("current-link");
    document.getElementById("5").classList.remove("current-link");
    document.getElementById("6").classList.remove("current-link");
    document.getElementById("7").classList.remove("current-link");
    document.getElementById("8").classList.remove("current-link");
    const aboutCompanyHeight = window.innerWidth <= 850 ? 1909 : 1069;
    if (window.scrollY < window.innerHeight) {
      document.getElementById("1").classList.add("current-link");
      document.getElementById("5").classList.add("current-link");
    } else if (
      window.scrollY >= window.innerHeight &&
      window.scrollY < window.innerHeight + aboutCompanyHeight
    ) {
      document.getElementById("2").classList.add("current-link");
      document.getElementById("6").classList.add("current-link");
    } else if (
      window.scrollY >= window.innerHeight + aboutCompanyHeight &&
      window.scrollY < 2 * window.innerHeight + aboutCompanyHeight
    ) {
      document.getElementById("3").classList.add("current-link");
      document.getElementById("7").classList.add("current-link");
    } else if (
      window.scrollY >= 2 * window.innerHeight + aboutCompanyHeight &&
      window.scrollY < 2 * window.innerHeight + aboutCompanyHeight + 465
    ) {
      document.getElementById("3").classList.add("current-link");
      document.getElementById("7").classList.add("current-link");
    }
  }
  window.addEventListener("scroll", scrollListener);

  return (
    <div className="navbar" id="navbar">
      <div className="navbar-contents">
        <div className="navbar-background"></div>
        <div className="logo-language-container">
          <a href="#landing" style={{ display: "flex", alignItems: "center" }}>
            <img className="logo" src={logo} alt="Company logo" />
          </a>
          {isEnglish() ? (
            <i
              onClick={handleLanguageChange}
              className="fa-solid fa-language language-btn is-english"
            ></i>
          ) : (
            <i
              onClick={handleLanguageChange}
              className="fa-solid fa-language language-btn"
            ></i>
          )}
        </div>
        <ul className="dropdown-menu">
          <li>
            <a
              id="1"
              onClick={handleClose}
              href="#landing"
              className="current-link"
            >
              {isEnglish() ? texts.home[0] : texts.home[1]}
            </a>
          </li>
          <li>
            <a id="2" onClick={handleClose} href="#about-company">
              {isEnglish() ? texts.aboutCompany[0] : texts.aboutCompany[1]}
            </a>
          </li>
          <li>
            <a id="3" onClick={handleClose} href="#our-projects">
              {isEnglish() ? texts.projects[0] : texts.projects[1]}
            </a>
          </li>
          <li>
            <a id="4" onClick={handleClose} href="#contactus">
              {isEnglish() ? texts.contactUs[0] : texts.contactUs[1]}
            </a>
          </li>
        </ul>
        <div className="nav-links">
          <ul>
            <li>
              <a
                id="5"
                onClick={handleClose}
                href="#landing"
                className="current-link"
              >
                {isEnglish() ? texts.home[0] : texts.home[1]}
              </a>
            </li>
            <li>
              <a id="6" onClick={handleClose} href="#about-company">
                {isEnglish() ? texts.aboutCompany[0] : texts.aboutCompany[1]}
              </a>
            </li>
            <li>
              <a id="7" onClick={handleClose} href="#our-projects">
                {isEnglish() ? texts.projects[0] : texts.projects[1]}
              </a>
            </li>
            <li>
              <a id="8" onClick={handleClose} href="#contactus">
                {isEnglish() ? texts.contactUs[0] : texts.contactUs[1]}
              </a>
            </li>
          </ul>

          {showLinks() ? (
            <div>
              <i
                onClick={handleOpen}
                className="fa-solid fa-bars menu-icon"
              ></i>
            </div>
          ) : (
            <div>
              <i
                onClick={handleClose}
                className="fa-solid fa-bars menu-icon"
              ></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
