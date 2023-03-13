import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

export default function Header({}: Props) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  if (
    !shouldRender ||
    (typeof window !== 'undefined' && window.innerWidth <= 640)
  ) {
    return null;
  }

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
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
          duration: 1.5,
        }}
        className="flex flex-row items-center space-x-4"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/salomonj11"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/jesus-salomon/"
          fgColor="gray"
          bgColor="transparent"
        />
        <a
          href="https://salomonjesus.com/JesusSalomonResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h9l5 5v11a2 2 0 01-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
        </a>
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="upperCase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch!
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
