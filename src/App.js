import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Project from './Project';
import Upload from './Upload';

function App() {
  return (
    <Routes>
      <Route path="/upload" element={<Upload />} />
      <Route path="/projects" element={<Project />} />
    </Routes>
  );
}

export default App;
