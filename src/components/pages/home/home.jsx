import Hero from './sections/hero'
import "./home.scss"
import Background from '../../views/background'
import TopButton from '../../views/topButton'
import Skills from './sections/skills'
import Projects from './sections/projects'
import Contact from './sections/contact'

const Home = () => {

  return (
    <main>
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