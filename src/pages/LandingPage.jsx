import Navbar from "@/components/app/navbar";
import Hero from "./sections/hero";
import Projects from "./sections/projects";
import About from "./sections/about";
import Skills from "./sections/skills";
import Experience from "./sections/experience";
import Education from "./sections/education";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </main>
  );
}
