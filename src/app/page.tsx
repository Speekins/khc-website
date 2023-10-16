import Navbar from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"
import About from "./components/About/About"
import FAQ from "./components/FAQ/FAQ"
import Location from "./components/Location/Location"
import Services from "./components/Services/Services"
import Contact from "./components/Contact/Contact"
import Resources from "./components/Resources/Resources"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <Resources />
      <Location />
    </main>
  )
}
