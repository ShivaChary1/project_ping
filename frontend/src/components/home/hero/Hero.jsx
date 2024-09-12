import { React, useEffect, useState } from 'react';
import './hero.css';
import PAnimation from './name_animate/PAnimation';
import IAnimation from './name_animate/IAnimation';
import NAnimation from './name_animate/NAnimation';
import GAnimation from './name_animate/GAnimation';
import { motion } from 'framer-motion';
import ScrollBtn from '../hero/scroller/ScrollBtn'
import msg_box from '../../../assets/msg_box.json';
import Lottie from 'react-lottie';

const Hero = () => {
  const [isCmp,setIsCmp] = useState(false);
  const def_options = {
    loop: true,
    autoplay: true,
    delay: 5,
    animationData: msg_box,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const description = "Welcome to Ping! Effortlessly connect, share, and pay to friends using our fast, versatile app.";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        setDisplayedText(description.substring(0, currentIndex));
        currentIndex++;
        if (currentIndex > description.length) {
          clearInterval(typingInterval);
          setIsCmp(true);
        }
      }, 50);
    }, 3000); 
    return () => clearTimeout(timeoutId);
  }, [description]);

  return (
    <>
      <div className='flex h-screen container justify-start pt-56 pl-56 items-start w-screen'>
        <motion.span initial={{ x: '-400px' }} animate={{ x: '0' }} transition={{ duration: 3, type: 'ease-in' }} className='p_svg'>
          <PAnimation />
        </motion.span>
        <motion.span initial={{ y: '400px' }} animate={{ y: '0' }} transition={{ duration: 3, type: 'ease-in' }} className='i_svg'>
          <IAnimation />
        </motion.span>
        <motion.span initial={{ y: '-400px' }} animate={{ y: '0' }} transition={{ duration: 3, type: 'ease-in' }} className='n_svg'>
          <NAnimation />
        </motion.span>
        <motion.span initial={{ x: '400px' }} animate={{ x: '0' }} transition={{ duration: 3, type: 'ease-in' }} className='g_svg'>
          <GAnimation />
        </motion.span>

        <motion.span initial={{ y: "500px" }} animate={{ y: 0 }} transition={{ duration: 1.5, type: "ease-in" }} className='msg_box'>
          <Lottie options={def_options} height={700} width={700} />
        </motion.span>
        <span className='info_text'>
          {displayedText}
        </span>



        {
          isCmp && 
          <motion.span initial={{y:"100px"}} animate={{y:"0"}} transition={{duration:3,type:'spring',mass:0.8}} className='btn_sd'>
          <ScrollBtn/>
          </motion.span>
        }
        
      </div>
        
    </>
  );
}

export default Hero;
