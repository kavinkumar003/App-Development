import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const courses = [
  { 
    id: 1, 
    title: 'Introduction to Programming', 
    description: 'Learn the basics of programming with hands-on exercises.', 
    imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.pSaPMy9B_NLBD2EIG8VVcQHaFW&pid=Api&P=0&h=180', 
    additionalInfo: 'This course is perfect for beginners. No prior experience required.' ,
    modules: [
      { id: 1, title: 'Module 1: Getting Started', videoUrl: 'https://www.example.com/video1.mp4' },
      { id: 2, title: 'Module 2: Basics of Programming', videoUrl: 'https://www.example.com/video2.mp4' }
    ]
  },
  { 
    id: 2, 
    title: 'Advanced JavaScript', 
    description: 'Deep dive into JavaScript with advanced concepts and techniques.', 
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.lT2MFAkuTPhZW__tqbkF1wHaEo&pid=Api&P=0&h=180', 
    additionalInfo: 'Ideal for those with a solid understanding of JavaScript basics.',
    modules: [
      { id: 1, title: 'Module 1: Advanced Functions', videoUrl: 'https://www.example.com/video3.mp4' },
      { id: 2, title: 'Module 2: Asynchronous JavaScript', videoUrl: 'https://www.example.com/video4.mp4' }
    ]
  },
  { 
    id: 3, 
    title: 'Web Development Fundamentals', 
    description: 'Build your first website with HTML, CSS, and JavaScript.', 
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.OiZhGS5AQXm2P-0WaYwPigHaEK&pid=Api&P=0&h=180', 
    additionalInfo: 'Great for those looking to start a career in web development.',
    modules: [
      { id: 1, title: 'Module 1: HTML Basics', videoUrl: 'https://www.example.com/video5.mp4' },
      { id: 2, title: 'Module 2: CSS Basics', videoUrl: 'https://www.example.com/video6.mp4' }
    ]
  }
];

const CoursePage = () => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));
  const [selectedVideo, setSelectedVideo] = useState(course?.modules[0]?.videoUrl || '');

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleModuleClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  return (
    <div className="course-page">
      <h2>{course.title}</h2>
      <div className="course-content">
        <div className="course-modules">
          <h3>Modules</h3>
          <ul>
            {course.modules.map(module => (
              <li key={module.id} onClick={() => handleModuleClick(module.videoUrl)}>
                {module.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="course-video">
          {selectedVideo ? (
            <video controls>
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>Select a module to play the video</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
