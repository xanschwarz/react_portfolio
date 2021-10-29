import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Contact from './components/pages/Contact/Contact';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Resume from './components/pages/Resume/Resume';

export default function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Calling the renderPage method which will return the appropriate component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
