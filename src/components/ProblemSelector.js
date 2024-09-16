// src/components/ProblemStatement.js

import React from 'react';
import './ProblemStatement.css'; // Optional: Add CSS for styling if needed

const ProblemStatement = ({ problem }) => {
  if (!problem) {
    return <div>Select a problem to view details.</div>;
  }

  return (
    <div className="problem-statement">
      <h3>{problem.title}</h3>
      <p>{problem.algorithm}</p>
      <pre><code>{problem.code}</code></pre>
      {problem.image && (
        <figure>
          <img src={problem.image} alt="Problem Solution" />
        </figure>
      )}
    </div>
  );
};

export default ProblemStatement;