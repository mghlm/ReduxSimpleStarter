import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce som HTML.
const App = () => {
  return <div>hi</div>;
}


// Take this component's generated html and put it on the page. (In the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
