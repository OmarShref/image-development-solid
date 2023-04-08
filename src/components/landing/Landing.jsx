import "./Landing.css";
import landingVideo from "../../assets/octoper-mall-video.mp4";
import logo from "../../assets/logo.png";
import { isEnglish } from "../navbar/Navbar";

const Landing = () => {
  const text = {
    cardText: [
      "One of the Nile Delta companies",
      "إحدى شركات دلتا النيل للمقاولات",
    ],
  };

  const mousemoveListener = (e) => {
    if (window.innerWidth > 600) {
      document.body.style.setProperty(
        "--mouse-x",
        (e.clientX / document.body.offsetWidth) * 100
      );
      document.body.style.setProperty(
        "--mouse-y",
        (e.clientY / document.body.offsetHeight) * 100
      );
    }
  };
  window.addEventListener("mousemove", mousemoveListener, false);
  return (
    <div id="landing" className="landing">
      <video
        src={landingVideo}
        autoPlay
        muted
        loop
        playsInline
        className="landing-background-video"
      ></video>
      <div className="landing-card">
        <img src={logo} alt="company logo" />
        <p>{isEnglish() ? text.cardText[0] : text.cardText[1]}</p>
      </div>
    </div>
  );
};

export default Landing;
