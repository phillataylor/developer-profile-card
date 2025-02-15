import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="/PhillpTaylorBioPic.jpg"
      alt="Phillip Taylor, Full Stack Web Developer"
    />
  );
}

function Intro() {
  return (
    <React.Fragment>
      <h1>Phillip A. Taylor</h1>
      <p>
        Full-stack web developer with over 20 years in web development. When I
        am not coding, I am going on photo walks, listening to music and
        enjoying cooking delicious vegan recipes.
      </p>
    </React.Fragment>
  );
}

function SkillList() {
  const skills = skillData;
  const numSkills = skills.length;
  console.log(numSkills, skills[1].skill);

  return (
    <div
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        marginTop: `10px`,
        // border: `2px solid red`,
      }}
    >
      {skills.map(skillItem => (
        <Skill skillObj={skillItem} key={skillItem.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div
      className="skill"
      style={{
        margin: `3px 3px`,
        backgroundColor: skillObj.bgcolor,
        lineHeight: `2rem`,
      }}
    >{`${skillObj.skill} ${skillObj.emoji}`}</div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const skillData = [
  {
    skill: "HTML & CSS",
    emoji: "✊🏾",
    bgcolor: "orange",
  },

  {
    skill: "Javascript",
    emoji: "🖥",
    bgcolor: "yellow",
  },
  {
    skill: "React",
    emoji: "📸",
    bgcolor: "purple",
  },
  {
    skill: "Figma",
    emoji: "👌",
    bgcolor: "pink",
  },
  {
    skill: "Git & GitHub",
    emoji: "👍🏾",
    bgcolor: "turquoise",
  },
  {
    skill: "Web Design",
    emoji: "👍🏾",
    bgcolor: "violet",
  },
];
