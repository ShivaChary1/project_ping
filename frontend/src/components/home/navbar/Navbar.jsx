import React, { useState } from 'react';
import './navbar.css';
import logo from '../../../assets/logo_Ping.svg';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');

  const handleClick = (e, navItem) => {
    e.preventDefault();
    setActive(navItem);
  };

  return (
    <motion.div initial={{y:"-100px"}} animate={{y:"0px"}} transition={{duration:2, type : "spring", mass : 0.8 }} className="fixed nav_bar flex flex-row items-center justify-around w-screen h-20">
      <img src={logo} className="w-46 ml-2 h-full mt-2" alt="Ping Logo" />

      <div className="pt-4 navigation flex flex-row h-8 justify-start items-center">
        {['Why us?', 'Features', 'Contact'].map((navItem) => (
          <a
            key={navItem}
            className={`navi_btn text-white text-2xl ${
              active === navItem ? 'navi_spl' : ''
            }`}
            onClick={(e) => handleClick(e, navItem)}
            href=''
          >
            {navItem}
          </a>
        ))}
      </div>

      <div className="w-56 flex justify-center items-center  pt-4">
        <div class="container">
  <label for="switch" class="toggle">
    <input type="checkbox" class="input" id="switch" />
    <div class="icon icon--moon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="32"
        height="32"
      >
        <path
          fill-rule="evenodd"
          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>

    <div class="icon icon--sun">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="32"
        height="32"
      >
        <path
          d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
        ></path>
      </svg>
    </div>
  </label>
        </div>
        <button
          className="silo_btn relative py-2 px-8 text-black text-xl rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out hover:scale-105 hover:text-white active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
        >
          Use App
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
