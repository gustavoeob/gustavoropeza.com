import {useState} from "react";
import "./topButton.scss"
import arrowUp from "../../assets/icons/arrow-circle.svg"
import {useTranslation} from "react-i18next"

const TopButton = () => {
  const [t] = useTranslation("global");
    const [vanish, setVanish] = useState(false);

    const vanishBtn = () => {
      if (window.scrollY > 450){
        setVanish(true)
      } else {
        setVanish(false)
      }
    }
  window.addEventListener('scroll', vanishBtn)


  return (
    <div
      className={
        vanish ? "scroll-up-container" : "scroll-up-container-vanished"
      }
    >
      <div>
        <a href="#top">
          <img
            src={arrowUp}
            alt="arrow circle icon"
            className="arrow-circle-up"
          />
        </a>
        <a href="#top">{t("arrow-up.text")}</a>
      </div>
    </div>
  );
};

export default TopButton;
