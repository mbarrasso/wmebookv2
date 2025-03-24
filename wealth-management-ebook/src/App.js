import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import EbookLibrary from './components/EbookLibrary';
import EbookViewerContainer from './components/EbookViewerContainer';
import EbookEditor from './components/EbookEditor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EbookLibrary />} />
          <Route path="/ebook/:ebookId" element={<EbookViewerContainer />} />
          <Route path="/admin/new-ebook" element={<EbookEditor />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
