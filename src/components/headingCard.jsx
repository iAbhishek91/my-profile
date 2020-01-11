import React from 'react';
import linkdlnLogo from '../../resources/icons/linkedln.svg';

export default () => (
  <div className="card">
    <div className="card-body">
      <h1 className="card-title text-info">ABHISHEK DAS</h1>
      <h3 className="card-text text-secondary">Lead Test Engineer at Lloyds Banking Group</h3>
      <h4 className="card-text text-secondary">London, United Kingdom</h4>
      <svg className="float-right" viewBox="0 0 100 100">
        <a href="https://www.linkedin.com/in/abhishek-das-b2248665/">{linkdlnLogo}</a>
      </svg>
    </div>
  </div>
);
