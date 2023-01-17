import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Skills from '../components/Skills';

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>My Portfolio</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section>
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
