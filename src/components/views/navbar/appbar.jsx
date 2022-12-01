import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LightModeIcon from "../../../assets/icons/sun.svg"
import "./appbar.scss"
import { Linkedin } from '../../../assets/logo/linkedin';
import { Github } from "../../../assets/logo/github"

const Appbar = () => {
  const darkModeContent = "#fff"
  return (
    <Navbar bg="transparent" expand="lg" fixed="top" className="navbar">
      <Container className="appbar-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <div className="appbar-container-one">
              <NavDropdown title="EN">
              <NavDropdown.Item href="#">EN</NavDropdown.Item>
              <NavDropdown.Item href="#">ES</NavDropdown.Item>
              </NavDropdown>
              <button>
                <img src={LightModeIcon} alt="light mode sun icon" className="theme-icon light-mode-icon"/>
              </button>
            </div>
            <div className="appbar-container-two">
              <button className="navlink-button">
                <a href="#skills" className="navlink" >skills</a>
              </button>
              <button className="navlink-button">
                <a href="#projects" className="navlink">projects</a>
              </button>
              <button className="navlink-button">
                <a href="#contact" className="navlink" >contact</a>
              </button>
            </div>
            <div className="appbar-container-three">
              <a href="https://www.linkedin.com/in/gustavo-oropeza/" className="social-logo-link">
                <Linkedin color={darkModeContent} className="social-logo-icon" />
              </a>
              <a href="https://github.com/gustavoeob" className="social-logo-link">
                <Github color={darkModeContent} className="social-logo-icon"/>
              </a>
              {/* <a href="https://api.whatsapp.com/send?phone=56936346865&text=I%20looked%20at%20your%20resume%20and%20I%27m%20interested%20in%20chatting%20with%20you." className="social-logo-link">
                <Whatsapp color={darkModeContent} className="social-logo-icon" />
              </a> */}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;