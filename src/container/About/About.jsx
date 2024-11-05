import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {AppWrapper, MotionWrapper} from '../../wrapper'
import { client } from '../../client'
import './About.scss';


const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])

  return (
    <>
      <h2 className='head-text'>
        <span>About</span> 
      </h2>
      <motion.div 
        className='app__profiles'
        whileInView={{ opacity: 1}}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: 'tween'}}
        >
      {abouts.map((about) => (
          <div class="app__profile-item">
            <p className='p-text' style={{marginTop: '10px'}}>
                {about.description}
            </p>
            <p>
              Thank you for visiting my platform. I'm excited to share my journey and insights with you. I hope you find my work and interests as engaging as I do!
            </p>
          </div>
      ))}
      </motion.div>
    </>
  )
}

export default AppWrapper (
  MotionWrapper(About, 'app__about'), 
  'about', 
  'app__whitebg');
