import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

function Experience({}: Props) {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shouldDisplayText = windowHeight > 900;

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      {shouldDisplayText && (
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Experience
        </h3>
      )}

      <div className="w-full p-10 flex justify-center">
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
