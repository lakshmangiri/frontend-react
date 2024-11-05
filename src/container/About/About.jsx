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
          <p className='p-text' style={{marginTop: '10px'}}>
              {about.description}
          </p>
      ))}
      </motion.div>
    </>
  )
}

export default AppWrapper (
  MotionWrapper(About, 'app__about'), 
  'about', 
  'app__whitebg');
