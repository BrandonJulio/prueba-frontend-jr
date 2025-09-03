import React from "react";
import "./UserCard.css";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="user-header">
        <div className="user-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <h2 className="user-name">{user.name}</h2>
      </div>

      <div className="user-details">
        <div className="detail-item">
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </span>
          <p>{user.email}</p>
        </div>

        <div className="detail-item">
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </span>
          <p>{user.address.city}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
