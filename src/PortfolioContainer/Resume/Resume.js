import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "educ.jpg" },
    { label: "Work History", logoSrc: "work.jpg" },
    { label: "Programming Skills", logoSrc: "work1.jpg" },
    { label: "Projects", logoSrc: "proj.png" },
    { label: "Interests", logoSrc: "likes.png" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 90 },
    { skill: "ReactNative", ratingPercentage: 90 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 40},
    { skill: "Laravel", ratingPercentage: 80},
    { skill: "Node JS", ratingPercentage: 40},
    { skill: "Mongo Db", ratingPercentage: 10 },
    { skill: "Core Java", ratingPercentage: 60},
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Doctor Appointment Application",
      duration: { fromDate: "2020", toDate: "2022" },
      description:
        "An application that allows patients to book appointments with doctors.",
      subHeading:
        "Technologies Used:  Laravel, React Native, HTML, CSS, JavaScript",
    },
    // {
    //   title: "School Website",
    //   duration: { fromDate: "2020", toDate: "2021" },
    //   description:
    //     "My high School website",
    //   subHeading:
    //     "Technologies Used: ReactJS, TailWind Css, JavaScript.",
    // },
    // {
    //   title: "News Application",
    //   duration: { fromDate: "2022", toDate: "2022" },
    //   description:
    //     "News application that displays both local and international news.",
    //   subHeading:
    //     "Technologies Used: ReactJS, Bootstrap, JavaScript.",
    // },
    {
      title: "THinkx Cloud",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A web based application that allows users buy cloud services like domain names, hosting, emails, etc. ",
      subHeading:
        "Technologies Used: ReactJs, Css, HTML.",
    },
    {
      title: "Farm Uganda",
      duration: { fromDate: "2020", toDate: "2022" },
      description:
        "A web based applications that allows farmers keep track of their inputs and farm outputs ",
      subHeading:
        "Technologies Used: Laravel, Bootstrap, JavaScript.",
    },

  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Makerere Universty"}
        subHeading={"BACHELOR OF SCIENCE IN COMPUTER SCIENCE"}
        fromDate={"2019"}
        toDate={"2024"}
      />

      <ResumeHeading
        heading={"Midland High School Kawempe "}
        subHeading={"O-Level "}
        fromDate={"2012"}
        toDate={"2017"}
      />
          <ResumeHeading
        heading={"Mita College  Kawempe "}
        subHeading={"A-Level"}
        fromDate={"2017"}
        toDate={"2018"}
      />
      <ResumeHeading
        heading={"Primary "}
        subHeading={"Ridge Grammar Primary School"}
        fromDate={"2009"}
        toDate={"2011"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"THINKX Software Limited"}
          subHeading={"Full Stack Developer"}
          fromDate={"2020"}
          toDate={"2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as a full stack developer at ThinkX Software
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed a doctor appointment app for adfa medicare services(Available on playstore).
          </span>
          <br />
          <span className="resume-description-text">
            - I have as well worked on several other Personal based projects with both the FrontEnd and backend.
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope the UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Football"
        description="I love playing football and I am a big fan of Manchester United."
      />
      
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something I can never compromise with." />
      <ResumeHeading
        heading="Teaching"
        description="I feel blessed sharing my knowledge however little, with someone else."/>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
