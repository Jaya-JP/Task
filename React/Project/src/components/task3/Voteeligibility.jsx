import React, { useState } from 'react';

const VoteEligibility = () => {
  const [age, setAge] = useState(0);

  const AgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <h2>Vote Eligibile Test</h2>
      <label>Enter your age </label>
        <input type="number" value={age} onChange={AgeChange} />
      {age >= 18 ? (<p>You are eligible to vote </p>) : 
      (<p>Your under 18 not eligible for vote</p>
      )}
    </div>
  );
};

export default VoteEligibility;
