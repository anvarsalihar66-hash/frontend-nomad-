import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiSearch, FiEdit3, FiUser, FiBell, FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <span className="logo-icon">W</span>
            <span className="logo-text">Wattpad</span>
          </Link>
          <div className="navbar-links">
            <NavLink to="/browse" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              Browse
            </NavLink>
            <NavLink to="/community" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              Community
            </NavLink>
          </div>
        </div>

        <div className="navbar-center">
          <form className="search-form" onSubmit={handleSearch}>
            <FiSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search stories, authors, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        <div className="navbar-right">
          <Link to="/write" className="write-btn">
            <FiEdit3 />
            <span>Write</span>
          </Link>
          <button className="icon-btn notification-btn">
            <FiBell />
            <span className="notification-dot" />
          </button>
          <Link to="/profile" className="avatar-btn">
            <FiUser />
          </Link>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <form className="mobile-search-form" onSubmit={handleSearch}>
            <FiSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <NavLink to="/browse" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Browse</NavLink>
          <NavLink to="/community" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Community</NavLink>
          <NavLink to="/write" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Write</NavLink>
          <NavLink to="/profile" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Profile</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
