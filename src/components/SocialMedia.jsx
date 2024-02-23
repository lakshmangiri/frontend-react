import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href="https://www.linkedin.com/in/lakshmanan-b-/" target="_blank" rel="noopener noreferrer">
          <div>
            <FaLinkedin />
          </div>
        </a>
        <div>
            <BsTwitter />
        </div>
        <div>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia