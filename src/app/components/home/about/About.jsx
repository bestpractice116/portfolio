import React from 'react';
import Wrapper from '../../shared/wrapper/Wrapper';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import user from '../../../asset/user.jpg';
import Heading from '../../shared/heading/Heading';
const About = () => {
  const imageVariants = {
    hover: {
      scale: 1.1,
      rotate: 2,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.01, -0.05, 0.95]
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.3 }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div
      id="about"
      className="div-container bg-primary-gray w-full px-3 lg:px-0"
    >
      <Wrapper>
        <div className="flex flex-col justify-center items-center w-full min-h-screen py-20">
          <Heading tag="h1" text="About Me" styleType="h1" />
          <Heading
            tag="h2"
            text="Unveiling the Layers of My Story"
            styleType="h2"
          />
          <div className="w-full  justify-center justify-items-center mt-10 lg:mt-20">
            <motion.div
              className="w-full lg:w-[90%] flex flex-col justify-start items-start"
              initial="hidden"
              animate="visible"
              variants={statsVariants}
            >
              <p className="text-xl text-secondary-text font-medium">
                My passion lies in creating strong business solutions that aid
                business growth. Whether it is a website to boost brand
                publicity or software solutions that streamline otherwise manual
                processes, I love taking brands from point A to the their dreamy
                point B and iteratively improve as time goes on. From writing my
                first lines of code back in late 2019 to this point I have
                continually refined my development skills overtime picking up
                UI/UX design on the way & solving complex challenges increasing
                the complexity as time goes by to ensure improvement. Each
                challenge is unique so I ensure that I learn and grow through
                each one ensuring that I not only put in my best but also
                deliver solutions that businesses are proud to call their own.
              </p>
              <div className="flex flex-wrap justify-center gap-10 w-full my-4">
                <motion.div
                  variants={statItemVariants}
                  className="flex flex-col"
                >
                  <p className="text-primary-white text-7xl font-semibold">
                    06+
                  </p>
                  <p className="text-secondary-text text-xl font-normal">
                    Years Experience
                  </p>
                </motion.div>
                <motion.div
                  variants={statItemVariants}
                  className="flex flex-col"
                >
                  <p className="text-primary-white text-7xl font-semibold">
                    20+
                  </p>
                  <p className="text-secondary-text text-xl font-normal">
                    Projects Completed
                  </p>
                </motion.div>
                <motion.div
                  variants={statItemVariants}
                  className="flex flex-col"
                >
                  <p className="text-primary-white text-7xl font-semibold">
                    10+
                  </p>
                  <p className="text-secondary-text text-xl font-normal">
                    Satisfied Clients
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
