import React from 'react';
import { useParams } from 'react-router-dom';
import './StudyMaterialPage.css'; // Add your styles here

// Sample data - replace with your actual data source
const materialsData = {
  1: [
    { id: 1, title: 'Introduction to Programming Guide', description: 'A comprehensive guide to the basics of programming.', fileUrl: 'https://example.com/guide.pdf' },
    { id: 2, title: 'Programming Exercises', description: 'Exercises to practice programming concepts.', fileUrl: 'https://example.com/exercises.pdf' }
  ],
  2: [
    { id: 1, title: 'Advanced JavaScript Techniques', description: 'In-depth techniques and tricks for JavaScript.', fileUrl: 'https://example.com/javascript.pdf' },
    { id: 2, title: 'JavaScript Best Practices', description: 'A collection of best practices for writing clean JavaScript code.', fileUrl: 'https://example.com/best-practices.pdf' }
  ],
  3: [
    { id: 1, title: 'Advanced JavaScript Techniques', description: 'In-depth techniques and tricks for JavaScript.', fileUrl: 'https://example.com/javascript.pdf' },
    { id: 2, title: 'JavaScript Best Practices', description: 'A collection of best practices for writing clean JavaScript code.', fileUrl: 'https://example.com/best-practices.pdf' }
  ],
  4: [
    { id: 1, title: 'Advanced JavaScript Techniques', description: 'In-depth techniques and tricks for JavaScript.', fileUrl: 'https://example.com/javascript.pdf' },
    { id: 2, title: 'JavaScript Best Practices', description: 'A collection of best practices for writing clean JavaScript code.', fileUrl: 'https://example.com/best-practices.pdf' }
  ],
  5: [
    { id: 1, title: 'Advanced JavaScript Techniques', description: 'In-depth techniques and tricks for JavaScript.', fileUrl: 'https://example.com/javascript.pdf' },
    { id: 2, title: 'JavaScript Best Practices', description: 'A collection of best practices for writing clean JavaScript code.', fileUrl: 'https://example.com/best-practices.pdf' }
  ],
  6: [
    { id: 1, title: 'Advanced JavaScript Techniques', description: 'In-depth techniques and tricks for JavaScript.', fileUrl: 'https://example.com/javascript.pdf' },
    { id: 2, title: 'JavaScript Best Practices', description: 'A collection of best practices for writing clean JavaScript code.', fileUrl: 'https://example.com/best-practices.pdf' }
  ],
  7: [
    { id: 1, title: 'Advanced JavaScript Techniques', description: 'In-depth techniques and tricks for JavaScript.', fileUrl: 'https://example.com/javascript.pdf' },
    { id: 2, title: 'JavaScript Best Practices', description: 'A collection of best practices for writing clean JavaScript code.', fileUrl: 'https://example.com/best-practices.pdf' }
  ]
};

const StudyMaterialPage = () => {
  const { moduleId } = useParams();
  const materials = materialsData[moduleId] || [];

  return (
    <main className="study-material-page">
      <h1>Study Materials for Module {moduleId}</h1>
      <div className="material-list">
        {materials.map(material => (
          <div key={material.id} className="material-card">
            <h3 className="material-title">{material.title}</h3>
            <p className="material-description">{material.description}</p>
            <a href={material.fileUrl} className="material-link" download>Download</a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default StudyMaterialPage;
