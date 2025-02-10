'use client';
import Navbar from './components/header/Header';
import CustomCursor from '../app/components/shared/custom-cursor/custom-cursor';
import Hero from '../app/components/home/hero/Hero';
import AnimText from './components/shared/parallaxtext/AnimText';
import Projects from './components/home/projects/Projects';
import About from './components/home/about/About';
import Skills from './components/home/skills/Skills';
import Services from './components/home/services/Services';
// import Testimonial from './components/home/testimonial/Testimonial';
import Footer from './components/footer/Footer';
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <AnimText text={'Creative FullStack Developer'} />
      <Projects />
      <About />
      <div className="min-h-screen flex flex-col justify-center items-center pt-20 xl:pt-0">
        <AnimText text={'MY EXPERIENCE SPANS BOTH FRONTEND AND BACKEND'} />
        <Skills />
      </div>
      <Services />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}
