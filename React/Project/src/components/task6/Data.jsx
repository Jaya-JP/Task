import React, { useState, useEffect } from 'react';

const Data = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialization: Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Update: Change document title based on fetched data
    if (data) {
      document.title = `Post: ${data.title}`;
    }

    // Cleanup: Reset document title when component unmounts or data changes
    return () => {
      document.title = 'React App';
    };
  }, [data]);

  return (
    <div>
      <h2>Fetch Data with Effect</h2>
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default Data;
