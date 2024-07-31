import React from 'react';
import './Announcements.css';

const announcementsData = [
  {
    title: 'New Course Release: Introduction to Machine Learning',
    date: 'July 20, 2024',
    content: 'We are excited to announce the release of our new course, "Introduction to Machine Learning." This course covers the basics of machine learning, including algorithms, data processing, and practical applications. Enroll now to enhance your skills!'
  },
  {
    title: 'Platform Maintenance Scheduled',
    date: 'July 15, 2024',
    content: 'Please be advised that our platform will undergo maintenance on July 18, 2024, from 2:00 AM to 5:00 AM UTC. During this time, the platform will be unavailable. We apologize for any inconvenience and appreciate your understanding.'
  },
  {
    title: 'Live Webinar: Career Opportunities in Data Science',
    date: 'July 10, 2024',
    content: 'Join us for a live webinar on July 22, 2024, where industry experts will discuss career opportunities in data science. Don\'t miss this chance to learn from professionals and ask your questions. Register now!'
  }
];

const Announcements = () => {
  return (
    <div className="announcements-container">
      <h2 className="announcements-title">Announcements</h2>
      <div className="announcements-list">
        {announcementsData.map((announcement, index) => (
          <div className="announcement-item" key={index}>
            <h3 className="announcement-title">{announcement.title}</h3>
            <p className="announcement-date">{announcement.date}</p>
            <p className="announcement-content">{announcement.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;