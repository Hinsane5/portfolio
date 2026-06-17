import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { BackToTop } from "@/components/layout/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Sidebar />
      <MobileNav />
      <ThemeToggle />
      <BackToTop />

      <main className="lg:pl-40">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
