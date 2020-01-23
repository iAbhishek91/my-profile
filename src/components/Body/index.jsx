import React from 'react';
import '../../css/body.css';
import tools from '../../resources/icons/tools.png'
import '../../css/body.css';
import Tools from './Tools';
import Educations from './Educations';

export default () => (
  <div id="body-container">
    <div className="about">
      <h3>About</h3>
      <p id="about-text">
        Self-motivated full stack NodeJs developer with more than eight years of experience in software development and operations. Leading and helping clients in delivering high-performance quality software. Experienced and expertise in DevOps practices and Agile methodologies.
      </p>
    </div>
    <div className="body-left">
      <img className="tools-icon" src={tools} alt="tools"/><br />
      <Tools />
      <hr />
      <h4>Languages</h4><br /><br />
      <hr />
    </div>
    <div className="body-right">
      <h3>Work Experience</h3>
      <hr />
      <h3>Education</h3>
      <Educations />
      <hr />
      <h3>Projects</h3>
      <hr />
      <h3>Trainings and certifications</h3>
      <hr />
      <h3>Achievements</h3>
    </div>
  </div>
);
