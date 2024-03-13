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
        <a href="https://twitter.com/lakshmangiri" target="_blank" rel="noopener noreferrer">
          <div>
              <BsTwitter />
          </div>
        </a>
        <a href="https://www.instagram.com/lakshmanb15/" target="_blank" rel="noopener  noreferrer">
        <div>
            <BsInstagram />
        </div>
        </a>
    </div>
  )
}

export default SocialMedia