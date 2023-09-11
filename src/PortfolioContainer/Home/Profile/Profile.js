import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/Katznicho">
                <i className="fa fa-github fa-lg "></i>
              </a>
              <a href="https://www.instagram.com/katznicho/">
                <i className="fa fa-instagram fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/katende-nicholas-318a5b219/">
                <i className="fa fa-linkedin fa-lg"></i>
              </a>
              <a href="https://twitter.com/CodeArtisanKatz">
                <i className="fa fa-twitter fa-lg"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello , I'M{" "}
              <span className="highlighted-text">KATENDE NICHOLAS AKA THE "Code Artisan"</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1020,
                    "Full stack Developer 💻",
                    1020,
                    "LARAVEL Developer 📱",
                    1020,
                    "Cross Platform Dev 🔴",
                    1020,
                    "React/React Native 🌐",
                    1020,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="./katende_nicholas_resume.pdf" download="katende_nicholas_resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
