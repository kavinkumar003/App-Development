import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Courses from './components/Courses';
import Announcements from './components/Announcements';
import Contact from './components/Contact';
import About from './components/About';
import FAQ from './components/FAQ';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomePage from './components/Welcomepage';



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />  
        <Route path="/courses" element={<MainContent />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<Courses />} />
      

      </Routes>
     
      {/* <Footer/> */}
    </Router>
  );
};

export default App;
