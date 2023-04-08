import "./OurProjects.css";
import { createSignal, createEffect } from "solid-js";
import { isEnglish } from "../navbar/Navbar";
import aboutCompany1 from "../../assets/about-company-1.jpeg";
import project2 from "../../assets/project-2.jpg";
import project3 from "../../assets/project-3.jpeg";
import project4 from "../../assets/project-4.jpeg";
import project5 from "../../assets/project-5.jpeg";
import project6 from "../../assets/project-6.jpeg";
import octoperMall from "../../assets/octoper-mall.jpg";

export const [projects, setProjects] = createSignal([
  {
    name: ["Image Mall", "مول إيميج"],
    image: octoperMall,
  },
  {
    name: ["Jannet masr ElSheikh Zayed", "جنة مصر بالشيخ زايد"],
    image: aboutCompany1,
  },
  {
    name: ["AlEskan ALEgtmaey ElSheikh Zayed", "الإسكان الإجتماعي بالشيخ زايد"],
    image: project2,
  },
  { name: ["Swary Alex", "صواري بالإسكندرية"], image: project3 },
  {
    name: ["Mogamaa AlSenaat ElSheikh Zayed", "مجمع الصناعات بالعاشر من رمضان"],
    image: project4,
  },
  {
    name: ["Alnil Schools ElSheikh Zayed", "مدارس النيل بالشيخ زايد"],
    image: project5,
  },
  { name: ["Youth Center AlSadat", "مركز شباب السادات"], image: project6 },
]);
export const [currentIndex, setCurrentIndex] = createSignal(0);

const OurProjects = () => {
  const handleMovingRight = () => {
    const isLast = currentIndex() === projects().length - 1;
    const newIndex = isLast ? 0 : currentIndex() + 1;
    setCurrentIndex(newIndex);
    document.getElementById(
      "projects-container"
    ).style.left = `calc(-100vw * ${newIndex})`;
  };

  const handleMovingLeft = () => {
    const isFirst = currentIndex() === 0;
    const newIndex = isFirst ? projects().length - 1 : currentIndex() - 1;
    setCurrentIndex(newIndex);
    document.getElementById(
      "projects-container"
    ).style.left = `calc(-100vw * ${newIndex})`;
  };

  function resizeListener() {
    document.getElementById(
      "projects-container"
    ).style.left = `calc(-100vw * ${currentIndex})`;
  }
  window.addEventListener("resize", resizeListener);

  createEffect(() => {
    document.getElementById("projects-container").style.width = `${
      projects().length * 100
    }vw`;
  });

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
        {projects().map((project) => (
          <div
            className="project"
            style={{ "background-image": `url(${project.image})` }}
          >
            <div className="project-card">
              <p>{isEnglish() ? project.name[0] : project.name[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
