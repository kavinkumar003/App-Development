import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faDashboard } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'; // Correct the path as needed
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import TeacherSidebar from './TeacherSidebar'; // Import the TeacherSidebar component

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const [showSidebar, setShowSidebar] = useState(false); // State to toggle sidebar visibility

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev); // Toggle sidebar visibility
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1 className="title">Student Learning Platform</h1>
      <nav className="header-nav">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/announcements">Announcements</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
         
          <li><Link  to="/teacher" onClick={toggleSidebar} className="teacher-sidebar-button">Teachers</Link></li> {/* Button to toggle sidebar */}
        </ul>
        <div className="auth-buttons">
          <Link to="/loginpage">
            <button className="login-button">Login</button>
          </Link>
          <Link to="/sign">
            <button className="signup-button">Sign Up</button>
          </Link>
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} className="profile-icon" />
          </Link>
        </div>
      </nav>
    
    </header>
  );
};

export default Header;
