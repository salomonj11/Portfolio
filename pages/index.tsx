/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>My Portfolio</title>
      </Head>

      <Header />
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <WorkExperience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-8 w-full cursor-pointer">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.4,
            }}
            className="flex items-center justify-center"
          >
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://img.icons8.com/color-glass/512/home.png"
              alt=""
            />
          </motion.div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
