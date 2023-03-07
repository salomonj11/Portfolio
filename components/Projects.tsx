import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      title: 'Rate My Campsite',
      imageSrc: 'https://i.imgur.com/wybAkeH.png',
      description: 'This is project 1',
      technologies: [
        'Node.JS',
        'EJS',
        'Express',
        'MongoDB + Mongoose',
      ],
      liveDemoLink: 'https://example.com/project1',
      codeLink: 'https://github.com/yourusername/project1',
    },
    {
      id: 2,
      title: 'Project 2',
      imageSrc: 'https://i.imgur.com/ABC123.png',
      description: 'This is project 2',
      technologies: ['React', 'TypeScript', 'Firebase'],
      liveDemoLink: 'https://example.com/project2',
      codeLink: 'https://github.com/yourusername/project2',
    },
    {
      id: 3,
      title: 'Project 3',
      imageSrc: 'https://i.imgur.com/XYZ456.png',
      description: 'This is project 3',
      technologies: ['Vue.js', 'Node.js', 'MongoDB'],
      liveDemoLink: 'https://example.com/project3',
      codeLink: 'https://github.com/yourusername/project3',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={project.id}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-0"
              src={project.imageSrc}
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center -mt-10">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                {project.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project.technologies.map((tech, i) => (
                  <img
                    key={i}
                    className="h-10 w-10"
                    src={`https://img.icons8.com/fluency/512/${tech.toLowerCase()}.png`}
                    alt={`${tech} logo`}
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project.description} The main technologies used were{' '}
                <span className="underline decoration-[#f7ab0a]/50">
                  {project.technologies.join(', ')}.
                </span>{' '}
                The live demo can be found{' '}
                <span className="underline decoration-[#F7AB0A]/50">
                  <a href={project.liveDemoLink}>here</a>.
                </span>{' '}
                The code can be found{' '}
                <span className="underline decoration-[#F7AB0A]/50">
                  <a href={project.codeLink}>here</a>.
                </span>{' '}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
