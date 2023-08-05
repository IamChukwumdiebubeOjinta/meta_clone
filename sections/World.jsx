'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full lg:object-cover sm:object-contain"
        />
        <div className="absolute lg:bottom-20 lg:right-20 sm:bottom-20 sm:right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute lg:top-[30%] lg:left-[15%] sm:top-[30%] sm:left-[15%] p-[6px] rounded-full bg-[#252d49] sm:block hidden">
          <img
            className="w-full h-full rounded-3xl"
            src="./the-upside-down.png"
          />
        </div>
        <div className="absolute lg:top-10 lg:left-20 sm:top-10 sm:left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#d8dbe4]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute lg:top-0 lg:right-[15%] sm:top-0 sm:right-[15%] p-[6px] rounded-full sm:block hidden">
          <img className="w-full h-full rounded-3xl" src="./hawkins-labs.png" />
        </div>
        <div className="absolute lg:top-1/2 lg:left-[45%] sm:top-1/2 sm:left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[rgb(20,20,22)]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
