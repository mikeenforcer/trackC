'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Join" textStyles="text-center" />
      <TitleText title={<>Insight about metaverse</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
    <div className='container  w-full h-[100vh] flex flex-col justify-center items-center'>
      <h1 className='text-center font-extrabold text-secondary-white text-3xl mb-5'>Embed Loaction Map</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.078405559549!2d88.42484061477643!3d22.576170685180895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751a9d9c9e85%3A0x7fe665c781b10383!2sTechno%20Main%20Salt%20Lake!5e0!3m2!1sen!2sin!4v1677145217947!5m2!1sen!2sin"  className='border-0 w-[80%] h-[500px] invert' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
);

export default Insights;