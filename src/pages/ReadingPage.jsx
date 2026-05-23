import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiStar, FiMessageCircle, FiSettings, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { getStoryById } from '../data/stories';

function ReadingPage() {
  const { storyId, chapterId } = useParams();
  const story = getStoryById(storyId);

  const [fontSize, setFontSize] = useState(18);
  const [darkMode, setDarkMode] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const chapter = story?.chapters.find(c => c.id === chapterId);
  const chapterIndex = story?.chapters.findIndex(c => c.id === chapterId) ?? -1;
  const prevChapter = chapterIndex > 0 ? story.chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < (story?.chapters.length || 0) - 1 ? story.chapters[chapterIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [chapterId]);

  if (!story || !chapter) {
    return (
      <div className="not-found">
        <h2>Chapter not found</h2>
        <Link to="/browse" className="btn-primary">Browse Stories</Link>
      </div>
    );
  }

  return (
    <div className={`reading-page ${darkMode ? 'dark' : 'light'}`}>
      {/* Reading Toolbar */}
      <div className="reading-toolbar">
        <Link to={`/story/${story.id}`} className="reading-back">
          <FiArrowLeft /> <span className="reading-story-title">{story.title}</span>
        </Link>
        <div className="reading-toolbar-actions">
          <button
            className={`toolbar-btn ${hasVoted ? 'voted' : ''}`}
            onClick={() => setHasVoted(!hasVoted)}
          >
            <FiStar />
          </button>
          <button
            className="toolbar-btn"
            onClick={() => setShowComments(!showComments)}
          >
            <FiMessageCircle />
          </button>
          <button
            className="toolbar-btn"
            onClick={() => setShowSettings(!showSettings)}
          >
            <FiSettings />
          </button>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="settings-panel">
          <div className="settings-header">
            <h3>Reading Settings</h3>
            <button onClick={() => setShowSettings(false)}><FiX /></button>
          </div>
          <div className="setting-row">
            <span>Font Size</span>
            <div className="font-controls">
              <button onClick={() => setFontSize(Math.max(14, fontSize - 2))}>A-</button>
              <span>{fontSize}px</span>
              <button onClick={() => setFontSize(Math.min(28, fontSize + 2))}>A+</button>
            </div>
          </div>
          <div className="setting-row">
            <span>Theme</span>
            <div className="theme-toggle">
              <button
                className={darkMode ? 'active' : ''}
                onClick={() => setDarkMode(true)}
              ><FiMoon /> Dark</button>
              <button
                className={!darkMode ? 'active' : ''}
                onClick={() => setDarkMode(false)}
              ><FiSun /> Light</button>
            </div>
          </div>
        </div>
      )}

      {/* Chapter Content */}
      <div className="reading-content">
        <div className="chapter-header">
          <h1 className="chapter-title">{chapter.title}</h1>
          <div className="chapter-meta">
            <span>by {story.author.name}</span>
            <span>&middot;</span>
            <span>Part {chapterIndex + 1} of {story.parts}</span>
          </div>
        </div>

        <div className="chapter-body" style={{ fontSize: `${fontSize}px` }}>
          {chapter.content.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Chapter End Actions */}
        <div className="chapter-end">
          <button
            className={`vote-chapter-btn ${hasVoted ? 'voted' : ''}`}
            onClick={() => setHasVoted(!hasVoted)}
          >
            <FiStar /> {hasVoted ? 'You voted!' : 'Vote for this chapter'}
          </button>

          <div className="chapter-navigation">
            {prevChapter ? (
              <Link
                to={`/story/${story.id}/read/${prevChapter.id}`}
                className="nav-chapter-btn prev"
              >
                <FiArrowLeft /> Previous
              </Link>
            ) : <div />}
            {nextChapter ? (
              <Link
                to={`/story/${story.id}/read/${nextChapter.id}`}
                className="nav-chapter-btn next"
              >
                Next <FiArrowRight />
              </Link>
            ) : (
              <div className="story-complete">
                <p>You&apos;ve reached the end of the available chapters!</p>
                <Link to={`/story/${story.id}`} className="btn-secondary">
                  Back to Story
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Comments Sidebar */}
      {showComments && (
        <div className="comments-sidebar">
          <div className="comments-sidebar-header">
            <h3>Comments</h3>
            <button onClick={() => setShowComments(false)}><FiX /></button>
          </div>
          <div className="comments-empty">
            <FiMessageCircle size={40} />
            <p>No comments yet</p>
            <p>Be the first to share your thoughts!</p>
          </div>
          <div className="comment-input-area">
            <textarea placeholder="Write a comment..." rows={3} />
            <button className="btn-primary">Post</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReadingPage;
