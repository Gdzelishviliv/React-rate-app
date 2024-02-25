import React, { useState } from 'react';
import "./App.css";
import Rating from "./Components/rating/Rating";
import Submited_img from './Components/submited-picture/Submited_img';
import Thanking from './Components/thanking-text/Thanking';

function App() {
  const [submittedRating, setSubmittedRating] = useState(false);

  const handleRatingSubmit = (value) => {
    console.log('Submitted Rating:', value);
    setSubmittedRating(value);
  };

  return <div className="App">
    {!submittedRating ? (
        <Rating onSubmit={handleRatingSubmit} />
      ) : (
        <>
        <Submited_img/>
        <p className='rate-us'>You selected us {submittedRating} out of 5</p>
        <Thanking/>
        </>
      )}
  </div>;
}

export default App;
