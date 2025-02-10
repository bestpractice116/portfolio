import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import html from '../../../asset/logos/html.png';
import css from '../../../asset/logos/css.png';
import javascript from '../../../asset/logos/javascript.png';
import react from '../../../asset/logos/react.png';
import nextjs from '../../../asset/logos/nextjs.webp';
import nestjs from '../../../asset/newlogos/nestjs.png';
import aws from '../../../asset/newlogos/AWS-Logo.png';
import builderio from '../../../asset/newlogos/builderio.png';
import csharp from '../../../asset/newlogos/c-sharp.png';
import cplus from '../../../asset/newlogos/C++.png';
import Gatsby from '../../../asset/newlogos/Gatsby.png';
import jquery from '../../../asset/newlogos/jquery-logo.png';
import laravel from '../../../asset/newlogos/laravel.png';
import Mongodb from '../../../asset/newlogos/Mongodb.png';
import mysql from '../../../asset/newlogos/mysql.png';
import php from '../../../asset/newlogos/PHP-logo.png';
import python from '../../../asset/newlogos/Python.png';
import sanity from '../../../asset/newlogos/sanity.png';
import scss from '../../../asset/newlogos/scss.png';
import ReactNative from '../../../asset/newlogos/ReactNative.png';
import tailwind from '../../../asset/logos/tailwind.png';
import firebase from '../../../asset/logos/firebase.png';
import figma from '../../../asset/logos/figma.png';
import photoshop from '../../../asset/logos/photoshop.png';
import illustrator from '../../../asset/logos/illustrator.png';
import redux from '../../../asset/logos/redux.png';
import typescript from '../../../asset/logos/typescript.png';
import Image from 'next/image';
import Wrapper from '../../shared/wrapper/Wrapper';

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100 }
  },
  hover: { scale: 1.2, transition: { type: 'spring', stiffness: 300 } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // stagger the appearance of child elements
      delayChildren: 0.2
    }
  }
};

const Skills = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const skillsData = [
    { id: 1, icon: html, name: 'HTML' },
    { id: 2, icon: css, name: 'CSS' },
    { id: 3, icon: scss, name: 'SCSS' },
    { id: 4, icon: sanity, name: 'Sanity' },
    { id: 5, icon: builderio, name: 'Builder.io' },
    { id: 6, icon: cplus, name: 'C++' },
    { id: 7, icon: csharp, name: 'C#' },
    { id: 8, icon: python, name: 'Python' },
    { id: 9, icon: php, name: 'PHP' },
    { id: 10, icon: javascript, name: 'JavaScript' },
    { id: 11, icon: typescript, name: 'TypeScript' },
    { id: 12, icon: jquery, name: 'Jquery' },
    { id: 13, icon: react, name: 'React' },
    { id: 14, icon: nextjs, name: 'Next.js' },
    { id: 15, icon: Gatsby, name: 'Gatsby' },
    { id: 16, icon: nestjs, name: 'Nest.js' },
    { id: 16, icon: ReactNative, name: 'React Native' },
    { id: 17, icon: redux, name: 'Redux' },
    { id: 18, icon: tailwind, name: 'TailwindCSS' },
    { id: 19, icon: laravel, name: 'Laravel' },
    { id: 20, icon: Mongodb, name: 'Mongodb' },
    { id: 21, icon: mysql, name: 'MYSQL' },
    { id: 22, icon: firebase, name: 'Firebase' },
    { id: 23, icon: figma, name: 'Figma' },
    { id: 24, icon: photoshop, name: 'Photoshop' },
    { id: 25, icon: aws, name: 'AWS' },
    { id: 26, icon: illustrator, name: 'Illustrator' }
  ];

  return (
    <Wrapper>
      <motion.div
        id="skills"
        ref={ref}
        className="div-container flex flex-wrap justify-center items-center gap-x-6 xl:gap-x-14 gap-y-6 xl:gap-y-10  py-20 xl:px-0 px-3"
        // variants={containerVariants}
        // initial="hidden"
        // animate={controls}
      >
        {skillsData.map((skill) => (
          <motion.div
            key={skill.id}
            className="flex flex-col xl:gap-2 justify-center items-center"
            variants={skillVariants}
            whileHover="hover"
          >
            <div className="bg-gray-500/10 p-3 xl:p-4 rounded-xl flex justify-center items-center text-center">
              <Image
                src={skill.icon}
                alt={skill.name}
                className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] object-contain"
              />
            </div>
            <p className="text-center">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </Wrapper>
  );
};

export default Skills;
