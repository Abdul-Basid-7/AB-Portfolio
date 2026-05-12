import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import skills from "./components/skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionWrapper from "./components/SectionWrapper";

function App() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <SectionWrapper>
        <About />
      </SectionWrapper>
      <SectionWrapper>
        <skills />
      </SectionWrapper>
      <SectionWrapper>
        <Projects />
      </SectionWrapper>
      <SectionWrapper>
        <Experience />
      </SectionWrapper>
      <SectionWrapper>
        <Contact />
      </SectionWrapper>
      <Footer />
    </div>
  );
}

export default App;