import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <a className="github-fork-ribbon right-top" href="https://twitter.com/Dev_suite" rel="noopener" data-ribbon="Follow Up On Twitter" title="Fork me on GitHub">Fork me on GitHub </a>
      <TodoList />
    </div>
  );
}

export default App;