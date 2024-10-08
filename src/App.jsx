import Cards from "./components/Cards.jsx"
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import DivLine from "./assets/DivLine.jsx"
import About from "./components/About.jsx"
import Footer from "./components/Footer.jsx"
import Contact from "./components/Contact.jsx"
import Main from "./components/Main.jsx"
import TheNew from "./components/TheNew.jsx"


function App() {
 
  return (
    <div>
      <Header />
      <Hero />
      <DivLine />
      <Main />
      <DivLine />
      <Cards />
      <DivLine />
      <About />
      <DivLine />
      <Contact />
      <DivLine />
      <Footer />
    </div>
  )
}

export default App

