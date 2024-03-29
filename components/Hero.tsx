import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from '../components/BackgroundCircles';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Jesus Salomon",
      'Guy-who-loves-reading.tsx',
      'ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://i.imgur.com/Jk8NsJo.jpg"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-xs lg:text-sm uppercase text-gray-500 pb-2 tracking-[5px]">
          Software Engineer
        </h2>
        <h1 className="text-3xl xl:text-5xl font-semibold px-6 xl:px-12">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5 flex flex-wrap justify-center">
          <div className="flex justify-center">
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="#experience">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
