import "./OurProject.css";
import Header from "./Header";
import project from "../../assets/project.png";
const OurProject = () => {
  return (
    <div className="our-project">
      <Header title="OUR PROJECT" subtitle="WHY WE ARE BEST" />
      <div className="project-content">
        <img src={project} alt="Project" className="project-image" />
        <div className="project-description">
          <h3>Genderless Kei – Japan’s Hot</h3>
          <p>
            Set to launch on the manufacturer’s new A330neo aircraft in 2017,
            it’s offering lots of...
          </p>
          <div className="project-highlight">
            <h4>Better Strategy & Quality</h4>
            <p>
              Set to launch on the manufacturer’s new A330neo aircraft in 2017,
              it’s offering lots of...
            </p>
          </div>
          <div>
            <h3>Genderless Kei – Japan’s Hot</h3>
            <p>
              Set to launch on the manufacturer’s new A330neo aircraft in 2017,
              it’s offering lots of...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
