import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro';
import HeadingCard from './components/headingCard';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="container-fluid">
    <HeadingCard />
    <Intro />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
