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
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}>
              <p className='p-text' style={{marginTop: '10px'}}>
                {about.description}
              </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrapper (
  MotionWrapper(About, 'app__about'), 
  'about', 
  'app__whitebg');