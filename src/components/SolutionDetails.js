import React from 'react';
import './SolutionDetails.css';

const SolutionDetails = ({ problem , onBack }) => (
  <div id="solution-details" className={Object.keys(problem).length ? '' : 'solution-details'}>
     <header>
  <span style={{ float: 'right', fontSize: '30px', color: 'black' ,cursor: 'pointer'}}onClick={onBack} >
    <pre>Back</pre>
  </span>
  <span style={{ float: 'left', fontSize: '30px', color: 'black' }}>
    <pre>SIMPLELEET 
      <small> by Tanvee Kariya</small>♥️
    </pre>
  </span>
</header>
    <h1 id="problem-title" style={{ fontWeight: 'bold', fontSize: '24px' }}>{problem.title}</h1>
    <h3 id="problem-statement">Problem Statement:</h3>
    <p id="problem-statement-description">{problem.problem}</p>
    <pre><code id="problem-code">{problem.code}</code></pre>
    <h3 id="problem-algorithm">Algorithm:</h3>
    <p id="problem-algorithm-description">{problem.algorithm}</p>
    <h3 id="problem-time-complexity">Time Complexity:</h3>
    <p id="problem-time-complexity-description">{problem.timeComplexity}</p>
    <h3 id="problem-conclusion">Conclusion:</h3>
    <p id="problem-conclusion-description">{problem.conclusion}</p>
    <p id="instagram-link" style={{ color: 'black', fontSize: '16px', fontWeight: 'bolder' }}>
      Check detailed solution of the question on  <a href={problem.instagram} target="_blank" rel="noopener noreferrer">
        Instagram  
        <i className="fab fa-instagram" style={{ fontSize: '16px', marginLeft: '5px' }}></i>
      </a>
    </p>
  </div>
);

export default SolutionDetails;