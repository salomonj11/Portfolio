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
        src="https://media-exp1.licdn.com/dms/image/C4D03AQF5AqO399Dnrw/profile-displayphoto-shrink_400_400/0/1619737148295?e=1671062400&v=beta&t=9SQvZx-zLDpH9qi_blABKIof9kyPWtGhiLc7ckME9hQ"
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Natus, blanditiis. Suscipit laudantium iure quaerat dolores
          asperiores! Consequuntur repellendus iure fugit iusto vero
          laudantium nisi, eum aspernatur temporibus corrupti ullam
          odio! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Hic architecto sequi dolores voluptatem quia veritatis
          rem doloribus non, similique fuga, soluta delectus eveniet
          ut quis molestiae. Sequi illum sit eligendi. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Ex, dolore
          suscipit. Repellat accusantium dolores nulla totam quis esse
          modi aliquid id sed magni voluptate odit tempore, expedita,
          cumque similique molestiae!
        </p>
      </div>
    </motion.div>
  );
}

export default About;
