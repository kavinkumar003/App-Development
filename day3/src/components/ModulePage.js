import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import welcomeImage from '../assets/feature5.jpg';

import './ModulePage.css'; // Add your styles here

const modulesData = {
  1: [
    { id: 1, title: 'Introduction to Programming Basics', videoUrl: 'https://example.com/video1', material: 'Basic concepts PDF', explore: 'Explore more about programming basics here.' },
    { id: 2, title: 'Hands-On Exercises', videoUrl: 'https://example.com/video2', material: 'Exercise workbook', explore: 'Try out exercises related to programming basics.' },
    { id: 3, title: 'Additional Exercises', videoUrl: 'https://example.com/video3', material: 'Additional workbook', explore: 'Find more exercises to enhance your skills.' },
    { id: 4, title: 'Debugging Techniques', videoUrl: 'https://example.com/video10', material: 'Debugging guide', explore: 'Learn essential debugging techniques for programmers.' },
    { id: 5, title: 'Version Control Basics', videoUrl: 'https://example.com/video11', material: 'Version control handbook', explore: 'Introduction to version control systems and best practices.' },
    { id: 6, title: 'Introduction to APIs', videoUrl: 'https://example.com/video12', material: 'API introduction PDF', explore: 'Understanding the basics of APIs and how to use them.' },
    { id: 7, title: 'Data Structures', videoUrl: 'https://example.com/video13', material: 'Data structures guide', explore: 'Explore fundamental data structures and their uses.' }
  ],
  2: [
    { id: 1, title: 'Advanced JavaScript Concepts', videoUrl: 'https://example.com/video4', material: 'Advanced concepts PDF', explore: 'Deep dive into JavaScript concepts here.' },
    { id: 2, title: 'JavaScript Techniques', videoUrl: 'https://example.com/video5', material: 'Techniques workbook', explore: 'Learn about advanced techniques in JavaScript.' },
    { id: 3, title: 'JavaScript Best Practices', videoUrl: 'https://example.com/video6', material: 'Best practices guide', explore: 'Explore the best practices in JavaScript development.' },
    { id: 4, title: 'Async Programming', videoUrl: 'https://example.com/video14', material: 'Async programming PDF', explore: 'Understand asynchronous programming patterns and techniques.' },
    { id: 5, title: 'JavaScript Design Patterns', videoUrl: 'https://example.com/video15', material: 'Design patterns guide', explore: 'Learn about common design patterns in JavaScript development.' },
    { id: 6, title: 'Unit Testing', videoUrl: 'https://example.com/video16', material: 'Unit testing PDF', explore: 'Introduction to unit testing and test-driven development.' },
    { id: 7, title: 'Performance Optimization', videoUrl: 'https://example.com/video17', material: 'Optimization guide', explore: 'Techniques to improve the performance of JavaScript applications.' }
  ],
  3: [
    { id: 1, title: 'HTML Basics', videoUrl: 'https://example.com/video7', material: 'HTML basics PDF', explore: 'Learn more about HTML fundamentals.' },
    { id: 2, title: 'CSS Styling', videoUrl: 'https://example.com/video8', material: 'CSS styling guide', explore: 'Explore CSS styling techniques.' },
    { id: 3, title: 'Responsive Design', videoUrl: 'https://example.com/video9', material: 'Responsive design guide', explore: 'Understand the principles of responsive design.' },
    { id: 4, title: 'CSS Grid Layout', videoUrl: 'https://example.com/video18', material: 'CSS Grid PDF', explore: 'Learn about CSS Grid Layout and its features.' },
    { id: 5, title: 'Flexbox Layout', videoUrl: 'https://example.com/video19', material: 'Flexbox guide', explore: 'Master Flexbox for modern layout designs.' },
    { id: 6, title: 'Web Accessibility', videoUrl: 'https://example.com/video20', material: 'Accessibility PDF', explore: 'Best practices for making web content accessible to all users.' },
    { id: 7, title: 'CSS Animations', videoUrl: 'https://example.com/video21', material: 'CSS animations guide', explore: 'Add animations to your web pages with CSS.' }
  ]
};

const ModulePage = () => {
  const { courseId } = useParams();
  const [openModuleId, setOpenModuleId] = useState(null);
  const modules = modulesData[courseId] || [];

  const handleModuleClick = (moduleId) => {
    setOpenModuleId(openModuleId === moduleId ? null : moduleId);
  };

  return (
    <div>
      <Header />
      <div className="module-page">
        <aside className="sidebar">
          <h1>Modules for Course {courseId}</h1>
          <div className="module-list">
            {modules.map(module => (
              <div
                key={module.id}
                className={`module-card ${openModuleId === module.id ? 'active' : ''}`}
                onClick={() => handleModuleClick(module.id)}
              >
                <h3 className="module-title">{module.title}</h3>
              </div>
            ))}
          </div>
        </aside>

        <main className="video-panel">
          {openModuleId ? (
            <div className="module-content">
              {modules.find(module => module.id === openModuleId) && (
                <div>
                  <div className="module-video-container">
                    <video controls className="module-video">
                      <source src={modules.find(module => module.id === openModuleId).videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="module-description">
                    <p className="module-material">Material: {modules.find(module => module.id === openModuleId).material}</p>
                    <Link to={`/study-material/${openModuleId}`} className="material-link">
                      View Study Materials
                    </Link>
                  </div>
                  <div className="explore-content">
                    <h3>Explore More</h3>
                    <p>{modules.find(module => module.id === openModuleId).explore}</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="welcome-content">
              <img src={welcomeImage} alt="Welcome" className="welcome-image" />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ModulePage;
