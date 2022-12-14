import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';
import About from '../components/About';

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>My Portfolio</title>
      </Head>

      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
