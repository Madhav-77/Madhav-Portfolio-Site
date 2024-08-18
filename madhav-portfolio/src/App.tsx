import './App.scss'
import About from './components/About/About'
import Achievements from './components/Achievements/Achievements'
import Career from './components/Career/Career'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'

function App() {
  return (
    <>
      <Home />
      <About />
      <Career />
      <Portfolio />
      <Testimonials />
      <Achievements />
      <Contact />
      <Footer />
    </>
  )
}

export default App
