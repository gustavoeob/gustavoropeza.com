import "./background.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const Background = () => {
  const {theme}  = useContext(ThemeContext);
  return <div className={`${theme}-background`}></div>;
};
export default Background;
