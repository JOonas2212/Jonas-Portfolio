// Portfolio.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom"; // ADD THIS IMPORT
import "../App.css";

/* Image imports */
import logo from "../assets/HolyCross-logo.png";
import profilePhoto from "../assets/Profile2.jpg";

export default function Portfolio() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Header/Navigation */}
      <header className="portfolio-header">
        <div className="header-left">
         <img src={profilePhoto} alt="Mark Jonas Gutang" className="header-logo" />
          <nav className="nav-menu">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef); }} className="nav-link">ABOUT ME</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef); }} className="nav-link">CONTACT</a>
            {/* ADD THIS LINK */}
            <Link to="/educational-tour" className="nav-link">EDUCATIONAL TOUR</Link>
          </nav>
        </div>
      </header> 

      {/* Main Content */}
      <main className="portfolio-main">
        <div className="cover-overlay"></div>
        <div className="content-container">
          {/* Left Column - Personal Info */}
          <div className="left-column">
            <div className="profile-card">
              <h2 className="greeting">Hi there,</h2>
              <h1 className="name-title">
                I'm <span className="highlight">Mark Jonas Gutang</span>
                <br />
              </h1>
              <div className="role-badge">
                <div className="badge-line"></div>
                <span>IT Student & Developer</span>
              </div>
              <p className="description">
                I'm learning to build websites and applications while studying Information Technology. 
                I enjoy working with web technologies and creating useful projects as I continue 
                to develop my skills.
              </p>
              <div className="button-group">
                <button 
                  className="cover-button primary-action"
                  onClick={() => scrollToSection(aboutRef)}
                >
                  About Me
                </button>
                <button 
                  className="cover-button secondary-action"
                  onClick={() => scrollToSection(contactRef)}
                >
                  Get In Touch!
                </button>
                {/* ADD THIS EDUCATIONAL TOUR BUTTON */}
                <Link to="/educational-tour">
                  <button className="cover-button" style={{ 
                    background: 'linear-gradient(45deg, #8a0000, #B30000)',
                    color: 'white',
                    border: 'none'
                  }}>
                    View Educational Tour
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Photo */}
          <div className="right-column">
            <div className="photo-container">
              <div className="photo-frame">
                <img 
                  src={profilePhoto} 
                  alt="Mark Jonas Gutang" 
                  className="main-profile-photo"
                />
                <div className="photo-decoration">
                  <div className="decoration-circle circle-1"></div>
                  <div className="decoration-circle circle-2"></div>
                  <div className="decoration-circle circle-3"></div>
                </div>
              </div>
              <div className="photo-label">
                <span className="label-icon">✨</span>
                <span>Mark Jonas O. Gutang</span>
                <span className="label-icon">✨</span>
              </div>
              <div className="tech-stack">
                <div className="tech-item">
                  <span className="tech-icon">⚡</span>
                  React Developer
                </div>
                <div className="tech-item">
                  <span className="tech-icon">🎨</span>
                  UI/UX Designer
                </div>
                <div className="tech-item">
                  <span className="tech-icon">🚀</span>
                  Web Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* About Me Section */}
      <div ref={aboutRef} className="personal-section" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-card">
            <div className="about-text">
              <h3>Passionate IT Student & Developer</h3>
              <p>
                Hi! I'm Mark Jonas, a passionate 3rd year BS Information Technology student 
                at Holy Cross of Davao College. I specialize in software development and 
                web technologies with a focus on creating modern, responsive applications.
              </p>
              <p>
                My journey in technology started with curiosity and has grown into a 
                passion for building solutions that make a difference. I believe in 
                clean code, user-centric design, and continuous learning.
              </p>
              <div className="education-info">
                <h4>Education</h4>
                <p><strong>Holy Cross of Davao College</strong></p>
                <p>BS Information Technology (3rd Year)</p>
                <p>2025 - Present</p>
              </div>
            </div>
            <div className="skills-container">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-name">HTML/CSS</div>
                  <div className="skill-bar">
                    <div className="skill-level level-90"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">JavaScript</div>
                  <div className="skill-bar">
                    <div className="skill-level level-85"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">React</div>
                  <div className="skill-bar">
                    <div className="skill-level level-80"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Node.js</div>
                  <div className="skill-bar">
                    <div className="skill-level level-75"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Python</div>
                  <div className="skill-bar">
                    <div className="skill-level level-70"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">UI/UX Design</div>
                  <div className="skill-bar">
                    <div className="skill-level level-80"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ADD EDUCATIONAL TOUR CTA HERE TOO */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/educational-tour">
            <button className="cover-button" style={{ 
              background: 'linear-gradient(45deg, #8a0000, #B30000)',
              color: 'white',
              border: 'none',
              fontSize: '1.2rem',
              padding: '15px 40px'
            }}>
              🚀 Explore My Educational Tour Experience
            </button>
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="contact-section" id="contact">
        <h2 className="section-title">Let's Connect!</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Get In Touch</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <p>markjonas.gutang@hcdc.edu.ph</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <strong>Phone</strong>
                    <p>09564175520</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Location</strong>
                    <p>Matina Crossing, Davao City, Philippines</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href="https://github.com/JOonas2212" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">🐙</span>
                  GitHub
                </a>
                <a href="https://web.facebook.com/markjonasgutang00" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">📘</span>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
              </div>
            </div>
      );
    }