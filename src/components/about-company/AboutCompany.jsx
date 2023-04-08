import "./AboutCompany.css";
import { createEffect } from "solid-js";
import { isEnglish } from "../navbar/Navbar";
import aboutCompany1 from "../../assets/about-company-1.jpeg";
import project2 from "../../assets/project-2.jpg";
import project3 from "../../assets/project-3.jpeg";
import project4 from "../../assets/project-4.jpeg";
import project5 from "../../assets/project-5.jpeg";
import project6 from "../../assets/project-6.jpeg";
import octoperMall from "../../assets/octoper-mall.jpg";
import logo from "../../assets/logo.png";

const AboutCompany = () => {
  const text = {
    aboutCompany: ["About Company", "حول الشركة"],
    whatCompanyOffers: ["What Company Offers", "ما تقدمه الشركة"],
    boardOfDirectors: ["Board of Directors", "أعضاء مجلس الإدارة"],
    paragraph1: [
      "<span>Real estate development</span> is what the company offers by setting a vision And the strategic idea and the work of feasibility studies for the projects that will be Established or developed by the company in order to obtain real estate units Successfully meet customer needs",
      "<span>التطوير العقاري</span> هو ما تقدمه الشركة بوضع الرؤية والفكرة الاستراتيجية وعمل دراسات الجدوى للمشروعات التي سيتم انشاؤها أو تطويرها من خلال الشركة من أجل الحصول على وحدات عقارية ناجحة تلبي احتياجات العميل",
    ],
    paragraph2: [
      "It is an Egyptian joint stock company headed by <span>Eng / Hassan Abdel Wahhab</span> and member The delegate <span>Eng / Ayman Abdel Hai Jammaz</span> has established the company To carry out development work such as commercial malls And the development of existing facilities (villas - administrative buildings) in order to raise the value of Real estate by creating successful units that satisfies all tastes",
      "هي شركة مساهمة مصرية يرئسها <span>م / حسن عبدالوهاب</span> والعضو المنتدب <span>م / أيمن عبد الحي جماز</span> وقد أنشأت الشركة للقيام بأعمال التنمية والتطوير من خلال إنشاء المولات التجارية وتطوير المنشات القائمة ( فيلات - مباني إدارية ) من أجل رفع قيمة العقار وذلك بإنشاء وحدات عقارية ناجحة تتناسب مع إحتياجات المجتمع وتلبي جميع الأذواق",
    ],
  };
  const projects = [
    {
      name: ["Image Mall", "مول إيميج"],
      image: octoperMall,
    },
    {
      name: ["Jannet masr ElSheikh Zayed", "جنة مصر بالشيخ زايد"],
      image: aboutCompany1,
    },
    {
      name: [
        "AlEskan ALEgtmaey ElSheikh Zayed",
        "الإسكان الإجتماعي بالشيخ زايد",
      ],
      image: project2,
    },
    { name: ["Swary Alex", "صواري بالإسكندرية"], image: project3 },
    {
      name: [
        "Mogamaa AlSenaat ElSheikh Zayed",
        "مجمع الصناعات بالعاشر من رمضان",
      ],
      image: project4,
    },
    {
      name: ["Alnil Schools ElSheikh Zayed", "مدارس النيل بالشيخ زايد"],
      image: project5,
    },
    { name: ["Youth Center AlSadat", "مركز شباب السادات"], image: project6 },
  ];

  // const { projects, currentIndex } = useSelector((state) => state.projects);

  createEffect(() => {
    if (isEnglish()) {
      document.body.style.setProperty("--text-align", "start");
      document.getElementById("paragraph-1").innerHTML = text.paragraph1[0];
      document.getElementById("paragraph-2").innerHTML = text.paragraph2[0];
    } else {
      document.body.style.setProperty("--text-align", "end");
      document.getElementById("paragraph-1").innerHTML = text.paragraph1[1];
      document.getElementById("paragraph-2").innerHTML = text.paragraph2[1];
    }
  });

  return (
    <div
      id="about-company"
      className="about-company"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className="section-title">
        <p>{isEnglish() ? text.aboutCompany[0] : text.aboutCompany[1]}</p>
      </div>
      <div className="cards-container">
        <div
          className="card"
          style={{ backgroundImage: `url(${projects[0].image})` }}
        ></div>
        <div className="card text">
          <h2>
            {isEnglish()
              ? text.whatCompanyOffers[0]
              : text.whatCompanyOffers[1]}
          </h2>
          <div>
            <p id="paragraph-1"></p>
          </div>
        </div>
        <div className="card fourth text">
          <h2>
            {isEnglish() ? text.boardOfDirectors[0] : text.boardOfDirectors[1]}
          </h2>
          <div>
            <p id="paragraph-2"></p>
          </div>
        </div>
        <div
          className="card third"
          style={{ backgroundImage: `url(${projects[0].image})` }}
        ></div>
      </div>
    </div>
  );
};

export default AboutCompany;
