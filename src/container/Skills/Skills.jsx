import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrapper, MotionWrapper } from '../../wrapper';
import { urlFor, client } from '../../client';


import './Skills.scss';

const Skills = () => {

  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"] | order(_updatedAt desc)';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
      console.log(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, [])

  return (
    <>
      <h2 className='"head-text'> Skills</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <h2 className='"head-text' style={{marginTop : "2rem"}}>Experience</h2>
      <div className='app__exp-container'>
      <div className="app__skills-exp">  
        {experiences.map((experience) => (
          <motion.div 
            className="app__skills-exp-item"
            key={experience.year}
          >
            <div className="app__skills-exp-left">
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              {experience.works.map((work, index) => (
                <div className="app__skills-exp-work" key={index}>
                  <h4 className="bold-text">{work.name}</h4>
                  <p className="p-text">{work.company}</p>
                </div>
              ))}
            </div>
            <div className="app__skills-exp-divider"></div>
            <motion.div className="app__skills-exp-right">
              {experience.works.map((work, index) => (
                <div className="app__skills-exp-desc" key={index}>
                  {work.desc.map((desc, index) => (
                    <ul className="bulleted-list" key={index}>
                    <li className="p-text">{desc.desc}</li>
                  </ul>
                  ))}
                </div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
};


export default AppWrapper (
  MotionWrapper(Skills, 'app__skills'), 
  'skills', 
  'app__whitebg');


  // Change the skills icon background circle color in the Sanity CMS under skills.
