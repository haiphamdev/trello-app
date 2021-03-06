import AppBar from 'components/AppBar/AppBar';
import BoardBar from 'components/BoardBar/BoardBar';
import BoardContent from 'components/BoardContent/BoardContent';
import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="trello-app">
      <AppBar />
      <BoardBar />
      <BoardContent />
    </div>
  );
}

export default App;
