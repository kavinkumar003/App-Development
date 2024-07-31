import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = ({ courses, setDashboardCourses }) => {

  const handleRemoveCourse = (courseId) => {
    setDashboardCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
  };

  return (
    <main className="dashboard-content">
      <h2>My Dashboard</h2>
      <div className="dashboard-courses">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.imageUrl} alt={course.title} className="course-image" />
            <Link to={`/course/${course.id}`} className="course-title">{course.title}</Link>
            <p className="course-description">{course.description}</p>
            <p className="course-additional-info">{course.additionalInfo}</p>
            <button className="remove-button" onClick={() => handleRemoveCourse(course.id)}>Remove</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
