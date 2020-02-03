import React from 'react';
import linkedln from '../resources/icons/linkedln.png';
import github from '../resources/icons/github.png';
import dp from '../resources/icons/dp.png';
import bg from '../resources/icons/bg.png';
import pin from '../resources/icons/pin.png';
import call from '../resources/icons/call.png';
import mail from '../resources/icons/mail.png';
import '../css/heading.css';
import {
  FULL_NAME,
  ROLE,
  ADDRESS,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  EMAIL_ADDRESS_HREF,
  LINKEDIN_URL,
  GITHUB_URL,
} from '../resumeConstant';


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
              <h1>{ FULL_NAME } &nbsp;&nbsp;</h1>
            </td>
            <td>
              <a href={ LINKEDIN_URL }>
                <img className="logo" src={linkedln} alt="linkedln" />
              </a>
            </td>
            <td>
              <a href={ GITHUB_URL}>
                <img className="logo" src={github} alt="github" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <h3 className="subHeading">{ ROLE }</h3>
      <p className="subHeading">
        <img className="contact-icons" src={pin} /> { ADDRESS }
      </p>
      <p className="subHeading">
        <img className="contact-icons" src={call} /> { PHONE_NUMBER } &nbsp;&nbsp;&nbsp;
        <img className="contact-icons" src={mail} />
        <a href={EMAIL_ADDRESS_HREF} target="_top">{ EMAIL_ADDRESS }</a>
      </p>
    </div>
  </div>
);
