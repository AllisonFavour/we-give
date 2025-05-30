import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Main from "./components/Main.jsx";
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

      <div className="min-h-screen">
        <Main />
        <About />
        <Services />
        <Causes />
        <Events />
        <Testimonials />
        <Faqs />
        <Footer />
      </div>
    </>
  );
}

export default App;
