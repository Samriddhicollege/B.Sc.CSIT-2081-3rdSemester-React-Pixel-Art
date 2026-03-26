import React from "react";

const COLORS = [
  "#000000", "#ffffff", "#ff3b30", "#ff9500",
  "#ffcc00", "#4cd964", "#5ac8fa", "#007aff",
  "#5856d6", "#ff2d55", "#8e8e93", "#636366",
  "#a2845e", "#ffb0aa", "#2ea043",
];

function Palette({ selectedColor, onColorSelect }) {
  return (
    <div className="card">
      <h2>Color Palette</h2>
      <div className="palette">
        {COLORS.map((color) => (
          <button
            key={color}
            className={`color-swatch ${selectedColor === color ? "active" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => onColorSelect(color)}
            aria-label={`Select ${color} color`}
          />
        ))}

        {/* Custom color picker — styled as a swatch */}
        <label
          className={`color-swatch custom-color-swatch`}
          title="Custom Color"
          style={{ position: "relative", overflow: "hidden", cursor: "pointer", backgroundColor: selectedColor }}
        >
          <span style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.9rem", pointerEvents: "none",
          }}>🎨</span>
          <input
            type="color"
            value={selectedColor}
            onChange={(e) => onColorSelect(e.target.value)}
            style={{
              opacity: 0, position: "absolute", inset: 0,
              width: "100%", height: "100%", cursor: "pointer",
            }}
          />
        </label>
      </div>
    </div>
  );
}

export default Palette;
