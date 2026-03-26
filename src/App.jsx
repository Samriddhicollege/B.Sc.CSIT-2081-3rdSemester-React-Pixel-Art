import React from 'react';
import Workspace from './components/pixel-art/Workspace';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="fade-in">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1>Pixel Art Maker</h1>
          <p style={{ color: 'var(--text-muted)' }}>Create and save pixel artwork directly in your browser</p>
        </div>
      </header>
      
      <main className="fade-in">
        <Workspace />
      </main>
    </div>
  );
}

export default App;
