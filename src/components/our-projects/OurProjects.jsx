import "./OurProjects.css";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setCurrentIndex } from "../../redux/projectsReducer";

const OurProjects = () => {
  // const { projects, currentIndex } = useSelector((state) => state.projects);
  // const { isEnglish } = useSelector((state) => state.language);
  // const dispatch = useDispatch();

  // const handleMovingRight = () => {
  //   const isLast = currentIndex === projects.length - 1;
  //   const newIndex = isLast ? 0 : currentIndex + 1;
  //   dispatch(setCurrentIndex(newIndex));
  //   document.getElementById(
  //     "projects-container"
  //   ).style.left = `calc(-100vw * ${newIndex})`;
  // };

  // const handleMovingLeft = () => {
  //   const isFirst = currentIndex === 0;
  //   const newIndex = isFirst ? projects.length - 1 : currentIndex - 1;
  //   dispatch(setCurrentIndex(newIndex));
  //   document.getElementById(
  //     "projects-container"
  //   ).style.left = `calc(-100vw * ${newIndex})`;
  // };

  // function resizeListener() {
  //   document.getElementById(
  //     "projects-container"
  //   ).style.left = `calc(-100vw * ${currentIndex})`;
  // }
  // window.addEventListener("resize", resizeListener);

  // useEffect(() => {
  //   document.getElementById("projects-container").style.width = `${
  //     projects.length * 100
  //   }vw`;
  // }, [projects]);

  return (
    <div id="our-projects" className="our-projects">
      <i
        className="fa-solid fa-angle-left left-arrow"
        onClick={() => handleMovingLeft()}
      ></i>
      <i
        className="fa-solid fa-angle-right right-arrow"
        onClick={() => handleMovingRight()}
      ></i>

      <div id="projects-container" className="projects-container">
        {/* {projects.map((project) => (
          <div
            className="project"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="project-card">
              <p>{isEnglish ? project.name[0] : project.name[1]}</p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default OurProjects;
