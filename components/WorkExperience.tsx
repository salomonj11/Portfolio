import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

function Experience({}: Props) {
  // Set up state hook to hold the current window height
  const [windowHeight, setWindowHeight] = useState(0);

  // Use an effect hook to update the window height on window resize
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

  // Set a boolean variable to determine whether or not to display the text
  const shouldDisplayText = windowHeight > 900;

  // Return the component with Framer Motion animation and ExperienceCard component
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      {/* Display the text if the window height is greater than 900 pixels aka laptops, otherwise don't display it. */}
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
