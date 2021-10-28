import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Portfolio from './components/pages/Portfolio/Portfolio';

export default function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}
