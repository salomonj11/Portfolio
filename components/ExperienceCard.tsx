import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#282828] p-10">
      <motion.img
        initial={{
          opacity: 0,
          y: 100,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="w-32 h-32 xl:w-[140px] xl:h-[140px] rounded-md hidden md:block"
        src="https://i.imgur.com/FcTfipq.png"
        alt=""
      />

      <div className="px-0 md:px-10 sm:justify-center md:justify-start text-center md:text-left">
        <h4 className="text-4xl font-ligh">Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">Hike Medical</p>
        <div className="flex justify-center sm:justify-start space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://img.icons8.com/color/512/mongodb.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://img.icons8.com/nolan/512/express-js.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://img.icons8.com/plasticine/512/react.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://img.icons8.com/fluency/512/node-js.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-500">
          dec 2022 - Present
        </p>
        <div className="overflow-x-auto">
          <ul className="space-y-2 ml-2 sm:ml-5 text-sm md:text-base leading-7 sm:leading-8 p-2 sm:p-0">
            <li className="list-disc my-2 sm:my-0 mr-1">
              Co-lead engineer of the Hike Medical Web-App and Admin
              Portal.
            </li>
            <li className="list-disc my-2 sm:my-0 mr-2">
              Integrated Intercom, Mixpanel, and Google Analytics into
              all Hike Medical Platforms to improve data insights and
              product offerings.
            </li>
            <li className="list-disc my-2 sm:my-0 mr-7">
              Improved existing platforms and network capabilities to
              handle massive growth, enabling self-serve computing,
              reporting solutions, and interactive querying for
              enhanced data analysis and new product development.
            </li>
            <li className="list-disc my-2 sm:my-0 mr-2">
              Created comprehensive documentation and best practices
              for git deployment and programming, enabling smooth
              onboarding for new engineers, improving productivity for
              current engineers, and ensuring code consistency,
              maintainability, and scalability for present and future
              engineering efforts.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
