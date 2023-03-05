'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex gap-4 "
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[60px] w-[50px] h-[50px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white flex items-center ">
          {title}
        </h4>
        <p className=" font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div
        className="border-green-800 border-[3px] rounded-lg bg-green-100 bg-opacity-60 hover:bg-opacity-90">
        <a href="#" >
          <div className='text-green-700 mx-6 my-2 font-semibold'>
            Join
          </div>
        </a>
      </div>
      
    </div>
  </motion.div>
  
  

  
  
);

export default InsightCard;