import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro';
// import 'bootstrap';

const App = () => (
  <div className="jumbotron text-center">
    <h1>Abhishek welcomes you</h1>
    <Intro />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
