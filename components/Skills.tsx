import { motion } from 'framer-motion';
import React from 'react';
import Skill from './Skill';

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5 pt-20 ">
        <Skill
          imgSrc="https://www.logo.wine/a/logo/PostgreSQL/PostgreSQL-Logo.wine.svg"
          progress={69}
          directionLeft={true}
        />
        <Skill
          imgSrc="https://img.icons8.com/plasticine/512/react.png"
          progress={77}
          directionLeft={true}
        />
        <Skill
          imgSrc="https://img.icons8.com/color/512/mongodb.png"
          progress={52}
          directionLeft={true}
        />
        <Skill
          imgSrc="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
          progress={81}
          directionLeft={true}
        />
        <Skill
          imgSrc="https://img.icons8.com/color/512/java-coffee-cup-logo.png"
          progress={14}
          directionLeft={true}
        />
        <Skill
          imgSrc="https://img.icons8.com/fluency/512/node-js.png"
          progress={76}
          directionLeft={true}
        />
        <Skill
          imgSrc="https://img.icons8.com/nolan/512/express-js.png"
          progress={84}
        />
        {/* Typescript */}
        <Skill
          imgSrc="https://i.imgur.com/Mrdpg3t.png"
          progress={38}
        />
        {/* Tailwind CSS */}
        <Skill
          imgSrc="https://i.imgur.com/nrfN7OQ.png"
          progress={46}
        />
        {/* Next Js */}
        <Skill
          imgSrc="https://i.imgur.com/0HV5vlL.png"
          progress={37}
        />
        <Skill
          imgSrc="https://img.icons8.com/color/512/c-sharp-logo.png"
          progress={14}
        />
        <Skill
          imgSrc="https://img.icons8.com/external-those-icons-lineal-color-those-icons/512/external-Git-social-media-those-icons-lineal-color-those-icons.png"
          progress={84}
        />
      </div>
    </motion.div>
  );
}

export default Skills;
