import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocicals from './HeaderSocicals'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        {/* <h5>Hello I'm</h5> */}
        <h2>Cong Trang</h2>
        <h5 className="text-light">Fullstact Developer</h5>
        <CTA/>
        <HeaderSocicals/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header