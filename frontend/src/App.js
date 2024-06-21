import React from 'react';
import './App.css';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Management Application</h1>
      </header>
      <TaskList />
    </div>
  );
};

export default App;
