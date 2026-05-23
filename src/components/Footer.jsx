import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-icon">W</span>
            <span>Wattpad</span>
          </Link>
          <p className="footer-tagline">Where stories live. Discover the world&apos;s most-loved social storytelling platform.</p>
          <div className="footer-social">
            <a href="#" className="social-link"><FiInstagram /></a>
            <a href="#" className="social-link"><FiTwitter /></a>
            <a href="#" className="social-link"><FiFacebook /></a>
            <a href="#" className="social-link"><FiYoutube /></a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/press">Press</Link>
          <Link to="/brand">Brand Partnerships</Link>
        </div>

        <div className="footer-links-group">
          <h4>Community</h4>
          <Link to="/community">Forums</Link>
          <Link to="/wattys">Wattys</Link>
          <Link to="/writers">Writers</Link>
          <Link to="/ambassadors">Ambassadors</Link>
        </div>

        <div className="footer-links-group">
          <h4>Support</h4>
          <Link to="/help">Help Center</Link>
          <Link to="/safety">Safety</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Wattpad Clone. Built with React.</p>
        <p className="footer-disclaimer">This is a demo project, not affiliated with Wattpad.</p>
      </div>
    </footer>
  );
}

export default Footer;
