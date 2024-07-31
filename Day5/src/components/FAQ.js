import React, { useState } from 'react';
import './FAQ.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Student Learning Platform?",
      answer: "Student Learning Platform is an online learning platform that provides a wide range of courses and resources for students."
    },
    {
      question: "How do I sign up?",
      answer: "You can sign up by clicking on the 'Sign Up' button on the top right corner and filling out the registration form."
    },
    {
      question: "How do I access the courses?",
      answer: "Once you have signed up and logged in, you can access the courses by navigating to the 'Courses' section from the main menu."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards, debit cards, and PayPal."
    },
    {
      question: "Can I get a refund?",
      answer: "Please refer to our refund policy page for detailed information on refunds."
    }
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3>{faq.question}</h3>
            <span className="faq-icon">
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
