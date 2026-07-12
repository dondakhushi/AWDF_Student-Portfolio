import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header name="Khushi Donda" themeColor="teal" />
      <Navbar />
      <About />
      <Skills skillList={['JavaScript', 'React', 'Node.js']} />
      <Footer email={"khushi@gmail.com"}/>
    </>
  )
}

export default App
