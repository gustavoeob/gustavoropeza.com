import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./hero.scss";
import arrowDown from "../../../../assets/icons/arrow-circle.svg";
import HeroIllustration from "../../../../assets/illustrations/programmer-navy.png";

const Hero = () => {
  const [t] = useTranslation("global");
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
          <h2>{t("me-container.occupation")}</h2>
        </div>
      </div>
      <img
        src={HeroIllustration}
        alt="illustration cartoon guy laid back purple"
        className="hero-illustration"
      />
      <div className="about-me-container">
        <div className="about-me">
          <p>{t("about-me.description")}</p>
          <p> {t("about-me.action")}</p>
        </div>
        <a
          href={t("qr.link")}
          target="_blank"
          rel="noreferrer"
        >
          <img src={t("qr.code")} alt="qr code cv" className="qr-code" />
        </a>
      </div>
      <div
        className={
          vanish ? "scroll-down-container-vanished" : "scroll-down-container"
        }
        id="skills"
      >
        <a href="#skills">
          <span className="scroll-down-text">{t("go-down.desktop-text")}</span>
          <span className="swipe-up-text">{t("go-down.mobile-text")}</span>
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
