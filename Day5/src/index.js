import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import About from './components/About';
import Footer from './components/Footer';
import Mainpage from './components/Mainpage';
import ProfilePage from './components/ProfilePage';
import ModulePage from './components/ModulePage';
import TeacherSidebar from './components/TeacherSidebar';
import LiveClassPage from './components/LiveClassPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
