"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export default function OpenMathPage() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isNavOpen, setIsNavOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const missionSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth <= 1024) return;

      if (missionSectionRef.current) {
        const rect = missionSectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        if (x >= 0 && x <= 100 && y >= 0 && y <= 100) {
          setMousePosition({ x, y });
        }
      }
    };

    const handleMouseLeave = () => {
      if (window.innerWidth > 1024) {
        setMousePosition({ x: 50, y: 50 });
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setMousePosition({ x: 50, y: 50 });
      }
    };

    if (missionSectionRef.current) {
      missionSectionRef.current.addEventListener("mousemove", handleMouseMove);
      missionSectionRef.current.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (missionSectionRef.current) {
        missionSectionRef.current.removeEventListener("mousemove", handleMouseMove);
        missionSectionRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.openMathPage}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.navLogo}>OpenMath</div>
          <button
            className={styles.navToggle}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`${styles.navMenu} ${isNavOpen ? styles.active : ""}`}>
            <li>
              <a href="#home" onClick={() => setIsNavOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#mission" onClick={() => setIsNavOpen(false)}>
                Mission
              </a>
            </li>
            <li>
              <a href="#programs" onClick={() => setIsNavOpen(false)}>
                Programs
              </a>
            </li>
            <li>
              <a href="#research" onClick={() => setIsNavOpen(false)}>
                Research
              </a>
            </li>
            <li>
              <a href="#join" className={styles.joinBtn} onClick={() => setIsNavOpen(false)}>
                Join Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection} id="home">
        <div className={styles.videoBackground}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className={styles.backgroundVideo}
          >
            <source src="/about-us/openmath/Untitled video (11).mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay} />
          <div className={styles.videoFadeToBlack} />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>OPENMATH</h1>
          <p className={styles.heroSubtitle}>Bridging Global STEM Education</p>
          <a href="#join" className={styles.ctaButton}>Get Started</a>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        {/* Mission Section */}
        <div className={styles.missionImageSection} ref={missionSectionRef} id="mission">
          <img
            src="/about-us/openmath/BeFunky-collage (1).jpg"
            alt="OpenMath Global Impact"
            className={styles.missionBackgroundImage}
          />
          <div className={styles.missionOverlay} />
          <div className={styles.missionFadeToBlackTop} />
          <div className={styles.missionFadeToWhite} />
          <div
            className={styles.missionContent}
            style={{
              transform: `translate(${mousePosition.x - 50}px, ${
                mousePosition.y - 50
              }px)`,
            }}
          >
            <h2 className={styles.missionTitle}>Our Mission</h2>
            <p className={styles.missionText}>
              OpenMath bridges the gap in global STEM education by providing
              free competitions and workshops to students who otherwise
              wouldn&apos;t have access to such programs. We believe that talent
              is universal, but opportunity is not.
            </p>
          </div>
        </div>

        {/* Programs Section */}
        <div className={styles.programsSection} id="programs">
          <h2 className={styles.sectionTitle}>OpenMath Programs</h2>
          <div className={styles.programsGrid}>
            <div className={styles.programCard}>
              <h3 className={styles.programTitle}>STEM Competitions</h3>
              <p className={styles.programDescription}>
                We organize international mathematics and science competitions
                for students in underserved communities, providing a platform
                for academic excellence.
              </p>
            </div>
            <div className={styles.programCard}>
              <h3 className={styles.programTitle}>Educational Workshops</h3>
              <p className={styles.programDescription}>
                Interactive workshops designed to build problem-solving skills
                and foster a love for STEM subjects among young learners
                worldwide.
              </p>
            </div>
            <div className={styles.programCard}>
              <h3 className={styles.programTitle}>Research Initiatives</h3>
              <p className={styles.programDescription}>
                Supporting student researchers and conducting studies on STEM
                education effectiveness and accessibility in global communities.
              </p>
            </div>
          </div>

          <div className={styles.impactStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Students Educated</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>$1,000+</span>
              <span className={styles.statLabel}>Raised</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50,000+</span>
              <span className={styles.statLabel}>Impressions</span>
            </div>
          </div>
        </div>

        {/* Research Section */}
        <div className={styles.researchSection} id="research">
          <div className={styles.researchContent}>
            <h2 className={styles.researchTitle}>OpenMath Research</h2>
            <h3 className={styles.paperTitle}>
              Starting Young in STEM: The Relationship Between Competition Entry
              Age and Student Engagement Patterns
            </h3>
            <p className={styles.paperAuthors}>By Dominic Ely & Ethan Curtis</p>
            <p className={styles.paperAbstract}>
              Our latest research investigates how early participation in STEM
              competitions affects long-term academic engagement. This study of
              116 students reveals that while early starters participate more
              frequently in competitions, the key to academic success lies in
              sustained engagement rather than starting age.
            </p>
            <div className={styles.paperEmbed}>
              <iframe
                src="https://research-archive.org/index.php/rars/preprint/view/2400/version/2552"
                className={styles.researchIframe}
                title="Research Paper: Starting Young in STEM"
                frameBorder="0"
                allowFullScreen
              />
            </div>
            <div className={styles.paperActions}>
              <a
                href="https://research-archive.org/index.php/rars/preprint/view/2400/version/2552"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.readPaperButton}
              >
                Read Full Paper
              </a>
              <a
                href="mailto:info@amcacademy.ca?subject=OpenMath Research Contribution"
                className={styles.joinResearchButton}
              >
                Contribute to Research
              </a>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className={styles.contactSection} id="join">
          <div className={styles.contactContent}>
            <h2 className={styles.contactTitle}>Get Involved With OpenMath</h2>
            <p className={styles.contactSubtitle}>
              Join our mission to transform STEM education globally
            </p>
            
            <form className={styles.contactForm} action="https://formsubmit.co/ethan8eight@gmail.com" method="POST">
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name</label>
                <input type="text" name="name" className={styles.input} placeholder="Your Name" required />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input type="email" name="email" className={styles.input} placeholder="your@email.com" required />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>What would you like to do?</label>
                <div className={styles.toggleGroup}>
                  <input type="radio" id="volunteer" name="type" value="Join as Volunteer" defaultChecked />
                  <label htmlFor="volunteer" className={styles.toggleLabel}>Join as Volunteer</label>
                  
                  <input type="radio" id="partner" name="type" value="Partner With Us" />
                  <label htmlFor="partner" className={styles.toggleLabel}>Partner With Us</label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea name="message" className={styles.textarea} placeholder="Tell us about yourself..." rows={4} required></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2024 OpenMath. All rights reserved.</p>
          <p>Email: <a href="mailto:info@amcacademy.ca">info@amcacademy.ca</a></p>
        </div>
      </footer>
    </div>
  );
}
