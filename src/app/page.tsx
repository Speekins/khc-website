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

const RevealOnScroll = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null!);

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

  const classes = `transition-opacity duration-1000 
        ${isVisible ? "opacity-100" : "opacity-0"
    }`

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
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
        <Contact />
      </RevealOnScroll>
      <RevealOnScroll>
        <Resources />
      </RevealOnScroll>
      <RevealOnScroll>
        <Location />
      </RevealOnScroll>
      <footer className="flex flex-col mb-4 items-center">
        <p className="m-2 italic">©2023 Kimberly Haka Counseling. All rights reserved.</p>
        <p className="font-bold">Made with ❤️ in Littleton, Colorado. Powered by Haka Software Consulting.</p>
      </footer>
    </main>
  )
}
