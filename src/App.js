import React from 'react';
import Intro from './Intro';
import Offer from './Offer';
import './App.css';
import InfoForm from "./InfoForm"
import SearchAppBar from "./SearchAppBar"

function App() {
  return (
    <div className="App">
    <SearchAppBar></SearchAppBar>
    <Intro></Intro> 
    {/* can drop attributes into these tags and call them with props */}
    <Offer></Offer>
    <InfoForm></InfoForm>
    </div>
  );
}

export default App;
