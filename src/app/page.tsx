import Navbar from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
    </main>
  )
}
