// src/components/About.js
import React from 'react';

function About() {
  return (
    <section id="about" className="portfolio-section">
      <h2>About Me</h2>
      <h3>Hey guys, </h3>
      <p>I am Shreyas, a highly motivated and dedicated computer science student with a passion for technology and a strong foundation in programming and full stack development. Currently pursuing a Bachelor's degree in Computer Science in spcl. Artificial Intelligence and Machine Learning at Vellore Institute of Technology where I have gained a solid understanding of algorithms, data structures, and object-oriented programming, being proficient in languages such as Java, Python, and C++, with hands-on experience in developing web applications and deploying a few smart contracts. In addition to my hobbies, I've also participated in a few hackathons and coding competitions. I'm always looking for new challenges and opportunities to learn.</p>
    <h1 class="hey" align="center" >EDUCATION</h1>
    <div class="flowchart" align="center">
      <div class="node" id="high-school">
        <h2 class="me">Secondary School</h2>
        <p class="me">2006 - 2019</p>
        <p class="me">Siddharth Village School | Hosur</p>
      </div>
      <div id="line1"></div>
      <div class="arrow5"></div>
      <div class="node" id="Senior Secondary">
        <h2 class="me">Senior Secondary School</h2>
        <p class="me">2019 - 2021</p>
        <p class="me">Sishya School | Hosur</p>
      </div>
      <div id="line1"></div>
      <div class="arrow6"></div>
      <div class="node" id="undergraduate-degree">
        <h2 class="me">Undergraduate Degree</h2>
        <p class="me">2021 - Present</p>
        <p class="me">Vellore Institute of Technology | Chennai</p>
      </div>
    </div>
    </section>
  );
}

export default About;
