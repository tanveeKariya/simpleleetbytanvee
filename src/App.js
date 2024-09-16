import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import SolutionDetails from './components/SolutionDetails';
import data from './data';
import './App.css';

function App() {
  const [difficulty, setDifficulty] = useState('');
  const [dataStructure, setDataStructure] = useState('');
  const [problemNumber, setProblemNumber] = useState('');

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
    setDataStructure('');
    setProblemNumber('');
  };

  const handleDataStructureChange = (event) => {
    setDataStructure(event.target.value);
    setProblemNumber('');
  };

  const handleProblemNumberChange = (event) => {
    setProblemNumber(event.target.value);
  };
  const handleBack = () => {
    setDifficulty('');
    setDataStructure('');
    setProblemNumber('');
  };

  let problems = {};
  if (difficulty === 'easy' && data.easy) {
    problems = data.easy[dataStructure] || {};
  } else if (difficulty === 'medium' && data.medium) {
    problems = data.medium[dataStructure] || {};
  } else if (difficulty === 'hard' && data.hard) {
    problems = data.hard[dataStructure] || {};
  }

  const problemDetails = problems[problemNumber] || {};

  return (
    <main className="container">
      <div className="grid">
        <header>
          <span style={{ float: 'left', fontSize: '30px', color: 'black' }}>
            <pre>SIMPLELEET 
              <small> by Tanvee Kariya</small>♥️
            </pre>
          </span>
        </header>
        {problemNumber && problemNumber !== '' ? (
          <div className="full-screen-solution">
            <SolutionDetails problem={problemDetails} onBack={handleBack} />
          </div>
        ) : (
          <section>
            <hgroup>
              <h2>LeetCode Problem Solutions</h2>
              <h3>Select Difficulty, Data Structure, and Problem Number</h3>
            </hgroup>

            <Dropdown
              label="Choose difficulty level:"
              options={['', 'easy', 'medium', 'hard']}
              value={difficulty}
              onChange={handleDifficultyChange}
            />

            {difficulty && difficulty !== '' && (
              <>
                <Dropdown
                  label="Choose a data structure:"
                  options={['', 
                    'Array', 
                    'Linked List',
                    'String', 
                    'Stack', 
                    'Queue', 
                    'Hash Table / Hash Map', 
                    'Heap / Priority Queue', 
                    'Binary Tree', 
                    'Binary Search Tree (BST)', 
                    'Graph', 
                    'Tree', 
                    'Union-Find (Disjoint Set)', 
                    'Segment Tree', 
                    'Fenwick Tree (Binary Indexed Tree)', 
                    'Deque']}
                  value={dataStructure}
                  onChange={handleDataStructureChange}
                />
                {dataStructure && dataStructure !== '' && (
                  <Dropdown
                    label="Choose a problem number:"
                    options={['', ...Object.keys(problems)]}
                    value={problemNumber}
                    onChange={handleProblemNumberChange}
                  />
                )}
              </>
            )}
          </section>
        )}
      </div>
    </main>
  );
}

export default App;