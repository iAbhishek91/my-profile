import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Body from './components/Body';
import HeadingCard from './components/Heading';
// import './css/main.css';

const App = () => (
  <div>
    <HeadingCard />
    <Body />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
