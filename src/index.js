import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyDyF039R7nTgSWPIZ1lfZIAQxrGvpJTWJc';

YTSearch({key: API_KEY, term: 'Metallica'}, data => {
  console.log(data);
  
});

/**
 * Create new component. This component should
 * produce some HTML.
 */
const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}


 /**
  * Take this component's generated HTML and
  * put it on the page (in the DOM).
  */
 ReactDOM.render(<App/>, document.querySelector('.container'));