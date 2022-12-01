import {useState} from "react";
import "./topButton.scss"
import arrowUp from "../../assets/icons/arrow-circle.svg"


const TopButton = () => {

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
        <a href="#top">go to top</a>
      </div>
    </div>
  );
};

export default TopButton;
