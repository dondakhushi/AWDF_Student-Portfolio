import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import PortfolioData from './Data/PortfolioData';

import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header name={PortfolioData.name} />
      <Navbar navLinks={PortfolioData.navLinks} />

      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/Projects" element={<Project />} />
        <Route path="/Contact" element={<Contact />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer
        email={PortfolioData.Footer.email}
        name={PortfolioData.name}
        year={PortfolioData.Footer.year}
      />
    </div>
  );
}

export default App;