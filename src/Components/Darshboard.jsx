import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="grid-container">
    {/* Result Section */}
    <div className="result-card">
      <img
        className="result-icon"
        src="./src/assets/Result.avif"
        alt="Result Icon"
        width="150px"
      />
      <h2 className="result-title">Your Result!</h2>
      <p className="result-description">
        All your insights & details in one place
      </p>

      {/* Improve Score Section */}
      <div className="score-section">
        <div className="score-details">
          <div className="score-passed">
            <span>YOU'VE PASSED</span>
            <h1>
              136 <span>/ 240</span>
            </h1>
          </div>
          <span className="score-accuracy">76% ACCURACY</span>
        </div>

        <div className="top-score">
          <img
            className="profile-pic"
            src="./src/assets/profile.png"
            alt="Profile"
          />
          <div>
            <h3>Top Score</h3>
            <h1>
              230 <span>/ 240</span>
            </h1>
            <span>By Parth Akotkar</span>
            <p>
              <strong>92% ACCURACY</strong>
            </p>
          </div>
        </div>

        <h3>Improve your Marks</h3>
        <p>Improve your scores by practicing more</p>
        <button className="practice-button">Practice more</button>
      </div>

      {/* Revisit Paper Section */}
      <div className="revisit-paper">
        <h1>Revisit Paper</h1>
        <p>Challenge your friends by simply sharing a link to this test</p>
        <button className="visit-button">Visit</button>
        <p className="instructions">
          Instructions for how to upload your handwritten material is given
        </p>
      </div>
    </div>
 

      {/* Dashboard Section */}
      <div className="dashboard-container">
        <div className="compare-section">
          <div className="compare-card">Compare Accuracy</div>
          <div className="compare-card">Compare Accuracy</div>
          <div className="compare-card">Compare Accuracy</div>
        </div>

        <div className="details-section">
          <div className="card improvements">
            <h3>Improvements</h3>
            <p>Subject Understanding</p>
            <div className="tags-container">
              {[
                "Geography",
                "Politics",
                "Current Affairs",
                "General Studies",
                "Mathematics",
                "Social Studies",
                "English Literature",
                "Indian History",
                "Economics",
              ].map((subject, index) => (
                <span
                  key={index}
                  className={`tag tag-${subject.toLowerCase().replace(" ", "-")}`}
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
          <div className="card response-time">
            <h3>Response Time</h3>
            <p>
              60% Ans took <strong>+2 min</strong>
            </p>
            <p className="slow-text">You are slow!</p>
          </div>
          <div className="card approach-data">
            <h3>Approach Data</h3>
            <ul>
              <li>25% Based on Facts</li>
              <li>32% Based on Analysis</li>
              <li>19% Based on Elimination</li>
              <li>24% Based on Guess</li>
            </ul>
          </div>
          <div className="card suggestions">
            <h3>Suggestions</h3>
            <div className="suggestions-content">
              <span>Easy</span> - 40 sec <br />
              <span>Medium</span> - 1.5 min <br />
              <span>Hard</span> - 3 min
            </div>
          </div>
        </div>

        <div className="chart-section">
          <div className="card compare-accuracy">
            <h3>Compare Accuracy</h3>
           <img src='./src/assets/last.PNG' alt='' />
          </div>
          <div className="card time-taken">
            <h3>Time Taken</h3>
            <img src='./src/assets/scale-1.jpeg' alt='' />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti </p>
            


          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
