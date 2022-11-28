import React,{useRef} from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ln1owos', 'template_pk3nydq', form.current, 'lFLDvzHu_S2vq0hT4')
     e.target.reset() 
   
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>congtrang2906@gmail.com</h5>
            <a href="mailto:congtrang2906@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Master</h5>
            <a href="http://m.me/congtrang2906"target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+0329200254</h5>
            <a href="http://api.whatsapp.com/send?phone+0329200254"target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name"placeholder='Your Full Name'required/>
          <input type="email" name='email'placeholder='Your Email'required />
           <textarea name="message" rows="7" placeholder='Your Message'required></textarea>
           <button type='submit'className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact