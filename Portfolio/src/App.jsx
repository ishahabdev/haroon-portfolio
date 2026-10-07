import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Stack from "./components/Stack"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <Projects />
      <Stack/>
      <Contact />
      <Footer />

    </>
  )
}

export default App