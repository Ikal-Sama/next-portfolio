import Banner from "@components/Banner";
import Contact from "@components/Contact";
import Design from "@components/Design";
import Projects from "@components/Projects";
import Skills from "@components/Skills";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <Skills />
      <Projects />
      <Design />
      <Contact />
    </div>
  );
}
