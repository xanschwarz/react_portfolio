/*  -----------------------------------------------------------------------------------------------------------------------

A link to a downloadable resume and a list of my developer-related proficiencies.

-----------------------------------------------------------------------------------------------------------------------  */

import React from 'react';
import './Resume.css';
import resumePDF from './Resume.pdf';

export default function Resume() {
  return (
    <div id="resume">
      <h1>My Resume</h1>
      <p id="summary">
        Full stack web developer that is passionate in creating and maintaining
        responsive and polished applications using various front-end and
        back-end technologies. Background in Structural and Aerospace
        Engineering, currently attending the Full Stack Web Development Boot
        Camp at UCSD and looking forward to a career developing websites and web
        applications.
      </p>
      <div id="proficiencies">
        <h2>My Proficiencies</h2>
        <div id="proficienciesLists">
          <div>
            <h3>Front-end:</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
              <li>jQuery</li>
              <li>AJAX</li>
              <li>APIs</li>
            </ul>
          </div>
          <div>
            <h3>Back-end:</h3>
            <ul>
              <li>Node.JS</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>Handlebars</li>
              <li>Sequelize</li>
            </ul>
          </div>
        </div>
      </div>
      <a href={resumePDF} target="_blank" rel="noreferrer" class="resumeLink">
        You can click here to view my full resume.
      </a>
      <a
        href={resumePDF}
        download="resume.pdf"
        target="_blank"
        rel="noreferrer"
        class="resumeLink"
      >
        You can click here to download my full resume and view at your leisure.
      </a>
    </div>
  );
}
