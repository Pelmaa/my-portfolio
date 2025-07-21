import { useState } from "react";
import {
  SiExpress,
  SiMongodb,

  SiVite,
  SiX,
} from "react-icons/si";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <nav className="navbar">
        <div className="nav-left">
          <a href="#home" className="home-link">
            Welcome to my personal website!
          </a>
        </div>

        <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-right ${navOpen ? 'open' : ''}`}>
  <a href="#services" onClick={() => setNavOpen(false)}>Services</a>
  <a href="#projects" onClick={() => setNavOpen(false)}>Projects</a>
  <a href="#blog" onClick={() => setNavOpen(false)}>Blog</a>
  <a href="#connect" onClick={() => setNavOpen(false)}>Contact</a>
  <div 
    className="toggle-mode" 
    onClick={() => setDarkMode(!darkMode)}
    role="switch"
    aria-checked={darkMode}
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && setDarkMode(!darkMode)}
  >
    {darkMode ? "☀️" : "🌙"}
  </div>
</div>

        
      </nav>

      <div>
        <section className="home" id="home">
          <div className="home-content">
            <img
              src="https://avatars.githubusercontent.com/u/205863820?v=4"
              alt="Pema Wangchuk"
              className="profile-pic-side"
            />
            <div className="home-text">
              <h1>
                Hi, I'm <span className="highlight">Pema Wangchuk</span> 👋
              </h1>
              
              <p className="roles">Web Developer </p>
             
            </div>
          </div>
        </section>
<section> <p className="intro">
               
                Hey there! I’m passionate about
                building websites that are both visually engaging and
                technically robust. I enjoy crafting dynamic user interfaces
                with <strong>React.js</strong> and developing efficient backend
                systems using <strong>Node.js</strong>, <strong>Express</strong>
                , and <strong>MongoDB</strong>. This space is where I share my
                projects, development journey, and the lessons I learn along the
                way
              </p></section>
        <section className="section" id="about">
          <h2>About Me</h2>
          <p>
            Motivated and detail-oriented science graduate with a Bachelor of
            Science in Physics and Chemistry from Sherubtse College with
            foundational knowledge in coding. Recently, I completed a training
            program in web development and design, which significantly enhanced
            my coding and design skills. I enjoy exploring new technologies and
            contributing to open source projects. I am eager to contribute my
            technical, analytical, and teamwork skills in a dynamic and
            challenging environment.
          </p>
        </section>

        <section className="section" id="tech">
          <h2>Tech Stack</h2>
          <ul>
            <li>Languages: HTML, CSS, JavaScript</li>
            <li>Frameworks: React js, Vite</li>
            <li>Backend: Node.js, Express, MongoDB</li>

            <li>Styling: CSS3</li>
            <li>Tools: GitHub, VS Code</li>
          </ul>
        </section>

        <section className="section" id="skills">
          <h2>Skills</h2>
          <div className="skill-icons">
            <div className="icon-circle">
              <FaHtml5 size={32} color="#e44d26" />
              <span>HTML5</span>
            </div>
            <div className="icon-circle">
              <FaCss3Alt size={32} color="#1572B6" />
              <span>CSS3</span>
            </div>

            <div className="icon-circle">
              <FaJs size={32} color="#f7df1e" />
              <span>JavaScript</span>
            </div>
            <div className="icon-circle">
              <FaReact size={32} color="#61dafb" />
              <span>React.js</span>
            </div>
            <div className="icon-circle">
              <SiVite size={32} color="#646CFF" />
              <span>Vite</span>
            </div>
            <div className="icon-circle">
              <FaNodeJs size={32} color="#3c873a" />
              <span>Node.js</span>
            </div>
            <div className="icon-circle">
              <SiExpress size={32} color="#000000" />
              <span>Express</span>
            </div>
            <div className="icon-circle">
              <SiMongodb size={32} color="#47A248" />
              <span>MongoDB</span>
            </div>
            <div className="icon-circle">
              <FaGithub size={32} color="#000000" />
              <span>GitHub</span>
            </div>

        
          </div>
        </section>

        <section className="section" id="softskills">
          <h2>Other Strengths</h2>
          <ul>
            <li>
              <strong>Debugging:</strong> Able to quickly identify and resolve
              code issues using console logs.
            </li>
            <li>
              <strong>Attention to Detail:</strong> Focused on clean, consistent
              UI and well-structured code.
            </li>
            <li>
              <strong>Team Communication:</strong> Comfortable collaborating,
              reviewing code, and contributing in team environments.
            </li>
          </ul>
        </section>

        <section className="section" id="services">
          <h2>Services</h2>
          <div className="services">
            <div className="service-card">
              <h3>Frontend Development</h3>
              <p>
                I create responsive and visually appealing websites using
                React.js,CSS,and modern tools like Vite.
              </p>
            </div>
            <div className="service-card">
              <h3>Backend Development</h3>
              <p>
                I build robust APIs and server-side logic using Node.js,
                Express, and MongoDB for seamless integration with frontend
                apps.
              </p>
            </div>
            <div className="service-card">
              <h3>Full-Stack Solutions</h3>
              <p>
                End-to-end web application development — from UI design to
                backend logic — all in one package.
              </p>
            </div>
            <div className="service-card">
              <h3>Deployment & Hosting</h3>
              <p>
                Deploying web applications using platforms like Netlify,
                and Render for fast and reliable delivery.
              </p>
            </div>
          </div>
        </section>
        <section className="section" id="get-in-touch">
          <h2>Get in Touch</h2>
          <p>
            Have a project in your mind?
            <a href="#connect" className="icon-link">
              Contact Me
            </a>
          </p>
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
  <h2>My Blog</h2>
  <p>
    I share project walkthroughs, coding tips, and tech reflections on my blog.
    Check it out here:
    <a 
      href="https://pelmaa-blog.netlify.app" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="icon-link"
    >
      Visit My Blog
    </a>
  </p>
</section>


        <section className="section">
          <h2>Resume</h2>
          <p>
            Want to know more about my experience?
            <a href="/Pema_Wangchuk_Resume.pdf" download className="icon-link">
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
                href="https://www.linkedin.com/in/pema-wangchuk"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaLinkedin size={22} /> linkedin.com/in/pema-wangchuk
              </a>
            </li>
          </ul>
        </section>

        <footer className="footer">
          Thanks for visiting! Feel free to explore my work or reach out.
        </footer>
      </div>
    </div>
  );
}

export default App;
