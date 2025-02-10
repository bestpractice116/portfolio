import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import Wrapper from '../../shared/wrapper/Wrapper';
import img0 from '../../../asset/portfolio_0.png';
import img1 from '../../../asset/portfolio_1.png';
import img2 from '../../../asset/portfolio_2.png';
import img3 from '../../../asset/portfolio_3.png';
import img4 from '../../../asset/portfolio_4.png';
import img5 from '../../../asset/portfolio_5.png';
import img6 from '../../../asset/portfolio_6.png';
import img7 from '../../../asset/portfolio_7.png';
import img8 from '../../../asset/portfolio_8.png';
import img9 from '../../../asset/portfolio_9.png';

import { useRouter } from 'next/navigation';
const Projects = () => {
  const [showMore, setShowMore] = React.useState(false);
  const router = useRouter();
  const portfolioCards = [
    {
      id: 0,
      image: img0,
      link: 'https://blipphoto.com/',
      liveLink: 'https://blipphoto.com/',
      githubLink: 'https://github.com/bestpractice116/'
    },
    {
      id: 1,
      image: img1,
      link: 'https://e-course-dashboard.vercel.app',
      liveLink: 'https://e-course-dashboard.vercel.app',
      githubLink: 'https://github.com/bestpractice116/e-course-dashboard'
    },
    {
      id: 2,
      image: img2,
      link: 'https://empire-burgue.vercel.app',
      liveLink: 'https://empire-burgue.vercel.app',
      githubLink: 'https://github.com/bestpractice116/empire-burger'
    },
    {
      id: 3,
      image: img3,
      link: 'https://nextjs-woocommerce-restapi-virid.vercel.app',
      liveLink: 'https://nextjs-woocommerce-restapi-virid.vercel.app/',
      githubLink: 'https://github.com/bestpractice116/nextjs-woocommerce'
    },
    {
      id: 4,
      image: img4,
      link: 'https://nextjs-sanity-ecommerce-ecru.vercel.app',
      liveLink: 'https://nextjs-sanity-ecommerce-ecru.vercel.app',
      githubLink: 'https://github.com/bestpractice116/nextjs-sanity-ecommerce'
    },
    {
      id: 5,
      image: img5,
      link: 'https://krycha-store.vercel.app',
      liveLink: 'https://krycha-store.vercel.app',
      githubLink: 'https://github.com/bestpractice116/firebase-nextjs-ecommerce'
    },
    {
      id: 6,
      image: img6,
      link: 'https://nextjs-waitlist-page.vercel.app',
      liveLink: 'https://nextjs-waitlist-page.vercel.app',
      githubLink: 'https://github.com/bestpractice116/nextjs-waitlist-page'
    },
    {
      id: 7,
      image: img7,
      link: 'https://cofffee-shop.vercel.app',
      liveLink: 'https://cofffee-shop.vercel.app',
      githubLink: 'https://github.com/bestpractice116/cofffee-shop'
    },
    {
      id: 8,
      image: img8,
      link: 'https://digital-marketing-website-nine.vercel.app',
      liveLink: 'https://digital-marketing-website-nine.vercel.app',
      githubLink: 'https://github.com/bestpractice116/digital-marketing'
    },
    {
      id: 9,
      image: img9,
      link: 'https://github.com/bestpractice116/NFT-marketing',
      liveLink: 'https://github.com/bestpractice116/NFT-marketing',
      githubLink: 'https://github.com/bestpractice116/NFT-marketing'
    }
    // You can add more cards if necessary
  ];

  // Control how many cards are initially shown
  const visibleCards = showMore ? portfolioCards : portfolioCards.slice(0, 4);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const h1Ref = React.useRef(null);
  const h2Ref = React.useRef(null);
  const isH1InView = useInView(h1Ref, { once: true });
  const isH2InView = useInView(h2Ref, { once: true });

  return (
    <Wrapper>
      <div
        id="portfolio"
        className="div-container min-h-screen h-full text-center items-start justify-start w-full flex md:mt-32 mt-20 lg:mt-32 lg:px-0 md:px-0 px-3"
      >
        <div className="flex flex-col w-full justify-start items-start text-start">
          <motion.h1
            ref={h1Ref}
            className="text-primary-green text-lg font-medium"
            variants={textVariants}
            initial="hidden"
            animate={isH1InView ? 'visible' : 'hidden'}
          >
            Portfolio
          </motion.h1>
          <motion.h2
            ref={h2Ref}
            className="text-primary-white text-[40px] sm:text-[40px] md:text-[40px] xl:text-7xl font-semibold py-3"
            variants={textVariants}
            initial="hidden"
            animate={isH2InView ? 'visible' : 'hidden'}
          >
            My Projects
          </motion.h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-6 md:mt-10 md:gap-x-20 lg:gap-x-20 gap-y-10 lg:gap-y-16 w-full">
            {visibleCards.map((e, index) => (
              <motion.div
                key={e.id}
                className={`w-full h-[400px]  md:max-h-[400px] rounded-2xl cursor-pointer relative overflow-hidden group ${
                  index % 2 === 1 ? 'xl:-mt-[10rem]' : ''
                }`}
                variants={textVariants}
                initial="hidden"
                animate={isH1InView ? 'visible' : 'hidden'}
              >
                <Image
                  src={e.image}
                  alt={e.portfolioName}
                  width={1080}
                  height={1080}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-110 ease-in-out duration-500 transition-all"
                />
                <div className="flex items-center bg-gradient-to-t h-[50%] from-black via-black/50 to-transparent justify-center w-full gap-5 translate-y-56 group-hover:-translate-y-40 ease-linear transition-all duration-300">
                  {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                  <button
                    onClick={() => window.open(e.githubLink, '_blank')}
                    className="bg-primary-gray border border-primary-white/20  text-white hover:scale-110 ease-in-out duration-150 transition-all  rounded-xl w-14 h-14 flex justify-center items-center"
                  >
                    <FaGithub size={25} />
                  </button>
                  {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                  <button
                    onClick={() => window.open(e.liveLink, '_blank')}
                    className="bg-primary-gray text-white  border border-primary-white/20 hover:scale-110 ease-in-out duration-150 transition-all  rounded-xl w-14 h-14  flex justify-center items-center"
                  >
                    <FiLink size={25} />
                  </button>
                </div>
              </motion.div>
            ))}

            <div className="hidden md:block xl:block" />

            {/* Show More/Show Less button */}
            <div className="flex justify-center mb-10 xl:-mt-[10rem]">
              <motion.button
                onClick={() => setShowMore(!showMore)}
                className="border text-lg max-h-[60px] lg:text-xl font-semibold hover:bg-primary-white hover:text-primary-gray transition-all ease-in-out duration-300 border-secondary-text/20 rounded-lg lg:rounded-xl py-3 lg:py-3 px-8 md:px-14 text-primary-white"
              >
                {showMore ? 'Show Less' : 'More Projects'}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
