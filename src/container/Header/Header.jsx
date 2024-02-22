import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants' 
import AppWrapper from '../../wrapper/AppWrapper';
import './Header.scss';

const Header = () => {

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <div  className="app__header app__flex">
    <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.80 }}
        className="app__header-info"
        style={{ textAlign: "center", fontSize: "24px" }}
      >
        <div className="app__header-badge">
        {/* <div className='badge-cmp app__flex'>
        </div> */}
          <span className='hand-wave'>
            👋
          </span>
          <p className="p-text">Hello, I'm</p>
          <h1 className='head-text'>Lakshmanan</h1>
          <p className="p-text">Software Engineer | DevOps Enthusiast</p>
        </div>
      </motion.div>

      <motion.div 
       whileInView={{ opacity: [0, 1] }}
       transition={{ duration: 0.5, delayChildren: 0.5 }}
       className='app__header-img'>
        <img src={images.profile} alt="profile_bg" />
        {/* <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='overlay_circle'
          src={images.circle}
          alt="profile_circle" /> */}
      </motion.div>

      {/* <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'>
          {[images.flutter, images.redux, images.sass].map((circle, index) => 
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>)}
        
        </motion.div> */}
    </div>
  )
}

export default AppWrapper(Header, 'home');