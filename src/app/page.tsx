import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkStyle from "@/components/WorkStyle";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <WorkStyle />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}