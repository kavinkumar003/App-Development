import React, { useState } from 'react';
import './TeacherDetails.css';

const TeacherDetails = ({ teacher }) => {
  const [doubt, setDoubt] = useState('');

  const handleDoubtChange = (e) => {
    setDoubt(e.target.value);
  };

  const handleSubmitDoubt = () => {
    // Logic to submit the doubt
    alert(`Your doubt: ${doubt} has been submitted.`);
    setDoubt('');
  };

  return (
    <div className="teacher-details">
      <img src={teacher.profilePhoto} alt={teacher.name} className="teacher-details-photo" />
      <h2>{teacher.name}</h2>
      <p><strong>Bio:</strong> {teacher.bio}</p>
      <h3>Teaching Courses:</h3>
      <ul>
        {teacher.courses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <div className="doubt-section">
        <h3>Clarify Your Doubts</h3>
        <textarea
          value={doubt}
          onChange={handleDoubtChange}
          placeholder="Write your doubt here..."
        />
        <button onClick={handleSubmitDoubt}>Submit</button>
      </div>
    </div>
  );
};

export default TeacherDetails;
