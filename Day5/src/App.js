import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Courses from './components/Courses';
import Announcements from './components/Announcements';
import Contact from './components/Contact';
import About from './components/About';
import FAQ from './components/FAQ';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Welcomepage from './components/Welcomepage';
import Signup from './components/Signup';
import Login from './Login';
import ProfilePage from './components/ProfilePage';
import ModulePage from './components/ModulePage';
import StudyMaterialPage from './components/StudyMaterialPage';
import './App.css';
import TeacherSidebar from './components/TeacherSidebar';

const App = () => {
  

  return (
    <Router>
      
      <BackgroundVideo />
      <main className="app-main-content">
        <Routes>
          <Route path="/" element={<Welcomepage />} />
          <Route path="/courses" element={<MainContent  />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sign" element={<Signup />} />
          <Route path="/loginpage" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/study-material/:moduleId" element={<StudyMaterialPage />} />
          <Route path="/course/:courseId" element={<ModulePage />} />
          <Route path="*" element={<Courses />} />
          <Route path="teacher" element={<TeacherSidebar />} />
        </Routes>
      </main>
    </Router>
  );
};

const BackgroundVideo = () => {
  const location = useLocation();
  if (['/'].includes(location.pathname)) {
    return (
      <video autoPlay muted loop className="background-video">
        <source src={`${process.env.PUBLIC_URL}/video1.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  return null;
};

export default App;
