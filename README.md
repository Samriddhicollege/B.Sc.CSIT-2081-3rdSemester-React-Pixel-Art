## Project Title

> _Anime Pixel Art Maker — A Creative Drawing Platform with React_

---

## Student Information

- **Name:** Leejaw Chitrakar
- **Roll Number:** 14
- **Course / Program:** B.Sc.CSIT 2081
- **Semester / Year:** 3rd Semester / 2026

---

## Instructor Information

- **Instructor Name:** Mr. Dipak Shrestha
- **Course Title:** React Development
- **College Name:** Samriddhi College

---

## Project Overview

> This project is a web-based Anime Pixel Art Maker developed using React for the frontend and Vite as the build tool.
> It allows users to create digital pixel art on a flexible grid, pick from a curated color palette, and manage their creations.
> Drawing is made easy with drag-to-paint functionality and real-time canvas updates.
> The system includes artwork management, allowing users to name, save, reload, and delete their pieces.
> Every artwork is stored locally so it stays safe in the browser between sessions, providing a seamless creative experience.

---

## Objectives

- Build a responsive React application using functional components.
- Implement custom state management logic for interactive grid drawing.
- Securely store and persistent user data using the LocalStorage API.
- Apply clean UI/UX design principles with a "kawaii" anime-inspired aesthetic.

---

## Technologies Used

### Frontend

- React.js (v19+)
- JavaScript (ES6+)
- HTML5 & CSS3
- Custom Hooks (useLocalStorage)

### Tools & Build Systems

- Vite
- NPM
- ESLint

---

## Key Features

- **Component-Based Architecture:** Organized React components (Workspace, Grid, Palette, SavedArts, Button).
- **State Management:** Complex grid state handling using `useState` and `useEffect`.
- **Drag-to-Draw:** Continuous mouse tracking for an intuitive painting experience.
- **Persistent Storage:** Custom LocalStorage hook for zero-loss creativity.
- **Dynamic Title Updates:** Using `useEffect` to sync the browser tab with artwork names.

---

## Screens / Modules

- **Main Workspace:** The primary drawing canvas area.
- **Color Palette:** Curated selection and custom color picker.
- **Saved Arts Library:** Manage (load/delete) previous artworks.
- **Instruction Panel:** Interactive help for new users.

---

## Installation & Setup

```bash
# Clone repository
git clone [Your Repository URL]

# Go to project folder
cd PixelArt

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## Project Structure

```
/PixelArt
│── src/
│   ├── components/
│   │   ├── pixel-art/
│   │   │   ├── Workspace.jsx    ← Main Logic
│   │   │   ├── Grid.jsx         ← Canvas Grid
│   │   │   ├── Palette.jsx      ← Color Selection
│   │   │   └── SavedArts.jsx    ← Gallery Management
│   │   └── ui/
│   │       └── Button.jsx       ← Reusable Components
│   ├── hooks/
│   │   └── useLocalStorage.js   ← Persistence logic
│   ├── assets/
│   ├── App.jsx                  ← Main Layout
│   └── main.jsx                 ← Entry Point
│── public/
│── package.json
│── README.md
```

---

## GitHub & Live Demo

- **GitHub Repository:** https://github.com/Samriddhicollege/B.Sc.CSIT-2081-3rdSemester-React-Pixel-Art
- **Live URL (if deployed):** lc-pixel-art.web.app

---

## Testing

- Tested UI responsiveness on different screen sizes (mobile, tablet, desktop).
- Verified state persistence using browser developer tools (Application -> LocalStorage).
- Checks for edge cases: naming validations, clear canvas confirmations, and empty states.

---

## Challenges Faced

- **State Immutability:** Managing a large grid array efficiently while ensuring React re-renders correctly.
- **Mouse Event Handling:** Coordinating `onMouseDown`, `onMouseEnter`, and `onMouseUp` for a smooth drag-to-paint experience.
- **Storage Synchronization:** Ensuring changes to the artwork list are immediately reflected in the sidebar.

---

## Future Enhancements

- Add image export functionality (Download as PNG/JPG).
- Implement Undo / Redo history management.
- Add different grid sizes (8x8, 32x32) as selectable presets.
- Integrate user accounts for cloud-based gallery backup.

---

## Acknowledgement

> I would like to thank my instructor **Mr. Dipak Shrestha** for the guidance and valuable support throughout this React project.

---

## Declaration

> I hereby declare that this project is my original work and has been completed as part of my academic submission for the 3rd Semester.
