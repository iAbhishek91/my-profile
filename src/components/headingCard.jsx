import React from 'react';
import linkedln from '../resources/icons/linkedln.png';

export default () => (
  <div className="card" style={{width: "auto"}}>
    <div className="card-header">
      <h1>ABHISHEK DAS</h1>
    </div>
    <div className="card-body">
      <h6 className="card-subtitle mb-2 text-muted">DevOps Engineer | Full stack NodeJS developer</h6>
      <h3 className="card-text text-secondary">Lead Test Engineer at Lloyds Banking Group</h3>
      <h4 className="card-text text-secondary">London, United Kingdom</h4>
      <a href="https://www.linkedin.com/in/abhishek-das-b2248665/"><img src={linkedln} alt="linkedln" /></a>
    </div>
  </div>
);
