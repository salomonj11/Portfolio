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

      <div className="grid grid-cols-4 gap-5 pt-20">
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
          imgSrc="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png"
          progress={34}
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
        <Skill
          imgSrc="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png"
          progress={38}
        />
        <Skill
          imgSrc="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png"
          progress={46}
        />
        <Skill
          imgSrc="https://cdn.thenewstack.io/media/2021/06/7c546588-nextjs.png"
          progress={37}
        />
        <Skill
          imgSrc="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-shadow-tal-revivo.png"
          progress={86}
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
