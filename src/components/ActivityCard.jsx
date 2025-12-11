// ActivityCard.jsx
import React from "react";
import "./ActivityCard.css";

export default function ActivityCard({ image, title, time, description, isBusA }) {
  return (
    <div className={`activity-card ${isBusA ? "bus-a-card" : ""}`}>
      <img src={image} alt={title} className="activity-image" />
      <div className="activity-info">
        <h4 className="activity-title">{title}</h4>
        {time && <p className="activity-time">{time}</p>}
        <p className="activity-description">{description}</p>
      </div>
    </div>
  );
}