import React, { useState } from 'react'
import { images } from '../../constants';
import { AppWrapper, MotionWrapper } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {

  const emailId = process.env.REACT_APP_MY_EMAIL_ID;
  const phoneNum = '+44 ' + process.env.REACT_APP_MY_PHONE_NUMBER

  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [ isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [ isLoading, setIsLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value} = e.target;

    setFormData({...formData, [name]: value });
  }

  const handleSubmit = () => {
    setIsLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact).then(() => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    })
    // setIsLoading(false);
  }

  return (
    <>
      <h2 className='head-text'>
        Contact 
      </h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href={`mailto:${emailId}`} className='p-text'>
            {emailId}
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="email" />
          <a href={`tel:${phoneNum}`} className='p-text'>
            {phoneNum}
          </a>
        </div>
      </div>

      { !isFormSubmitted ?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type="text" placeholder='your name' name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className='app__flex'>
            <input className='p-text' type="email" placeholder='your email' name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea className='p-text' placeholder='your message' value={message} name="message" onChange={handleChangeInput} />
          </div>
          <button type="button" className='p-text' onClick={handleSubmit}>
            { isLoading ? 'Sending' : 'Send'}
          </button>
        </div>
        :
        <div>
          <h3 className='head-text'>
            Thank you for getting in touch!
          </h3>
        </div>
      }
    </>
  )
}

export default AppWrapper(
  MotionWrapper(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)