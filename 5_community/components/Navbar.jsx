'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';



const Navbar = () => (

  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >

      <h2 className="font-extrabold text-[26px] leading-[30.24px] text-white">
        METAVERSUS
      </h2>
      <div className='text-gray-300 text-[24px] font-semibold leading-[30.24px] md:block hidden'>
        Track
      </div>
      <div className='text-gray-300 text-[24px] font-semibold leading-[30.24px] md:block hidden'>
        Remove
      </div>
      <div className='text-white text-[24px] font-semibold leading-[30.24px] md:block hidden'>
        Community
      </div>
      <div className='text-gray-300 text-[24px] font-semibold leading-[30.24px] md:block hidden'>
        Learn
      </div>
      <div className='text-gray-300 text-[24px] font-semibold leading-[30.24px] md:block hidden'>
        Shop
      </div>
      <div>
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[25px] h-[25px] object-contain md:hidden "
        />

      </div>
    </div>

  </motion.nav>

);

export default Navbar;