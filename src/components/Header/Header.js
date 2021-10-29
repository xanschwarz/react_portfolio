import React from 'react';
import './Header.css';

// export default function NavTabs({ currentPage, handlePageChange }) {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#home"
//           onClick={() => handlePageChange('Home')}
//           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#about"
//           onClick={() => handlePageChange('About')}
//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//         >
//           About
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#blog"
//           onClick={() => handlePageChange('Blog')}
//           className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
//         >
//           Blog
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           onClick={() => handlePageChange('Contact')}
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </a>
//       </li>
//     </ul>
//   );
// }

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>Xander Schwarz</h1>
      <nav>
        <ul>
          <li>
            {/* Need to add classNames to style as active/inactive. */}
            <a href="#AboutMe" onClick={() => handlePageChange('AboutMe')}>
              About Me
            </a>
          </li>
          <li>
            {/* Need to add classNames to style as active/inactive. */}
            <a
              href="#MyPortfolio"
              onClick={() => handlePageChange('Portfolio')}
            >
              My Portfolio
            </a>
          </li>
          <li>
            {/* Need to add classNames to style as active/inactive. */}
            <a href="#ContactMe" onClick={() => handlePageChange('Contact')}>
              Contact Me
            </a>
          </li>
          <li>
            {/* Need to add classNames to style as active/inactive. */}
            <a href="#MyResume" onClick={() => handlePageChange('Resume')}>
              My Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
