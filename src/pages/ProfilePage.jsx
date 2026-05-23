import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit3, FiBookOpen, FiHeart, FiUsers, FiMessageCircle, FiSettings, FiGrid } from 'react-icons/fi';
import StoryCard from '../components/StoryCard';
import { stories, formatNumber } from '../data/stories';

function ProfilePage() {
  const [activeTab, setActiveTab] = useState('stories');

  const user = {
    name: 'Guest User',
    username: '@guestuser',
    bio: 'Avid reader and aspiring writer. I love fantasy, romance, and everything in between. Currently working on my first novel!',
    followers: 1234,
    following: 567,
    joinDate: 'January 2024',
  };

  const myStories = stories.slice(0, 3);
  const readingList = stories.slice(3, 7);

  return (
    <div className="profile-page">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar-large">
          <span>{user.name[0]}</span>
        </div>
        <div className="profile-info">
          <h1 className="profile-name">{user.name}</h1>
          <p className="profile-username">{user.username}</p>
          <p className="profile-bio">{user.bio}</p>
          <div className="profile-stats">
            <div className="profile-stat">
              <strong>{formatNumber(user.followers)}</strong>
              <span>Followers</span>
            </div>
            <div className="profile-stat">
              <strong>{formatNumber(user.following)}</strong>
              <span>Following</span>
            </div>
            <div className="profile-stat">
              <strong>{myStories.length}</strong>
              <span>Works</span>
            </div>
          </div>
          <div className="profile-actions">
            <button className="btn-primary"><FiEdit3 /> Edit Profile</button>
            <button className="btn-icon"><FiSettings /></button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="profile-tabs">
        <button
          className={`profile-tab ${activeTab === 'stories' ? 'active' : ''}`}
          onClick={() => setActiveTab('stories')}
        >
          <FiBookOpen /> My Stories
        </button>
        <button
          className={`profile-tab ${activeTab === 'reading' ? 'active' : ''}`}
          onClick={() => setActiveTab('reading')}
        >
          <FiHeart /> Reading List
        </button>
        <button
          className={`profile-tab ${activeTab === 'activity' ? 'active' : ''}`}
          onClick={() => setActiveTab('activity')}
        >
          <FiGrid /> Activity
        </button>
        <button
          className={`profile-tab ${activeTab === 'following' ? 'active' : ''}`}
          onClick={() => setActiveTab('following')}
        >
          <FiUsers /> Following
        </button>
      </div>

      {/* Tab Content */}
      <div className="profile-content">
        {activeTab === 'stories' && (
          <div>
            <div className="content-header">
              <h2>My Stories</h2>
              <Link to="/write" className="btn-secondary"><FiEdit3 /> New Story</Link>
            </div>
            {myStories.length > 0 ? (
              <div className="stories-grid">
                {myStories.map(story => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <FiBookOpen size={48} />
                <h3>No stories yet</h3>
                <p>Start writing your first story!</p>
                <Link to="/write" className="btn-primary">Create Story</Link>
              </div>
            )}
          </div>
        )}

        {activeTab === 'reading' && (
          <div>
            <h2>Reading List</h2>
            {readingList.length > 0 ? (
              <div className="stories-grid">
                {readingList.map(story => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <FiHeart size={48} />
                <h3>Your reading list is empty</h3>
                <p>Browse stories and add them to your reading list!</p>
                <Link to="/browse" className="btn-primary">Browse Stories</Link>
              </div>
            )}
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="empty-state">
            <FiMessageCircle size={48} />
            <h3>No recent activity</h3>
            <p>Your comments, votes, and interactions will appear here.</p>
          </div>
        )}

        {activeTab === 'following' && (
          <div className="empty-state">
            <FiUsers size={48} />
            <h3>Not following anyone yet</h3>
            <p>Find writers you love and follow them to see their updates.</p>
            <Link to="/browse" className="btn-primary">Discover Writers</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
