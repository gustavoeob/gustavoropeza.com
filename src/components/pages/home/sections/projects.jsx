import "./projects.scss";
import Carousel from "./carousel";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [t] = useTranslation("global");
  return (
    <div className="main-container projects-container" id="projects">
      <h2 className="section-title">{t("appbar.projects")}</h2>
      <Carousel  />
      <h3>{t("projects.legend")}</h3>
    </div>
  );
};

export default Projects;
