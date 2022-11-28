import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
              <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Basic UX/UI design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Figma dashboard UI kit for data design Web apps.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Chats templates & infographics in Figma</p>
            </li>
            
          </ul>
        </article>
        {/* END OF UX/UI */}
        <article className='service'>
          <div className='service__head'>
              <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Knowledge of html/css/scss, javascript/ES6.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Knowledge of reactjs, redux.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Use some other frameworks: react-hook-form,yup,axios, ...</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Basic knowledge programming languages : C#</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Basic knowledge programming languages : Java</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Basic knowledge of SQL </p>
            </li>
          </ul>
        </article>
         {/* WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
              <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Project Management Plan .</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Software Requirement Specification.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Software Design Document .</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Software User Guides.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services