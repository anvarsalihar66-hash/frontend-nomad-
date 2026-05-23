import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiEye, FiStar, FiList, FiShare2, FiBookmark, FiMessageCircle, FiChevronRight } from 'react-icons/fi';
import { getStoryById, formatNumber, genres, stories } from '../data/stories';
import StoryCard from '../components/StoryCard';

function StoryPage() {
  const { id } = useParams();
  const story = getStoryById(id);
  const [isInLibrary, setIsInLibrary] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  if (!story) {
    return (
      <div className="not-found">
        <h2>Story not found</h2>
        <Link to="/browse" className="btn-primary">Browse Stories</Link>
      </div>
    );
  }

  const genre = genres.find(g => g.id === story.genre);
  const relatedStories = stories
    .filter(s => s.genre === story.genre && s.id !== story.id)
    .slice(0, 4);

  return (
    <div className="story-page">
      {/* Story Header */}
      <div className="story-header">
        <div className="story-cover-large">
          <img src={story.cover} alt={story.title} />
        </div>
        <div className="story-details">
          <div className="story-genre-tag" style={{ '--genre-color': genre?.color || '#FF6122' }}>
            {genre?.icon} {genre?.name}
          </div>
          <h1 className="story-title">{story.title}</h1>
          <Link to={`/profile/${story.author.id}`} className="story-author-link">
            <div className="author-avatar-sm">{story.author.name[0]}</div>
            <div>
              <span className="author-name">{story.author.name}</span>
              <span className="author-username">{story.author.username}</span>
            </div>
          </Link>

          <div className="story-stats-row">
            <div className="stat">
              <FiEye />
              <span>{formatNumber(story.reads)}</span>
              <label>Reads</label>
            </div>
            <div className="stat">
              <FiStar />
              <span>{formatNumber(story.votes)}</span>
              <label>Votes</label>
            </div>
            <div className="stat">
              <FiList />
              <span>{story.parts}</span>
              <label>Parts</label>
            </div>
          </div>

          <div className="story-actions">
            <Link to={`/story/${story.id}/read/c1`} className="btn-primary btn-lg">
              Start Reading
            </Link>
            <button
              className={`btn-vote ${hasVoted ? 'voted' : ''}`}
              onClick={() => setHasVoted(!hasVoted)}
            >
              <FiStar /> {hasVoted ? 'Voted' : 'Vote'}
            </button>
            <button
              className={`btn-icon ${isInLibrary ? 'active' : ''}`}
              onClick={() => setIsInLibrary(!isInLibrary)}
              title={isInLibrary ? 'Remove from Library' : 'Add to Library'}
            >
              <FiBookmark />
            </button>
            <button className="btn-icon" title="Share">
              <FiShare2 />
            </button>
          </div>

          <div className={`status-indicator ${story.status.toLowerCase()}`}>
            {story.status} &middot; {story.language}
            {story.mature && <span className="mature-badge">Mature</span>}
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="story-section">
        <h2>Description</h2>
        <p className="story-description">{story.description}</p>
        <div className="story-tags">
          {story.tags.map(tag => (
            <Link key={tag} to={`/browse?q=${tag}`} className="tag-pill">#{tag}</Link>
          ))}
        </div>
      </section>

      {/* Table of Contents */}
      <section className="story-section">
        <h2>Table of Contents</h2>
        <div className="chapters-list">
          {story.chapters.map((chapter, index) => (
            <Link
              key={chapter.id}
              to={`/story/${story.id}/read/${chapter.id}`}
              className="chapter-item"
            >
              <span className="chapter-number">{index + 1}</span>
              <span className="chapter-title">{chapter.title}</span>
              <FiChevronRight className="chapter-arrow" />
            </Link>
          ))}
          {story.parts > story.chapters.length && (
            <div className="more-chapters">
              + {story.parts - story.chapters.length} more chapters
            </div>
          )}
        </div>
      </section>

      {/* Comments Preview */}
      <section className="story-section">
        <h2><FiMessageCircle /> Comments</h2>
        <div className="comments-placeholder">
          <p>Join the conversation! Comments will appear here.</p>
          <button className="btn-secondary">Leave a Comment</button>
        </div>
      </section>

      {/* Related Stories */}
      {relatedStories.length > 0 && (
        <section className="story-section">
          <h2>You Might Also Like</h2>
          <div className="stories-grid">
            {relatedStories.map(s => (
              <StoryCard key={s.id} story={s} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default StoryPage;
