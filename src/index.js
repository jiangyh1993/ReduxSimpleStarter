import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyD0TGlqKr779XW0BfjAOLZico3abSeSiK4";

//create new component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

//take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector(".container"));
