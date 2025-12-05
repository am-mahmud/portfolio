import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Projects from "@/components/projects/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
        
    </div>
  );
}
