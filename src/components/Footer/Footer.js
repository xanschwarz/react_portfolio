import React from 'react';
import './Footer.css';

export default function Footer({ currentPage, handlePageChange }) {
  return (
    <div>
      {/* The footer includes a list of my contact information. */}
      <footer>
        <ul id="ContactMe">
          <li>xanschwarz@gmail.com</li>
          <li>(858) 213-6061</li>
          <li>
            <a href="https://github.com/xanschwarz/">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alexander-schwarz-web-dev/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="./assets/resume/resume.pdf">Resume</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
