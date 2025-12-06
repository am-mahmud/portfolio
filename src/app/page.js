import Education from "@/components/education/Education";
import Hobbies from "@/components/hobbies/Hobbies";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Projects from "@/components/projects/Projects";
import Technologies from "@/components/technologies/Technologies";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Technologies></Technologies>
      <Education></Education>
      <Hobbies></Hobbies>
        
    </div>
  );
}
