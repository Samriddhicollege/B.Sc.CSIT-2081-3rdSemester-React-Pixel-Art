import React, { useState } from 'react';
import Button from '../ui/Button';

function SavedArts({ savedArts, onLoadArt, onDeleteArt }) {
  return (
    <div className="card">
      <h2>Saved Artworks</h2>
      
      {/* Requirement 9: Conditional Rendering (Ternary + if logic mapped) */}
      {savedArts && Object.keys(savedArts).length > 0 ? (
        <div className="saved-arts-list">
          {Object.entries(savedArts).map(([id, art]) => (
            <div key={id} className="saved-art-item fade-in">
              <div className="saved-art-info">
                <span className="saved-art-name">{art.name}</span>
                <span className="saved-art-date">{new Date(art.date).toLocaleDateString()}</span>
              </div>
              <div className="saved-art-actions">
                <Button variant="primary" onClick={() => onLoadArt(art)}>Load</Button>
                <Button variant="danger" onClick={() => onDeleteArt(id)}>Delete</Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          No saved artworks found.<br/>
          Start drawing and save your first masterpiece!
        </div>
      )}
    </div>
  );
}

export default SavedArts;
