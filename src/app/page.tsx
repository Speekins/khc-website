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
        <p className="m-2 italic">©2024 Kimberly Haka Counseling. All rights reserved.</p>
      </footer>
    </main>
  )
}