import React from 'react';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Portfolio from './components/pages/Portfolio/Portfolio';

export default function App() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <Portfolio />
    </div>
  );
}
