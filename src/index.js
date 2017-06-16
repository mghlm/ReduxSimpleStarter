import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyBCxDRZbOaEUTO7Qbewh6TDfTrkZw85t-0';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// Create a new component. This component should produce som HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// Take this component's generated html and put it on the page. (In the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
