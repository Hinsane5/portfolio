import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="lg:pl-40">
      <Hero />
      <About />
      <Education />
      <Experience />
      <ProjectsPreview />
      <Contact />
      <Footer />
    </main>
  );
}
