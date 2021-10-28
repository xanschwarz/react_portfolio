// Add redirect to resume.

import React from 'react';
import './AboutMe.css';
import profilePic from './images/Profile_Pic.jpg';

export default function About() {
  return (
    <div>
      <section className="myImage">
        <img
          src={profilePic}
          alt="Me, on vacation, in a ruin on a small island off the western coast of Ireland called Inisheer."
        />
      </section>
      <section id="AboutMe">
        <aside>
          <h3>About Me:</h3>
        </aside>

        <section id="AboutMeText">
          <p>
            I am an aspiring software developer, currently attending UCSD
            Extension Coding Bootcamp. Before this I completed a B.S. degree in
            Structural Engineering at UCSD, then worked for 3 years as an
            aerospace engineer for Collins Aerospace through an engineering
            services company.
          </p>
          <br></br>
          <p>
            I was born and raised in San Diego, but I have family across the
            states and more distant relatives in Europe. During my free time I
            enjoy traveling, photography, reading, and gaming. I can frequently
            be found lifting in the gym but also love the outdoors. When I have
            the time I love to homebrew beer as well as the occasional mead and
            hard cider, I've even won awards at the local fair and placed in the
            first round of the largest national competition.
          </p>
          <br></br>
          <p>
            For more professional information about me, feel free to check out
            my resume.
          </p>
        </section>
      </section>
    </div>
  );
}
