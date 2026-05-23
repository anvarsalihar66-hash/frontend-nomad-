import React from 'react';
import { Link } from 'react-router-dom';
import { FiAward, FiUsers, FiMessageCircle, FiTrendingUp, FiBookOpen, FiEdit3 } from 'react-icons/fi';
import { formatNumber } from '../data/stories';

function CommunityPage() {
  const topWriters = [
    { name: 'Aria Moon', username: '@ariamoon', stories: 23, followers: 567000 },
    { name: 'Luna Nightshade', username: '@lunanightshade', stories: 19, followers: 428000 },
    { name: 'Jack Thornfield', username: '@jackthorn', stories: 15, followers: 312000 },
    { name: 'Elena Starweaver', username: '@elenastarweaver', stories: 12, followers: 245000 },
    { name: 'Marcus Knight', username: '@marcusknight', stories: 8, followers: 189000 },
  ];

  const discussions = [
    { id: 1, title: 'What makes a great opening chapter?', replies: 342, category: 'Writing Tips' },
    { id: 2, title: 'Best completed fantasy stories of 2024?', replies: 218, category: 'Recommendations' },
    { id: 3, title: 'How to handle writer\'s block', replies: 567, category: 'Writing Tips' },
    { id: 4, title: 'Share your reading goals for this year!', replies: 189, category: 'General' },
    { id: 5, title: 'Looking for beta readers - sci-fi novel', replies: 94, category: 'Collaboration' },
  ];

  const challenges = [
    { title: 'The Wattys 2024', desc: 'The biggest writing competition on Wattpad. Enter your best story for a chance to win!', icon: <FiAward />, color: '#FFD700' },
    { title: 'NaNoWriMo Challenge', desc: 'Write 50,000 words in November. Join thousands of writers in this month-long writing marathon.', icon: <FiEdit3 />, color: '#FF6122' },
    { title: 'Short Story Sprint', desc: 'Write a complete short story in 24 hours. Flash fiction at its finest.', icon: <FiTrendingUp />, color: '#2196F3' },
  ];

  return (
    <div className="community-page">
      <div className="community-header">
        <h1><FiUsers /> Community</h1>
        <p>Connect with readers and writers from around the world</p>
      </div>

      {/* Writing Challenges */}
      <section className="section">
        <div className="section-header">
          <h2><FiAward /> Writing Challenges</h2>
        </div>
        <div className="challenges-grid">
          {challenges.map((challenge, i) => (
            <div key={i} className="challenge-card" style={{ '--accent': challenge.color }}>
              <div className="challenge-icon">{challenge.icon}</div>
              <h3>{challenge.title}</h3>
              <p>{challenge.desc}</p>
              <button className="btn-primary">Join Challenge</button>
            </div>
          ))}
        </div>
      </section>

      {/* Top Writers */}
      <section className="section">
        <div className="section-header">
          <h2><FiTrendingUp /> Top Writers</h2>
        </div>
        <div className="writers-list">
          {topWriters.map((writer, index) => (
            <div key={writer.username} className="writer-card">
              <span className="writer-rank">#{index + 1}</span>
              <div className="writer-avatar">{writer.name[0]}</div>
              <div className="writer-info">
                <h4>{writer.name}</h4>
                <p>{writer.username}</p>
              </div>
              <div className="writer-stats">
                <span>{writer.stories} stories</span>
                <span>{formatNumber(writer.followers)} followers</span>
              </div>
              <button className="btn-follow">Follow</button>
            </div>
          ))}
        </div>
      </section>

      {/* Discussion Forums */}
      <section className="section">
        <div className="section-header">
          <h2><FiMessageCircle /> Discussions</h2>
        </div>
        <div className="discussions-list">
          {discussions.map(disc => (
            <div key={disc.id} className="discussion-card">
              <div className="discussion-info">
                <span className="discussion-category">{disc.category}</span>
                <h4>{disc.title}</h4>
              </div>
              <div className="discussion-meta">
                <span>{disc.replies} replies</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Stats */}
      <section className="community-stats-section">
        <div className="community-stat-card">
          <FiBookOpen size={32} />
          <h3>1 Billion+</h3>
          <p>Stories uploaded</p>
        </div>
        <div className="community-stat-card">
          <FiUsers size={32} />
          <h3>90 Million+</h3>
          <p>Monthly users</p>
        </div>
        <div className="community-stat-card">
          <FiMessageCircle size={32} />
          <h3>50+</h3>
          <p>Languages</p>
        </div>
      </section>
    </div>
  );
}

export default CommunityPage;
