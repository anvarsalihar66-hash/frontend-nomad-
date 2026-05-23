import React from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiStar, FiList } from 'react-icons/fi';
import { formatNumber } from '../data/stories';

function StoryCard({ story, variant = 'grid' }) {
  if (variant === 'list') {
    return (
      <Link to={`/story/${story.id}`} className="story-card-list">
        <div className="story-card-list-cover">
          <img src={story.cover} alt={story.title} loading="lazy" />
        </div>
        <div className="story-card-list-info">
          <h3 className="story-card-list-title">{story.title}</h3>
          <p className="story-card-list-author">by {story.author.name}</p>
          <p className="story-card-list-desc">{story.description}</p>
          <div className="story-card-list-meta">
            <span className="meta-item"><FiEye /> {formatNumber(story.reads)}</span>
            <span className="meta-item"><FiStar /> {formatNumber(story.votes)}</span>
            <span className="meta-item"><FiList /> {story.parts}</span>
            <span className={`status-badge ${story.status.toLowerCase()}`}>{story.status}</span>
          </div>
          <div className="story-card-list-tags">
            {story.tags.slice(0, 3).map(tag => (
              <span key={tag} className="tag-pill">#{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/story/${story.id}`} className="story-card">
      <div className="story-card-cover">
        <img src={story.cover} alt={story.title} loading="lazy" />
        <div className="story-card-overlay">
          <span className="overlay-reads"><FiEye /> {formatNumber(story.reads)}</span>
        </div>
        {story.status === 'Ongoing' && (
          <span className="ongoing-badge">Ongoing</span>
        )}
      </div>
      <div className="story-card-info">
        <h3 className="story-card-title">{story.title}</h3>
        <p className="story-card-author">by {story.author.name}</p>
        <div className="story-card-stats">
          <span><FiEye /> {formatNumber(story.reads)}</span>
          <span><FiStar /> {formatNumber(story.votes)}</span>
          <span><FiList /> {story.parts}</span>
        </div>
      </div>
    </Link>
  );
}

export default StoryCard;
