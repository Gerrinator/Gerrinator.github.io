import './App.css';
import React from 'react';
import About from "./components/About";
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Socials from './components/Socials';

function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <About />
      <Projects />
      <Skills />
      <Socials />
    </main>
  );
}

export default App;
