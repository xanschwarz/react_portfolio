import React from 'react';
import './Portfolio.css';
import dayLeeLaugh from './images/DayLeeLaugh.JPG';
import weatherDashboard from './images/WeatherDashboard.JPG';
import workPlanner from './images/WorkPlanner.JPG';

export default function Home() {
  return (
    <div>
      {/* The My Work section has an aside with the section title and an interior section with images representing links to my work. */}
      <section id="MyWork">
        <aside>
          <h3>My Work:</h3>
        </aside>

        <section id="MyWorkCards">
          {/* The My Work interior section consists of cards containing images that act as links to my work. Within the cards are also titles of the projects. */}
          <div className="largeCard">
            <a href="https://sbeltier.github.io/group-project-1-the-daily-laugh/">
              <h2 className="MyWorkTitles">The DayLee Laugh Group Project</h2>
            </a>
            <a href="https://github.com/sbeltier/group-project-1-the-daily-laugh/">
              <h2 className="MyWorkTitlesGitHub">The DayLee Laugh GitHub</h2>
            </a>
            <div>
              <img src={dayLeeLaugh} alt="The DayLee Laugh page." />
            </div>
          </div>

          <div className="smallCard">
            <a href="https://xanschwarz.github.io/Weather_Dashboard/">
              <h2 className="MyWorkTitles">Weather Dashboard</h2>
            </a>
            <a href="https://github.com/xanschwarz/Weather_Dashboard/">
              <h2 className="MyWorkTitlesGitHub">Weather Dashboard GitHub</h2>
            </a>
            <img src={weatherDashboard} alt="The Weather Dashboard page." />
          </div>

          <div className="smallCard">
            <a href="https://xanschwarz.github.io/Work-Planner/">
              <h2 className="MyWorkTitles">Work Day Planner</h2>
            </a>
            <a href="https://github.com/xanschwarz/Work-Planner/">
              <h2 className="MyWorkTitlesGitHub">Work Day Planner GitHub</h2>
            </a>
            <img src={workPlanner} alt="The Work Day Planner page." />
          </div>
        </section>
      </section>
    </div>
  );
}
