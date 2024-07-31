import React from 'react';
import { Link } from 'react-router-dom';
import './MainContent.css';
import Footer from './Footer';
import Header from './Header';

const featuredCourses = [
  { id: 1, title: 'Introduction to Programming', description: 'Learn the basics of programming with hands-on exercises.', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.pSaPMy9B_NLBD2EIG8VVcQHaFW&pid=Api&P=0&h=180', additionalInfo: 'This course is perfect for beginners. No prior experience required.' },
  { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript with advanced concepts and techniques.', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.lT2MFAkuTPhZW__tqbkF1wHaEo&pid=Api&P=0&h=180', additionalInfo: 'Ideal for those with a solid understanding of JavaScript basics.' },
  { id: 3, title: 'Web Development Fundamentals', description: 'Build your first website with HTML, CSS, and JavaScript.', imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.OiZhGS5AQXm2P-0WaYwPigHaEK&pid=Api&P=0&h=180', additionalInfo: 'Great for those looking to start a career in web development.' },
  { id: 4, title: 'Data Structures and Algorithms', description: 'Master the essential data structures and algorithms for efficient programming.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGi2_XcnX2FCc-ZjHP_w77kcak__wP4vJ_2A&s', additionalInfo: 'A must-have skill set for any serious programmer.' },
  { id: 5, title: 'Database Management', description: 'Learn about database systems and SQL to manage and query data effectively.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xSW94hj48E3wxoPDQK7H4dMkPUmWromcGw&s', additionalInfo: 'Crucial for backend development and data analysis.' },
  { id: 6, title: 'Machine Learning Basics', description: 'Get introduced to machine learning concepts and build your first model.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPVue7zQI1n8IL-adktqtUvbzcKZnN9v4og&s', additionalInfo: 'Start your journey into the world of AI and data science.' },
  { id: 7, title: 'Cybersecurity Essentials', description: 'Understand the fundamentals of cybersecurity and how to protect systems.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAM1dfxI3_D6_MEjnKAXn2qZN801rRGyLPzA&s', additionalInfo: 'Vital knowledge for keeping data and applications secure.' },
  { id: 8, title: 'Mobile App Development', description: 'Learn to create mobile applications for Android and iOS platforms.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcc-kAWTvyDT4BIBJT0YCgvAWXl3_PIw88A&s', additionalInfo: 'Expand your development skills to mobile devices.' },
  { id: 9, title: 'Cloud Computing', description: 'Understand cloud services and architecture to deploy scalable applications.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyCAPwJsgII3KRD5DPlbDkE0gFUyiHCfCEQ&s', additionalInfo: 'Learn about the future of computing and service deployment.' }
];

const announcements = [
  { id: 1, title: 'New Features Added', date: 'July 20, 2024', description: 'Check out the new features added to our platform.', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.o2gUxcNq5s8XpL1ZCN1d7gHaEW&pid=Api&P=0&h=180', additionalInfo: 'We have introduced new collaboration tools and enhanced security features.' },
  { id: 2, title: 'Upcoming Maintenance', date: 'July 25, 2024', description: 'Scheduled maintenance on July 25th from 2 AM to 4 AM.', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.1FWsSkBbdWB9pARjjlVfigHaEK&pid=Api&P=0&h=180', additionalInfo: 'Please save your work and log out before the maintenance window.' },
];

const MainContent = () => {
  return (
    <main className="main-content">
      <Header />
      <section id="courses" className="featured-courses">
        <div className='headline'><h2>Featured Courses</h2></div>
        <div className="course-list">
          {featuredCourses.map(course => (
            <div key={course.id} className="course-card">
              <img src={course.imageUrl} alt={course.title} className="course-image" />
              <Link to={`/course/${course.id}`} className="course-title">{course.title}</Link>
              <p className="course-description">{course.description}</p>
              <p className="course-additional-info">{course.additionalInfo}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="announcements" className="recent-announcements">
        <div className='headline'><h2>Recent Announcements</h2></div>
        <div className="announcement-list">
          {announcements.map(announcement => (
            <div key={announcement.id} className="announcement-card">
              <img src={announcement.imageUrl} alt={announcement.title} className="announcement-image" />
              <h3 className="announcement-title">{announcement.title}</h3>
              <p className="announcement-date">{announcement.date}</p>
              <p className="announcement-description">{announcement.description}</p>
              <p className="announcement-additional-info">{announcement.additionalInfo}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default MainContent;
