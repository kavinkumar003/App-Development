// Filename - App.js
import React from "react";
import "./Mainpage.css";

function Mainpage() {
  return (
    <div>
      <nav className="navbar background">
        <ul className="nav-list">
          <div className="logo">
            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png" />
          </div>
          <li>
            <a href="#courses">Courses</a>
          </li>
          <li>
            <a href="#tutorials">Tutorials</a>
          </li>
          <li>
            <a href="#jobs">Jobs</a>
          </li>
          <li>
            <a href="#student">Student</a>
          </li>
        </ul>
        <div className="rightNav">
          <input type="text" name="search" id="search" />
          <button className="btn btn-sm">Search</button>
        </div>
      </nav>
      <section className="section">
        <div className="box-main">
          <div className="firstHalf">
            <h1 className="text-big">Welcome to Student E-Learning Portal</h1>
            <p className="text-small">
              This portal provides access to various courses, tutorials, and job opportunities for students.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mainpage;