import React from 'react';
import { Link } from 'react-router-dom';
import './Welcomepage.css';
import Header from './Header';
import Footer from './Footer';

const WelcomePage = () => {
  return (
    <div>
      <Header />
      <div className="welcome-container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1>Welcome to the Student Learning Platform</h1>
          <p>Your gateway to knowledge and learning.</p>
          <Link to="/courses" className="cta-button">Get Started</Link>
        </div>

        {/* Featured Highlights */}
        <div className="highlighted-features">
          <h2>Why Choose Us?</h2>
          <div className="feature">
            <h3>Expert Instructors</h3>
            <p>Learn from the best in the field with real-world experience.</p>
          </div>
          <div className="feature">
            <h3>Interactive Content</h3>
            <p>Engage with dynamic content and hands-on exercises.</p>
          </div>
          <div className="feature">
            <h3>Flexible Learning</h3>
            <p>Study at your own pace, anytime, anywhere.</p>
          </div>
        </div>

        {/* Welcome Content */}
        <div className="welcome-content">
          <div className="feature">
            <h2>Wide Range of Courses</h2>
            <p>Explore our extensive catalog of courses across various subjects.</p>
          </div>
          <div className="feature">
            <h2>Interactive Learning</h2>
            <p>Engage with interactive lessons and quizzes.</p>
          </div>
          <div className="feature">
            <h2>Expert Instructors</h2>
            <p>Learn from industry experts and experienced educators.</p>
          </div>
          <div className="feature">
            <h2>Community Support</h2>
            <p>Join a community of learners and get support from peers and mentors.</p>
          </div>
        </div>

        {/* Latest News/Updates */}
        <div className="latest-news">
          <h2>Latest News</h2>
          <div className="news-item">
            <h3>New Course Launch</h3>
            <p>We're excited to announce a new course on Web Development. Enroll now to get started!</p>
          </div>
          <div className="news-item">
            <h3>Special Webinar</h3>
            <p>Join our free webinar on Effective Learning Strategies next week.</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          <h3>What Our Students Say</h3>
          <div className="testimonial">
            <p>"The courses are well-structured and engaging. I've learned so much!"</p>
            <p>- Emily Johnson</p>
          </div>
          <div className="testimonial">
            <p>"A fantastic platform with a variety of subjects and interactive content."</p>
            <p>- Michael Smith</p>
          </div>
        </div>

        {/* Signup Prompt */}
        <div className="signup-prompt">
          <h3>Ready to Join Us?</h3>
          <p>Sign up today to unlock your learning potential and start your journey with us!</p>
          <Link to="/sign" className="signup-button">Sign Up Now</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WelcomePage;
