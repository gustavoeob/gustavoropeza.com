import Hero from './sections/hero'
import "./home.scss"
import Background from '../../views/background'
import TopButton from '../../views/topButton'
import Skills from './sections/skills'
import Projects from './sections/projects'
import Contact from './sections/contact'
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";

const Home = () => {
  const {theme}  = useContext(ThemeContext);
  return (
    <main className={theme}>
      <Background />
      <Hero />
      <Skills />
      <Projects  />
      <Contact />
      <TopButton /> 
    </main>
  )
}

export default Home