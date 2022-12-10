import { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./appbar.scss";
import { Linkedin } from "../../../assets/logo/linkedin";
import { Github } from "../../../assets/logo/github";
import  GlobeIcon  from "../../../assets/icons/global-icon.png";
import  Sun  from "../../../assets/icons/sun.png";
import  Moon  from "../../../assets/icons/moon.png";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../context/ThemeContext";

const Appbar = () => {
  const {changeTheme, theme} = useContext(ThemeContext);
  const EnglishFlag = "https://cdn-icons-png.flaticon.com/512/299/299688.png";
  const SpanishFlag = "https://cdn-icons-png.flaticon.com/512/299/299820.png";

  const [t, i18n] = useTranslation("global");
  const [langSelection, setLangSelection] = useState(
    <img
      className="globe-icon"
      alt="globe language icon" 
      src={GlobeIcon}
    />
  );
  return (
    <Navbar bg="transparent" expand="lg" fixed="top" className="navbar">
      <Container className="appbar-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <div className="appbar-container-one">
              <NavDropdown title={langSelection}>
                <NavDropdown.Item>
                  <button
                    className="changeLangButton"
                    onClick={() => {
                      i18n.changeLanguage("en");
                      setLangSelection(
                        <button className="language-container-en">
                          EN
                          <img
                            src={EnglishFlag}
                            alt="en"
                            className="language-flag"
                          />
                        </button>
                      );
                    }}
                  >
                    <button className="language-container-en">
                      EN
                      <img
                        src={EnglishFlag}
                        alt="en"
                        className="language-flag"
                      />
                    </button>
                  </button>
                </NavDropdown.Item>
                <hr />
                <NavDropdown.Item>
                  <button
                    className="changeLangButton"
                    onClick={() => {
                      i18n.changeLanguage("es");
                      setLangSelection(
                        <button className="language-container-es">
                          ES
                          <img
                            src={SpanishFlag}
                            alt="es"
                            className="language-flag"
                          />
                        </button>
                      );
                    }}
                  >
                                          
                        <button className="language-container-es">
                          ES
                          <img
                            src={SpanishFlag}
                            alt="es"
                            className="language-flag"
                          />
                        </button>
                  </button>
                </NavDropdown.Item>
              </NavDropdown>
              <button onClick={changeTheme}>
                <img
                  src={ theme === "light" ? Moon 
                : Sun }
                  alt="light mode sun icon"
                  className={`${theme}-icon`}
                />
              </button>
            </div>
            <div className="appbar-container-two">
              <button className="navlink-button">
                <a href="#skills" className="navlink">
                  {t("appbar.skills")}
                </a>
              </button>
              <button className="navlink-button">
                <a href="#projects" className="navlink">
                  {t("appbar.projects")}
                </a>
              </button>
              <button className="navlink-button">
                <a href="#contact" className="navlink">
                  {t("appbar.contact")}
                </a>
              </button>
            </div>
            <div className="appbar-container-three">
              <a
                href="https://www.linkedin.com/in/gustavo-oropeza/"
                className="social-logo-link"
              >
                <Linkedin

                  className="social-logo-icon"
                />
              </a>
              <a
                href="https://github.com/gustavoeob"
                className="social-logo-link"
              >
                <Github className="social-logo-icon" />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
