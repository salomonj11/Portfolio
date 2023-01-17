import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        src="https://salomonjesus.com/pics_and_memes/Thats%20me.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">
            little
          </span>{' '}
          background
        </h4>
        <p className="text-base">
          I&apos;m Jesus. 🤠 I graduated from Loyola University
          Chicago in 2021 with a degree in biology with an emphasis in
          Cellular & Molecular Neuroscience. While at Loyola I learned
          computational methods to understand neural processing in the
          brain. This led me to my discovery of programming and
          eventually falling in love with it. I am well-versed in
          technology and writing code to create systems that are
          reliable and user-friendly. I am a confident communicator,
          strategic thinker, and innovative creator to develop
          software that is customized to meet a company&apos;s
          organizational needs, highlight their core competencies, and
          further their success ✨. I am also a quick learner and
          always looking to learn new things. My curriculum vitae (CV)
          can be found{' '}
          <span className="underline decoration-[#F7AB0A]/50">
            <a href="JesusSalomonResume.pdf">here</a>.
          </span>{' '}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
