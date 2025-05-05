import './App.css'
import GetInTouch from './components/Contacts/GetInTouch'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <>
    <div className='App'>
    <Navbar/>
    <Hero/>
    <Experience/>
    <Skills/>
    <Projects/>
    <GetInTouch/>
    </div>
    </>
  )
}

export default App
