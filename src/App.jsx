import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Main from "./components/MainSection.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Causes from "./components/Causes.jsx";
import Events from "./components/Events.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Faqs from "./components/Faqs.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />

      <div 
      className="min-h-screen container max-w-7xl mx-auto"
      // className="min-h-screen container mx-auto"
      >
        <Main />
        <About />
        <Services />
        <Causes />
        <Events />
        <Testimonials />
        <Faqs />
        <Footer />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
