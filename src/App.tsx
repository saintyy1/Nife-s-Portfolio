import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Reviews from "./components/Reviews"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {

  return (
    <main className="min-h-screen bg-black text-foreground">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}

export default App