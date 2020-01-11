import React from 'react';
import linkedln from '../resources/icons/linkedln.png';
import '../css/heading.css';


export default () => (
  <div className="header-container">
    <h1>ABHISHEK DAS</h1>
    <a href="https://www.linkedin.com/in/abhishek-das-b2248665/">
      <img src={linkedln} alt="linkedln" height="42" width="42" />
    </a>
    <p className="lead">DevOps Engineer</p>
    <hr className="my-4" />
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
);
