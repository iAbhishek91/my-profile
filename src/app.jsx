import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro';
import HeadingCard from './components/heading';
import './css/bootstrap.min.css';

const App = () => (
  <Fragment>
    <HeadingCard />
    <div className="container-fluid">
      <Intro />
    </div>
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
