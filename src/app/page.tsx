import SmoothScroll from '@/components/SmoothScroll';
import Scene from '@/components/canvas/Scene';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Journey from '@/components/sections/Journey';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative w-full bg-black min-h-screen">
      <SmoothScroll>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Scene />
        </div>

        <div className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Journey />
          <Contact />
        </div>
      </SmoothScroll>
    </main>
  );
}
