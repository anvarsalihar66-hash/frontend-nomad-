import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';
import StoryPage from './pages/StoryPage';
import ReadingPage from './pages/ReadingPage';
import WritePage from './pages/WritePage';
import ProfilePage from './pages/ProfilePage';
import CommunityPage from './pages/CommunityPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/story/:storyId/read/:chapterId"
          element={<ReadingPage />}
        />
        <Route
          path="*"
          element={
            <div className="app-wrapper">
              <Navbar />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/browse" element={<BrowsePage />} />
                  <Route path="/story/:id" element={<StoryPage />} />
                  <Route path="/write" element={<WritePage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/profile/:id" element={<ProfilePage />} />
                  <Route path="/community" element={<CommunityPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
