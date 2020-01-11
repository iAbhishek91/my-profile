import React from 'react';
import linkedln from '../resources/icons/linkedln.png';
import github from '../resources/icons/github.png';
import dp from '../resources/icons/dp.png';
import bg from '../resources/icons/bg.png';
import '../css/heading.css';


export default () => (
  <div className="header-container" style={{ backgroundImage: `url(${bg})` }}>
    <div id="dp-container">
      <img id="dp" src={dp} />
    </div>
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <h1>ABHISHEK DAS &nbsp;&nbsp;</h1>
            </td>
            <td>
              <a href="https://www.linkedin.com/in/abhishek-das-b2248665/">
                <img className="logo" src={linkedln} alt="linkedln" />
              </a>
            </td>
            <td>
              <a href="https://github.com/iAbhishek91">
                <img className="logo" src={github} alt="github" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <h3 id="position">DevOps Engineer</h3>
      <p>
        Self-motivated full stack NodeJs developer with more than eight years of experience in software development and operations. Leading and helping clients in delivering high-performance quality software. Experienced and expertise in DevOps practices and Agile methodologies.
      </p>
    </div>
  </div>
);
