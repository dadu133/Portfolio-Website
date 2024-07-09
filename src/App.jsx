import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Skills from './Skills'
import Workexperience from './Workexperience'
import Contact from './Contact'
import Footer from './Footer'
import Project from './Project'
import About from './About'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className='container'>

        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Project></Project>
        <Workexperience></Workexperience>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
