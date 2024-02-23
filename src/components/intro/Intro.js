import "./Intro.css";
import profile from "../../assets/profile.png";
import bg from "../../assets/bg.jpg";
import contact from "../../assets/contact.png";
import { Link } from "react-scroll";

function Intro() {
  return (
    <section id="intro">
      <div className="intro-content">
        <span className="hello">Hello,</span>
        <span className="intro-text">
          I'm <span className="intro-name">Mamta</span>
        </span>
        <span>MCA Graduate</span>
        <p className="intro-para">
          I'm a Mca graduate with experience in front-end <br /> development and
          problem solving
        </p>
        <Link>
          <button
            className="btn"
            onClick={() => {
              document
                .querySelector("#contact-page")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img src={contact} alt="Hire me" className="btn-image"></img>Hire Me
          </button>
        </Link>
      </div>
      <img src={profile} alt="profile" className="bg"></img>
    </section>
  );
}

export default Intro;
