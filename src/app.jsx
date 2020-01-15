import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Body from './components/body';
import HeadingCard from './components/heading';
// import './css/main.css';

const App = () => (
  <div>
    <HeadingCard />
    <hr />
    <div>
      <Body />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
