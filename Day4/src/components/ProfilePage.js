import React, { useState } from "react";
import "./ProfilePage.css";

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Profile Page</h1>
        <p>Welcome to your profile, {profile.name}!</p>
      </div>
      <div className="profile-info">
        <img src="https://picsum.photos/200/300" alt="Profile Picture" />
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
            />
            <button className="save-btn" onClick={handleSaveClick}>
              Save
            </button>
          </>
        ) : (
          <>
            <h2>Name: {profile.name}</h2>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>
            <button className="edit-btn" onClick={handleEditClick}>
              Edit Profile
            </button>
          </>
        )}
      </div>
      <div className="profile-tabs">
        <button className="tab-btn active">Courses</button>
        <button className="tab-btn">Tutorials</button>
        <button className="tab-btn">Jobs</button>
      </div>
      <div className="profile-content">
        <h2>Courses</h2>
        <ul>
          <li>
            <span>Course 1</span>
            <span>80%</span>
          </li>
          <li>
            <span>Course 2</span>
            <span>60%</span>
          </li>
          <li>
            <span>Course 3</span>
            <span>90%</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;
