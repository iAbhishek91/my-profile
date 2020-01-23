import React from 'react';
import linkedln from '../resources/icons/linkedln.png';
import github from '../resources/icons/github.png';
import dp from '../resources/icons/dp.png';
import bg from '../resources/icons/bg.png';
import pin from '../resources/icons/pin.png';
import call from '../resources/icons/call.png';
import mail from '../resources/icons/mail.png';
import '../css/heading.css';


export default () => (
  <div id="header-container" style={{ backgroundImage: `url(${bg})` }}>
    <div id="dp-container">
      <img id="dp" src={dp} />
    </div>
    <div>
      <table id="header-table">
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
      <h3 className="subHeading">DevOps Engineer at Lloyds Banking Group</h3>
      <p className="subHeading">
        <img className="contact-icons" src={pin} /> London, United Kingdom
      </p>
      <p className="subHeading">
        <img className="contact-icons" src={call} /> +44-7384120201 &nbsp;&nbsp;&nbsp;
        <img className="contact-icons" src={mail} />
        <a href="mailto:i.abhishek.dass@gmail.com?Subject=Hello%20Abhishek" target="_top">i.abhishek.dass@gmail.com</a>
      </p>
    </div>
  </div>
);
