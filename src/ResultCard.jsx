import React from "react";
import "./ResultCard.css";

const ResultCard = () => {
  return (
    <div className="result-card">
      <h2>Your Result!</h2>
      <p>All your insights & details in one place</p>
      <div className="score">
        <h3>You've Passed</h3>
        <p>
          <span>136</span> / 240
        </p>
        <p>76% Accuracy</p>
      </div>
      <div className="top-score">
        <h4>Top Score</h4>
        <p>
          <span>230</span> / 240
        </p>
        <p>92% Accuracy</p>
      </div>
      <button className="practice-more">Practice More</button>
    </div>
  );
};

export default ResultCard;
