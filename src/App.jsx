import "./App.module.css";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import AboutCompany from "./components/about-company/AboutCompany";
import OurProjects from "./components/our-projects/OurProjects";
import ContactUs from "./components/contact-us/ContactUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div id="main-app" className="main-app">
      <Navbar />
      <Landing />
      <AboutCompany />
      <OurProjects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
