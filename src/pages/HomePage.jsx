import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTrendingUp, FiClock, FiBookOpen } from 'react-icons/fi';
import StoryCard from '../components/StoryCard';
import { genres, getTrendingStories, getNewStories, getFeaturedStory, formatNumber } from '../data/stories';

function HomePage() {
  const featured = getFeaturedStory();
  const trending = getTrendingStories();
  const newest = getNewStories();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, <span className="hero-highlight">welcome to Wattpad.</span><br />
            The world&apos;s most-loved social storytelling platform
          </h1>
          <p className="hero-subtitle">
            Wattpad connects a global community of millions of readers and writers through the power of story.
          </p>
          <div className="hero-actions">
            <Link to="/browse" className="btn-primary">Start Reading</Link>
            <Link to="/write" className="btn-secondary">Start Writing</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">90M+</span>
              <span className="stat-label">Readers</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">1B+</span>
              <span className="stat-label">Story Uploads</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Languages</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-featured-card">
            <Link to={`/story/${featured.id}`} className="featured-link">
              <img src={featured.cover} alt={featured.title} className="featured-cover" />
              <div className="featured-info">
                <span className="featured-badge">Featured Story</span>
                <h2>{featured.title}</h2>
                <p>by {featured.author.name}</p>
                <span className="featured-reads">{formatNumber(featured.reads)} reads</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by Genre */}
      <section className="section genres-section">
        <div className="section-header">
          <h2><FiBookOpen /> Browse by Genre</h2>
          <Link to="/browse" className="see-all">See All <FiArrowRight /></Link>
        </div>
        <div className="genres-grid">
          {genres.map(genre => (
            <Link
              to={`/browse?genre=${genre.id}`}
              key={genre.id}
              className="genre-card"
              style={{ '--genre-color': genre.color }}
            >
              <span className="genre-icon">{genre.icon}</span>
              <span className="genre-name">{genre.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Stories */}
      <section className="section">
        <div className="section-header">
          <h2><FiTrendingUp /> Trending Now</h2>
          <Link to="/browse?sort=trending" className="see-all">See All <FiArrowRight /></Link>
        </div>
        <div className="stories-grid">
          {trending.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>

      {/* New Releases */}
      <section className="section">
        <div className="section-header">
          <h2><FiClock /> New Releases</h2>
          <Link to="/browse?sort=new" className="see-all">See All <FiArrowRight /></Link>
        </div>
        <div className="stories-grid">
          {newest.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-content">
          <h2>Start your story today</h2>
          <p>Join millions of writers sharing their stories on the world&apos;s largest storytelling platform.</p>
          <Link to="/write" className="btn-primary">Start Writing — It&apos;s Free</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
