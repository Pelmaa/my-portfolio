import { useState } from "react";
import { SiX } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <nav className="navbar">
        <div className="nav-left">
          <a href="#home" className="home-link">
            About
          </a>
        </div>

        <div className="nav-right">
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#connect">Contact</a>
          <div
            className="toggle-mode, nav-right"
            onClick={() => setDarkMode(!darkMode)}
            role="switch"
            aria-checked={darkMode}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </div>
        </div>
      </nav>

      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <section className="home" id="home">
          <div className="home-content">
            <img
              src="https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/491868579_718230300609029_1705008702836889964_n.jpg?ccb=11-4&oh=01_Q5Aa1wF4TeN98OimkTyM8yflL6GYjbAZaXx_E7lQAk1BTeVv1g&oe=685CECFD&_nc_sid=5e03e0&_nc_cat=107"
              alt="Pema Wangchuk"
              className="profile-pic-side"
            />
            <div className="home-text">
              <h1>
                Hi, I'm <span className="highlight">Pema Wangchuk</span> 👋
              </h1>
              <p className="roles">Web Developer </p>
              <p className="intro">
                Welcome to my personal website! I enjoy building clean and
                simple websites using <strong>React.js</strong>, and I write
                about tech, coding, and my personal projects.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <h2>About Me</h2>
          <p>
            Motivated and detail-oriented science graduate with a Bachelor of
            Science in Physics and Chemistry from Sherubtse College with
            foundational knowledge in coding. Recently, I completed a
            three-month training program in web development and design, which
            significantly enhanced my coding and design skills. I enjoy
            exploring new technologies and contributing to open source projects.
            When I’m not coding, I like reading, hiking, and learning about
            design. I am eager to contribute my technical, analytical, and
            teamwork skills in a dynamic and challenging environment.
          </p>
        </section>

        <section className="section" id="tech">
          <h2>Tech Stack</h2>
          <ul>
            <li>Languages: HTML, CSS, JavaScript</li>
            <li>Frameworks: React, Vite</li>
            <li>Styling: Tailwind CSS,</li>
            <li>Tools: Git, GitHub, VS Code</li>
          </ul>
        </section>

        <section className="section" id="skills">
          <h2> Skills</h2>
          <div className="skills-rated">
            <div className="skill-bar">
              <label>HTML:5</label>
              <progress value="70" max="100"></progress> 80%
            </div>
            <div className="skill-bar">
              <label>React.js</label>
              <progress value="60" max="100"></progress> 70%
            </div>
            <div className="skill-bar">
              <label>Tailwind CSS</label>
              <progress value="60" max="100"></progress> 70%
            </div>
            <div className="skill-bar">
              <label>JavaScript</label>
              <progress value="90" max="100"></progress> 70%
            </div>
            <div className="skill-bar">
              <label>Git</label>
              <progress value="75" max="100"></progress> 65%
            </div>
            <div className="skill-bar">
              <label>Vite</label>
              <progress value="70" max="100"></progress> 70%
            </div>
            <div className="skill-bar">
              <label>Typescript</label>
              <progress value="30" max="100"></progress> 30%
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>WatchBuddy</strong> – A movie tracker app built with React
              & MongoDB.
            </li>
            <li>
              <strong>Todo</strong> – A productivity-focused todo app with user
              login.
            </li>
            <li>
              <strong>Simple-Blog</strong> – A personal blog platform built in
              React.
            </li>
          </ul>
        </section>

        <section className="section" id="blog">
          <h2>Blog (Coming Soon)</h2>
          <p>
            I’ll be posting project walkthroughs, and personal tech reflections
            here. Stay tuned!
          </p>
        </section>

        <section className="section">
          <h2>Resume</h2>
          <p>
            Want to know more about my experience?
            <a href="/resume.pdf" download className="icon-link">
              Download my resume
            </a>
            .
          </p>
        </section>

        <section className="section">
          <h2>Location & Availability</h2>
          <p>
            Based in Bhutan — available for freelance and remote roles
            worldwide.
          </p>
        </section>

        <section className="section" id="connect">
          <h2>Let's Connect</h2>
          <ul>
            <li>
              <a href="mailto:pewangk703@gmail.com" className="icon-link">
                <MdEmail size={20} /> pewangk703@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/pewangk703"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <SiX size={24} /> @pewangk703
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Pelmaa"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaGithub size={22} /> github.com/Pelmaa
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/Pema_Wangchuk"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaLinkedin size={22} /> linkedin.com/in/Pema_Wangchuk
              </a>
            </li>
          </ul>
        </section>

        <footer className="footer">
          Thanks for visiting! Feel free to explore my work or reach out.
        </footer>
      </motion.div>
    </div>
  );
}

export default App;
