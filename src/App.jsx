import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Domains from "./components/Domains";
import Activities from "./components/Activities";
import Projects from "./components/Projects";
import Ecosystem from "./components/Ecosystem";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Domains />
        <Activities />
        <Projects />
        <Ecosystem />
        <Resources />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
