import { useState } from "react";
import "./hero.scss";
import CV from "../../../../assets/images/white-english-CV.png";
import arrowDown from "../../../../assets/icons/arrow-circle.svg";
import HeroIllustration from "../../../../assets/illustrations/programmer-navy.png";

const Hero = () => {
  const [vanish, setVanish] = useState(false);

  const vanishBtn = () => {
    if (window.scrollY >= 450) {
      setVanish(true);
    } else {
      setVanish(false);
    }
  };

  window.addEventListener("scroll", vanishBtn);

  return (
    <section className="main-container hero_container" id="top">
      <div className="me-cv-container">
        <div className="me-container">
          <h1>Gustavo Oropeza</h1>
          <h2>Front-end Developer</h2>
        </div>
      </div>
      <img
        src={HeroIllustration}
        alt="illustration cartoon guy laid back purple"
        className="hero-illustration"
      />
      <div className="about-me-container">
        <div className="about-me">
          <p>
            I'm a motivated front-end developer and UX design enthusiast, I like
            to transform ideas into designs that are user friendly, dinamic and
            scalable at once.

          </p>
            <p>Scan QR Code to know more about me.</p> 
        </div>
        <a href="https://cdn.me-qr.com/pdf/10971974.pdf" target="_blank" rel="noreferrer">
          <img src={CV} alt="qr code cv" className="qr-code" />
        </a>
      </div>
      <div
        className={
          vanish ? "scroll-down-container-vanished" : "scroll-down-container"
        }
        id="skills"
      >
        <a href="#skills">
          <span className="scroll-down-text">scroll down</span>
          <span className="swipe-up-text">swipe up</span>
        </a>
        <a href="#skills">
          <img
            src={arrowDown}
            alt="arrow circle icon"
            className="arrow-circle-down"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
