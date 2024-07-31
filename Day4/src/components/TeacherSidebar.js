import React, { useState } from 'react';
import TeacherDetails from './TeacherDetails';
import './TeacherSidebar.css'; // Import CSS file for sidebar styles

const teachers = [
  { id: 1, name: 'kavin', profilePhoto: 'data:image/jpeg;base64,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    ', bio: 'Expert in Programming Languages with 10 years of experience.', courses: ['Introduction to Programming', 'Web Development Fundamentals'] },
  { id: 2, name: 'madhan', profilePhoto: 'https://example.com/bob.jpg', bio: 'Front-end developer and JavaScript enthusiast.', courses: ['Advanced JavaScript', 'React Basics'] },
  { id: 3, name: 'kumar', profilePhoto: 'https://example.com/charlie.jpg', bio: 'Full-stack developer with a passion for teaching.', courses: ['Node.js and Express', 'Database Management'] },
  { id: 4, name: 'Diana Evans', profilePhoto: 'https://example.com/diana.jpg', bio: 'UI/UX designer and front-end developer.', courses: ['Design Principles', 'CSS Techniques'] },
  { id: 5, name: 'Ethan Walker', profilePhoto: 'https://example.com/ethan.jpg', bio: 'Experienced Python developer with a focus on data science.', courses: ['Python for Data Science', 'Machine Learning'] },
  { id: 6, name: 'Fiona Martinez', profilePhoto: 'https://example.com/fiona.jpg', bio: 'Senior developer with expertise in cloud computing.', courses: ['AWS Essentials', 'Cloud Architecture'] },
  { id: 7, name: 'George Lee', profilePhoto: 'https://example.com/george.jpg', bio: 'Software engineer with a background in cybersecurity.', courses: ['Network Security', 'Ethical Hacking'] },
  { id: 8, name: 'Hannah Clark', profilePhoto: 'https://example.com/hannah.jpg', bio: 'Specialist in database management and SQL.', courses: ['SQL Mastery', 'Database Design'] },
  { id: 9, name: 'Isaac Brown', profilePhoto: 'https://example.com/isaac.jpg', bio: 'Full-stack developer with experience in mobile applications.', courses: ['React Native', 'Mobile Development'] },
  { id: 10, name: 'Jasmine Wilson', profilePhoto: 'https://example.com/jasmine.jpg', bio: 'DevOps engineer with skills in automation and deployment.', courses: ['CI/CD Pipelines', 'DevOps Practices'] },
];

const TeacherSidebar = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleSelectTeacher = (teacher) => {
    setSelectedTeacher(teacher);
  };

  return (
    <div className="teacher-container">
      <div className="teacher-sidebar">
        <ul className="teacher-list">
          {teachers.map(teacher => (
            <li
              key={teacher.id}
              className={`teacher-item ${selectedTeacher?.id === teacher.id ? 'active' : ''}`}
              onClick={() => handleSelectTeacher(teacher)}
            >
              <img src={teacher.profilePhoto} alt={teacher.name} className="teacher-profile-photo" />
              {teacher.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="teacher-details-container">
        {selectedTeacher && <TeacherDetails teacher={selectedTeacher} />}
      </div>
    </div>
  );
};

export default TeacherSidebar;
