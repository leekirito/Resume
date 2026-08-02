import { useState } from 'react'
import './index.css'
import './App.css'
import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import Skills            from './components/Skills'
import Projects          from './components/Projects'
import About             from './components/About'
import Footer            from './components/Footer'
import ProjectileSystem  from './components/ProjectileSystem'

export default function App() {
  const [projectilesOn, setProjectilesOn] = useState(false)

  return (
    <>
      <ProjectileSystem enabled={projectilesOn} />
      <Navbar
        projectilesOn={projectilesOn}
        onToggleProjectiles={() => setProjectilesOn(v => !v)}
      />
      <main>
        <Hero />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <About />
      </main>
      <Footer />
    </>
  )
}
