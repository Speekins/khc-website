"use client"
import Navbar from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"
import About from "./components/About/About"
import FAQ from "./components/FAQ/FAQ"
import Location from "./components/Location/Location"
import Services from "./components/Services/Services"
import Contact from "./components/Contact/Contact"
import Resources from "./components/Resources/Resources"
import React, { ReactNode, useEffect, useRef, useState } from "react"
import useHasMounted from '../Hooks/useHasMounted'
import usePscyhScript from '../Hooks/usePsychScript'

const RevealOnScroll = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        scrollObserver.unobserve(entry.target)
      }
    })

    scrollObserver.observe(ref.current)

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current)
      }
    }
  }, [])

  const classes = `transition-opacity duration-[2000ms] 
        ${isVisible ? "opacity-100" : "opacity-0"
    }`

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}

export default function Home() {
  const hasMounted = useHasMounted()
  //usePscyhScript('https://member.psychologytoday.com/verified-seal.js')

  return (
    <main className="flex flex-col items-center">
      {hasMounted && <Navbar />}
      <Hero />
      <RevealOnScroll>
        <About />
      </RevealOnScroll>
      <RevealOnScroll>
        <Services />
      </RevealOnScroll>
      <RevealOnScroll>
        <FAQ />
      </RevealOnScroll>
      <RevealOnScroll>
        <Resources />
      </RevealOnScroll>
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
      <RevealOnScroll>
        <Location />
      </RevealOnScroll>
      <footer className="flex flex-col mt-16 mb-4 items-center text-xs">
        {/* **S.HAKA—Added 7.20.24** Professional verification provided by Psychology Today */}
          <a href="https://www.psychologytoday.com/profile/816221" className="sx-verified-seal"></a>
          <script defer type="text/javascript" src="https://member.psychologytoday.com/verified-seal.js" data-badge="17" data-id="816221" data-code="aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy9bQkFER0VdL3Byb2ZpbGUvW1BST0ZJTEVfSURdP2NhbGxiYWNrPXN4Y2FsbGJhY2s="></script>
        {/* End Verification */}
        <p className="m-2 italic">©2024 Kimberly Haka Counseling. All rights reserved.</p>
      </footer>
    </main>
  )
}