import React, { useState, useEffect } from "react";
import Grid from "./Grid";
import Palette from "./Palette";
import SavedArts from "./SavedArts";
import Button from "../ui/Button";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const DEFAULT_COLS = 16;
const DEFAULT_ROWS = 16;

function Workspace() {
  // Requirement 2: State Management (dynamic data)
  const [columns, setColumns] = useState(DEFAULT_COLS);
  const [rows, setRows] = useState(DEFAULT_ROWS);
  const [grid, setGrid] = useState(Array(DEFAULT_COLS * DEFAULT_ROWS).fill(""));
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [isDrawing, setIsDrawing] = useState(false);
  const [artName, setArtName] = useState("");

  // Custom hook usage (Requirement 15 Bonus) + LocalStorage (Requirement 6)
  const [savedArts, setSavedArts] = useLocalStorage("pixel-saved-arts", {});

  // Side Effect for updating title (Requirement 7)
  useEffect(() => {
    document.title = artName ? `Pixel Art - ${artName}` : "Pixel Art Maker";
  }, [artName]);

  // Requirement 3: Event Handlers
  const handlePixelClick = (index) => {
    const newGrid = [...grid];
    newGrid[index] = selectedColor;
    setGrid(newGrid);
  };

  const handlePixelEnter = (e, index) => {
    if (e.buttons === 1 || isDrawing) {
      handlePixelClick(index);
    }
  };

  const clearGrid = () => {
    if (window.confirm("Are you sure you want to clear the canvas?")) {
      setGrid(Array(columns * rows).fill(""));
      setArtName("");
    }
  };

  // Requirement 11: CRUD - Create/Update
  const saveArt = () => {
    // Requirement 10: Basic Validation
    if (!artName.trim()) {
      alert("Please enter a name for your artwork.");
      return;
    }

    const newArt = {
      name: artName.trim(),
      grid,
      columns,
      rows,
      date: new Date().toISOString(),
    };

    const updatedArts = { ...savedArts, [newArt.name]: newArt };
    setSavedArts(updatedArts);
    alert("Artwork saved securely!");
  };

  // Requirement 11: CRUD - Read (Load)
  const loadArt = (art) => {
    setColumns(art.columns);
    setRows(art.rows);
    setGrid(art.grid);
    setArtName(art.name);
  };

  // Requirement 11: CRUD - Delete
  const deleteArt = (id) => {
    if (window.confirm("Delete this artwork permanently?")) {
      const updatedArts = { ...savedArts };
      delete updatedArts[id];
      setSavedArts(updatedArts);
    }
  };

  return (
    <div
      className="workspace"
      onMouseDown={() => setIsDrawing(true)}
      onMouseUp={() => setIsDrawing(false)}
      onMouseLeave={() => setIsDrawing(false)}
    >
      {/* Column 1: Canvas */}
      <div className="card canvas-card">
        <div className="canvas-header">
          <h2>Canvas</h2>
          <div className="control-row">
            <input
              type="text"
              value={artName}
              onChange={(e) => setArtName(e.target.value)}
              placeholder="Artwork name..."
              maxLength="32"
            />
            <Button variant="primary" onClick={saveArt}>
              💾 Save Art
            </Button>
            <Button onClick={clearGrid} className="danger">
              🗑️ Clear
            </Button>
          </div>
        </div>

        <div className="grid-container">
          <Grid
            grid={grid}
            columns={columns}
            onPixelClick={handlePixelClick}
            onPixelEnter={handlePixelEnter}
          />
        </div>
      </div>

      {/* Column 2: Color Palette */}
      <div className="palette-column">
        <Palette
          selectedColor={selectedColor}
          onColorSelect={setSelectedColor}
        />
      </div>

      {/* Column 3: Sidebar */}
      <div className="sidebar">
        <SavedArts
          savedArts={savedArts}
          onLoadArt={loadArt}
          onDeleteArt={deleteArt}
        />

        <div className="card">
          <h2>Instructions</h2>
          <ul className="instructions-list">
            <li>🎨 Select a color from the palette</li>
            <li>🖱️ Click or drag on the canvas to draw</li>
            <li>✏️ Use the 🎨 swatch for custom colors</li>
            <li>🏷️ Name your artwork before saving</li>
            <li>💾 All saved arts stay in your browser!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
