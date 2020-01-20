import React from 'react';


export default (props) => {
  const { strength } = props;
  const maxStrength = 10;

  const graphDotArr = [...Array(maxStrength)].map((_, i) => {
    return strength >= i + 1
    ? <span className="dot-color" key={i}></span>
    : <span className="dot-grey" key={i}></span>;
  });
  
  return <span>{graphDotArr}</span>
};
