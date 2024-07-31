import React from 'react';
import './LiveClassPage.css';

// Sample live class data
const liveClasses = [
  { id: 1, title: 'Introduction to React', link: 'https://youtu.be/q0mmJrkQYaU?si=Wm3DE6XuQuuwIAQA', instructor: 'Jane Doe', time: '10:00 AM - 11:00 AM' },
  { id: 2, title: 'Advanced JavaScript', link: 'https://meet.google.com/your-meet-link-2', instructor: 'John Smith', time: '12:00 PM - 1:00 PM' },
  { id: 3, title: 'Introduction to Python', link: 'https://meet.google.com/your-meet-link-3', instructor: 'Emily Johnson', time: '2:00 PM - 3:00 PM' }
];

const LiveClassPage = () => {
  return (
    <div className="live-class-page-container">
      <header className="live-class-header">
        <h1>Live Classes</h1>
      </header>
      <main className="live-class-main">
        <section className="live-classes">
          {liveClasses.map(liveClass => (
            <div key={liveClass.id} className="live-class-card">
              <h2>{liveClass.title}</h2>
              <iframe
                src={liveClass.link}
                frameBorder="0"
                allow="camera; microphone; fullscreen; autoplay"
                title={liveClass.title}
                className="video-frame"
              ></iframe>
              <div className="class-details">
                <p><strong>Instructor:</strong> {liveClass.instructor}</p>
                <p><strong>Time:</strong> {liveClass.time}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="course-pane">
          <h2>Available Courses</h2>
          <div className="course-list">
            <div className="course-card">
              <h3>React Development</h3>
              <p>Learn the basics of React and how to build modern web applications.</p>
              <button>Join Course</button>
            </div>
            <div className="course-card">
              <h3>JavaScript Essentials</h3>
              <p>Deep dive into JavaScript, covering essential concepts and advanced techniques.</p>
              <button>Join Course</button>
            </div>
            <div className="course-card">
              <h3>Python for Data Science</h3>
              <p>Explore Python's applications in data science and machine learning.</p>
              <button>Join Course</button>
            </div>
          </div>
        </section>
      </main>
      <footer className="live-class-footer">
        <p>&copy; 2024 Live Learning Inc.</p>
      </footer>
    </div>
  );
};

export default LiveClassPage;
