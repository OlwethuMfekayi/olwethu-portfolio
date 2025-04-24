// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Capabilities from './Components/Capabilities';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-200 via-pink-200 to-gray-100">
        {/* Sticky navbar */}
        <header className="w-full shadow-md sticky top-0 z-50">
          <Navbar />
        </header>

        {/* Main content with padding that adjusts based on screen size */}
        <main className="flex-grow px-4 sm:px-6 md:px-8 lg:px-12 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Capabilities />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="w-full mt-auto">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;

