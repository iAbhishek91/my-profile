import React from 'react';
import { LANGUAGES_ARR } from '../../resumeConstant';

export default () => (
  <ul>
    {
      LANGUAGES_ARR.map((language, i) => (
        <li key={`language-${i}`}>
          <p>
            <strong>{ language[0] }</strong>&nbsp;<i>{ language[1] }</i>
          </p>
        </li>
      ))
    }
  </ul>
);
