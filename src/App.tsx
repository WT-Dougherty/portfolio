import React from 'react';
import './App.css'
import './index.css'
import Navigation from './components/navigation'
import Home from './sections/home'
import About from './sections/about'
import Skills from './sections/skills'
import Projects from './sections/projects'
import Contact from './sections/contact'

function App(): React.JSX.Element {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App 