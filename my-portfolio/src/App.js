import React, { useState } from 'react';
import './App.css';

function App() {
  const [swipeDirection, setSwipeDirection] = useState('');

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);
    setTimeout(() => {
      setSwipeDirection('');
    }, 500);
  };

  return (
    <div className={`portfolio-container ${swipeDirection}`} onTouchMove={(e) => handleSwipe(e)}>
      <header>
      <img className="profile-img fade-in" src="photo.jpg" alt="Profile" />
      <h1 className="fade-in">Bhairavi Vivek Vedak</h1>

      <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="about" className="section">
        <h2>About</h2>
        <p>
          Enthusiastic, self-motivated, and hardworking individual looking for a responsible role where I can utilize my
          knowledge for the betterment of society.
        </p>
        <p>
          Address: Nerul 400706, Navi Mumbai
          <br />
          Phone: +91 9833871642
          <br />
          Email: bhairavivivekvedak@gmail.com
          <br />
          LinkedIn: <a href="https://tinyurl.com/5n6e9zjj">https://tinyurl.com/5n6e9zjj</a>
          <br />
          GitHub: <a href="https://bit.ly/3zaee9s">https://bit.ly/3zaee9s</a>
          <br />
          Instagram: @techsynchroz
        </p>
       
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Intern - Colgate Palmolive | Role - Advance Tech and Architecture</h3>
            <p>Jan 2023 - June 2023</p>
            <p>Worked on the organization's applications.</p>
          </li>
          <li>
            <h3>Intern - Risekraft Consultants</h3>
            <p>July 2022 - Nov 2022</p>
            <p>Assisted in developing client's system features.</p>
          </li>
          <li>
            <h3>NSS Co-Chairperson</h3>
            <p>Aug 2021 - Aug 2022</p>
            <p>Organized and led various social activities. Coordinated with 200 volunteers and worked with 20+ team members.</p>
          </li>
        </ul>
      </section>

      <section id="education" className="section">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>USHA MITTAL INSTITUTE OF TECHNOLOGY</h3>
            <p>B.Tech - Information Technology | Mumbai</p>
            <p>GPA (7th sem): 7.53</p>
          </li>
          <li>
            <h3>ST.XAVIER’S HIGH SCHOOL & JR COLLEGE</h3>
            <p>12th (HSC) - Science | Navi Mumbai</p>
            <p>Percentage: 83.05%</p>
          </li>
          <li>
            <h3>ST.XAVIER’S HIGH SCHOOL & JR COLLEGE</h3>
            <p>10th (SSC) | Navi Mumbai</p>
            <p>Percentage: 92.60%</p>
          </li>
        </ul>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>A Mobile Application (Game) to Inculcate the Values of Ethnicity of India</h3>
            <p>Features: Text to Speech, Bookmarks, Attractive Characters</p>
            <p>Used Thunkable platform for app development.</p>
            <p>Visit project: <a href="https://rb.gy/3oxq8f">https://rb.gy/3oxq8f</a></p>
          </li>
          <li>
            <h3>Online Event Planner</h3>
            <p>Features: Event cards, Comparing venues, Variety of vendors</p>
            <p>Project developed using HTML, CSS, JS, PHP</p>
            <p>Visit project: <a href="https://rb.gy/ji8b09">https://rb.gy</a></p>
          </li>

          <li>
            <h3>Emotion Recognition</h3>
            <p>Project to recognize user emotion based on facial expression.</p>
            <p>Process of Recognition: Data collection, Data training, Inference.</p>
            <p>Visit project: <a href="https://bit.ly/3ROTlas">https://bit.ly/3ROTlas</a></p>
          </li>
        </ul>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div>
          <h3>Languages</h3>
          <ul>C++, Python (Basic), CSS, HTML, JavaScript (Basic), Octave</ul>
        </div>
        <div>
          <h3>Technologies</h3>
          <ul>Tableau (Basic), Wordpress, QGIS (Beginner), SQL/MySQL, React (Beginner)</ul>
        </div>
        <div>
          <h3>Other Skills</h3>
          <ul>Canva, SEO, MS Office</ul>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <ul>Empathy, Adaptability, Creativity, Teamwork, Problem Solving, Active Listening, Leadership</ul>
        </div>
      </section>

      <section id="achievements" className="section">
        <h2>Achievements</h2>
        <ul>
          <li>
            <h3>Toycathon-2021</h3>
            <p>Secured 18th position all over India in the Digital phase</p>
            <p>Developed a gaming App for children on Indian culinary diversity</p>
            <p>Received prize money worth Rs. 25,000/-</p>
          </li>
          <li>
            <h3>Pre Republic day Parade Camp 2021</h3>
            <p>Represented UMIT, SNDT university at the state level</p>
            <p>Part of 200 volunteers, practicing the motto of National Service Scheme (NSS)</p>
          </li>
          <li>
            <h3>AVISHKAR - 2nd position 2018</h3>
            <p>Created an innovative solution to resolve manhole accidents</p>
            <p>Demonstrated the model and necessity</p>
            <p>under the guidance of a project mentor</p>
          </li>
        </ul>
      </section>

      <section id="extracurricular-activities" className="section">
        <h2>Extracurricular Activities</h2>
        <ul>
          <p>Community Connect Fellowship (CCF)</p>
          <p>National Service Scheme (NSS)</p>
          <p>Semiclassical Dancer</p>
          <p>Elementary and Intermediate Exam (Drawing Exam)</p>
        </ul>

        {/* <h4>Certifications</h4>
        <ul>
          <li>Artificial Intelligence (Certification)</li>
          <li>Inspiring Leadership through Emotional Intelligence (Certification)</li>
        </ul> */}
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Address: Nerul 400706, Navi Mumbai</p>
        <p>Phone: +91 9833871642</p>
        <p>Email: bhairavivivekvedak@gmail.com</p>
      </section>

      <footer>
        <p>&copy; 2023 Bhairavi Vivek Vedak. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
