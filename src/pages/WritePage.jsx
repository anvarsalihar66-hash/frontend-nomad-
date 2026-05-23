import React, { useState } from 'react';
import { FiSave, FiImage, FiTag, FiBookOpen, FiAlignLeft, FiBold, FiItalic, FiUnderline } from 'react-icons/fi';
import { genres } from '../data/stories';

function WritePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [chapterTitle, setChapterTitle] = useState('');
  const [chapterContent, setChapterContent] = useState('');
  const [tags, setTags] = useState('');
  const [activeTab, setActiveTab] = useState('details');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const wordCount = chapterContent.trim()
    ? chapterContent.trim().split(/\s+/).length
    : 0;

  return (
    <div className="write-page">
      <div className="write-header">
        <h1><FiBookOpen /> Create a New Story</h1>
        <div className="write-actions">
          <button className="btn-secondary" onClick={handleSave}>
            <FiSave /> {saved ? 'Saved!' : 'Save Draft'}
          </button>
          <button className="btn-primary">Publish</button>
        </div>
      </div>

      <div className="write-tabs">
        <button
          className={`write-tab ${activeTab === 'details' ? 'active' : ''}`}
          onClick={() => setActiveTab('details')}
        >
          Story Details
        </button>
        <button
          className={`write-tab ${activeTab === 'write' ? 'active' : ''}`}
          onClick={() => setActiveTab('write')}
        >
          Write Chapter
        </button>
      </div>

      {activeTab === 'details' ? (
        <div className="write-details">
          <div className="write-form-grid">
            <div className="write-cover-upload">
              <div className="cover-placeholder">
                <FiImage size={40} />
                <span>Upload Cover</span>
                <span className="cover-hint">Recommended: 256x400px</span>
              </div>
            </div>

            <div className="write-form-fields">
              <div className="form-group">
                <label>Story Title</label>
                <input
                  type="text"
                  placeholder="Enter your story title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  placeholder="What's your story about? Write a compelling description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  className="form-textarea"
                />
              </div>

              <div className="form-group">
                <label>Genre</label>
                <div className="genre-select-grid">
                  {genres.map(genre => (
                    <button
                      key={genre.id}
                      className={`genre-select-btn ${selectedGenre === genre.id ? 'selected' : ''}`}
                      onClick={() => setSelectedGenre(genre.id)}
                      style={selectedGenre === genre.id ? { borderColor: genre.color, color: genre.color } : {}}
                    >
                      {genre.icon} {genre.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label><FiTag /> Tags</label>
                <input
                  type="text"
                  placeholder="Enter tags separated by commas (e.g., romance, drama, college)"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>
          </div>

          <div className="write-next-step">
            <button className="btn-primary btn-lg" onClick={() => setActiveTab('write')}>
              Continue to Writing <FiAlignLeft />
            </button>
          </div>
        </div>
      ) : (
        <div className="write-editor">
          <div className="form-group">
            <label>Chapter Title</label>
            <input
              type="text"
              placeholder="e.g., Chapter 1: The Beginning"
              value={chapterTitle}
              onChange={(e) => setChapterTitle(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="editor-toolbar">
            <button className="editor-btn"><FiBold /></button>
            <button className="editor-btn"><FiItalic /></button>
            <button className="editor-btn"><FiUnderline /></button>
            <div className="toolbar-divider" />
            <span className="word-count">{wordCount} words</span>
          </div>

          <textarea
            className="chapter-editor"
            placeholder="Start writing your chapter here..."
            value={chapterContent}
            onChange={(e) => setChapterContent(e.target.value)}
            rows={20}
          />

          <div className="editor-footer">
            <button className="btn-secondary" onClick={handleSave}>
              <FiSave /> Save Draft
            </button>
            <button className="btn-primary">Publish Chapter</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WritePage;
