"use client";

import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import SkillSection from "@/components/SkillSection";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";
import SocialSection from "@/components/SocialSection";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <div ref={homeRef} id="home-section">
        <PortfolioSection />
      </div>
      <div ref={aboutRef} id="about-section">
        <AboutSection />
      </div>
      <div ref={projectsRef} id="projects-section">
        <ProjectSection />
      </div>
      <div ref={skillsRef} id="skills-section">
        <SkillSection />
      </div>
      <div ref={contactRef} id="contact-section">
        <Footer />
      </div>
      <SocialSection />
    </div>
  );
}






