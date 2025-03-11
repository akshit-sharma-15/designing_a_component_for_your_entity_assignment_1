import React from "react";
import "./usercard.css"; // Import CSS file

const Usercard = () => {
  // Static dummy data
  const profilePhoto =
    "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D";
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 234 567 890";
  const address = "123, Main Street, New York, NY - 10001";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="User Profile" className="user-photo" />
      <h2 className="user-name">{name}</h2>
      <p className="user-info">{email}</p>
      <p className="user-info">{phone}</p>
      <p className="user-info">{address}</p>
    </div>
  );
};

export default Usercard;
