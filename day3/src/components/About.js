import React from 'react';
import './About.css';

const testimonials = [
  {
    name: "Jane Doe",
    feedback: "This platform has transformed my learning experience. The courses are well-structured and engaging.",
  },
  {
    name: "John Smith",
    feedback: "I love the variety of courses available. The instructors are very knowledgeable and helpful.",
  },
];

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "CEO",
    bio: "Alice has over 20 years of experience in the education industry and is passionate about making learning accessible to everyone.",
  },
  {
    name: "Bob Williams",
    role: "CTO",
    bio: "Bob is a tech enthusiast with a background in software development. He leads our technical team to build innovative solutions.",
  },
];

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>Welcome to the Student Learning Platform!</p>
      <p>
        Our mission is to provide quality education and resources to students worldwide. We believe that learning should be accessible, engaging, and effective. Our platform offers a wide range of courses, interactive content, and tools to help you achieve your educational goals.
      </p>
      <p>
        Whether you're looking to advance your career, learn a new skill, or explore a new hobby, we have something for you. Our courses are designed by experts and tailored to meet the needs of learners at all levels.
      </p>
      <p>
        Join our community today and start your learning journey with us. Together, we can achieve great things!
      </p>
      <h3>Testimonials</h3>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="feedback">"{testimonial.feedback}"</p>
            <p className="name">- {testimonial.name}</p>
          </div>
        ))}
      </div>

  
    </div>
  );
};

export default About;
