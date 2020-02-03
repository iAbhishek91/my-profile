import React from 'react';
import '../../css/body.css';
import '../../css/body.css';
import Tools from './Tools';
import Skills from './Skills';
import Educations from './Educations';
import Languages from './Languages';
import WorkExperiences from './WorkExperiences';
import Projects from './Projects';
import Trainings from './Trainings';
import Achievements from './Achievements';

export default () => (
  <div id="body-container">
    <div className="about">
      <h2>About</h2>
      <p id="about-text">
        Self-motivated computer engineer with more than eight years of experience in software development and operations. Leading and helping clients in delivering high performance, high quality software. Experienced and expertise in DevOps practices and Agile methodologies.
      </p>
    </div>
    <div className="body-left">
      <div id="skills" className="resume-section">
        <h2>Skills</h2>
        <Skills />
      </div>
      <div id="tools" className="resume-section">
        <h2>Tools</h2>
        <Tools />
      </div>
      <div id="language" className="resume-section">
        <h2>Languages</h2>
        <Languages />
      </div>
    </div>
    <div className="body-right">
      <div id="workExperiences" className="resume-section">
        <h2>Work Experience</h2>
        <WorkExperiences />
      </div>
      <div id="projects" className="resume-section">
        <h2>Projects</h2>
        <Projects />
      </div>
      <div id="educations" className="resume-section">
        <h2>Education</h2>
        <Educations />
      </div>
      <div id="trainingCertifications" className="resume-section">
        <h2>Trainings and certifications</h2>
        <Trainings />
      </div>
      <div id="achievements">
        <h2>Achievements</h2>
        <Achievements />
      </div>
    </div>
  </div>
);
