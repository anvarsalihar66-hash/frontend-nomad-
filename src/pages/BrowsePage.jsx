import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiGrid, FiList, FiFilter } from 'react-icons/fi';
import StoryCard from '../components/StoryCard';
import { stories, genres, searchStories } from '../data/stories';

function BrowsePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const genreParam = searchParams.get('genre') || '';
  const sortParam = searchParams.get('sort') || 'trending';

  const [viewMode, setViewMode] = useState('grid');
  const [statusFilter, setStatusFilter] = useState('all');
  const [localSearch, setLocalSearch] = useState(queryParam);

  const filteredStories = useMemo(() => {
    let result = stories;

    if (queryParam) {
      result = searchStories(queryParam);
    }

    if (genreParam) {
      result = result.filter(s => s.genre === genreParam);
    }

    if (statusFilter !== 'all') {
      result = result.filter(s => s.status.toLowerCase() === statusFilter);
    }

    if (sortParam === 'trending') {
      result = [...result].sort((a, b) => b.reads - a.reads);
    } else if (sortParam === 'new') {
      result = [...result].sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));
    } else if (sortParam === 'popular') {
      result = [...result].sort((a, b) => b.votes - a.votes);
    }

    return result;
  }, [queryParam, genreParam, sortParam, statusFilter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (localSearch.trim()) {
      params.set('q', localSearch.trim());
    } else {
      params.delete('q');
    }
    setSearchParams(params);
  };

  const handleGenreClick = (genreId) => {
    const params = new URLSearchParams(searchParams);
    if (genreParam === genreId) {
      params.delete('genre');
    } else {
      params.set('genre', genreId);
    }
    setSearchParams(params);
  };

  const handleSortChange = (sort) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', sort);
    setSearchParams(params);
  };

  return (
    <div className="browse-page">
      <div className="browse-header">
        <h1>Browse Stories</h1>
        <p className="browse-subtitle">
          {queryParam
            ? `Search results for "${queryParam}"`
            : genreParam
              ? `Stories in ${genres.find(g => g.id === genreParam)?.name || genreParam}`
              : 'Discover your next favorite story'}
        </p>
      </div>

      {/* Search */}
      <form className="browse-search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search by title, author, or tag..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="browse-search-input"
        />
        <button type="submit" className="browse-search-btn">Search</button>
      </form>

      {/* Genre Pills */}
      <div className="genre-pills">
        {genres.map(genre => (
          <button
            key={genre.id}
            className={`genre-pill ${genreParam === genre.id ? 'active' : ''}`}
            onClick={() => handleGenreClick(genre.id)}
          >
            {genre.icon} {genre.name}
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="browse-toolbar">
        <div className="toolbar-left">
          <span className="result-count">{filteredStories.length} stories</span>
          <div className="sort-buttons">
            <button
              className={`sort-btn ${sortParam === 'trending' ? 'active' : ''}`}
              onClick={() => handleSortChange('trending')}
            >Trending</button>
            <button
              className={`sort-btn ${sortParam === 'new' ? 'active' : ''}`}
              onClick={() => handleSortChange('new')}
            >New</button>
            <button
              className={`sort-btn ${sortParam === 'popular' ? 'active' : ''}`}
              onClick={() => handleSortChange('popular')}
            >Popular</button>
          </div>
        </div>
        <div className="toolbar-right">
          <div className="status-filter">
            <FiFilter />
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="ongoing">Ongoing</option>
            </select>
          </div>
          <div className="view-toggle">
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            ><FiGrid /></button>
            <button
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            ><FiList /></button>
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredStories.length === 0 ? (
        <div className="no-results">
          <h3>No stories found</h3>
          <p>Try adjusting your search or filters.</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="stories-grid">
          {filteredStories.map(story => (
            <StoryCard key={story.id} story={story} variant="grid" />
          ))}
        </div>
      ) : (
        <div className="stories-list">
          {filteredStories.map(story => (
            <StoryCard key={story.id} story={story} variant="list" />
          ))}
        </div>
      )}
    </div>
  );
}

export default BrowsePage;
