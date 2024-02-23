import "./Skills.css";
import frontend from "../../assets/front-end.png";
import python from "../../assets/python.png";
import dsa from "../../assets/leetcode.png";

let skillsList = [
  {
    id: 1,
    image: frontend,
    skillHeading: "Frontend Development",
    skillDesc:
      "Skilled in HTML, CSS, JavaScript, and React.js for creating user-friendly interfaces and interactive web applications.",
  },
  {
    id: 2,
    image: python,
    skillHeading: "Python Programming Language",
    skillDesc:
      "Skilled in Python with experience in machine learning projects completed during college.",
  },
  {
    id: 3,
    image: dsa,
    skillHeading: "Data Structures and Algorithms",
    skillDesc:
      "Competent in implementing fundamental Data Structures and Algorithms, continuously improving through practice and exploration.",
  },
];

function Skills() {
  return (
    <section id="skills">
      <span className="skill-title">What I do</span>
      <span className="skill-description">
        I'm skilled at developing frontend apps which include HTML, CSS,
        Javascript along with frontend library React js and with problem solving
        skills
      </span>
      <div className="skill-bars">
        {skillsList.map((skills) => {
          return <Skillbars skills={skills} key={skills.id} />;
        })}
      </div>
    </section>
  );
}

function Skillbars(props) {
  return (
    <div className="skill-bar">
      <img
        className="skill-image"
        src={props.skills.image}
        alt="skill bar"
      ></img>
      <div className="skillbar-text">
        <h2>{props.skills.skillHeading}</h2>
        <p>{props.skills.skillDesc}</p>
      </div>
    </div>
  );
}

export default Skills;
