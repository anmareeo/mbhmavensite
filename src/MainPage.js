import React from 'react';
import Intro from './Intro';
import Offer from './Offer';
import InfoForm from "./InfoForm"


function MainPage() {
  return (
    <div>
    
    <Intro></Intro> 
    {/* can drop attributes into these tags and call them with props */}
    <Offer></Offer>
    <InfoForm></InfoForm>
    </div>
  );
}

export default MainPage;
