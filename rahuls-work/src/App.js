// src/App.js

import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import StaticSite from './StaticSite';
import GamePage from './GamePage';
import EducationPage from './EducationPage';
import ExperiencePage from './ExperiencePage';
import ProjectsPage from './ProjectsPage';
import TechnicalSkillsPage from './TechnicalSkillsPage';
import ContactPage from './ContactPage';
import ExtrasPage from './ExtrasPage';
import Navbar from './Navbar';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  return (
    <Router>
      {!gameStarted && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage gameStarted={gameStarted} setGameStarted={setGameStarted} />} />
        <Route path="/static-site" element={<StaticSite />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/technical-skills" element={<TechnicalSkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/extras" element={<ExtrasPage />} />
      </Routes>
    </Router>
  );
}

export default App;
