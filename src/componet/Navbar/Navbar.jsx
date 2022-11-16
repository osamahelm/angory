import React from 'react'
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
export default function Navbar() {
  return (
    <>
 
    <nav className={`${style.parent} navbar navbar-expand-lg py-5 `}>
  <div className="container">
    <a className={`${style.start} navbar-brand  `} href='#'>Start React</a>
    <button className={`${style.btton} ${style.btticon} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={style.navlink}  to=''>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={style.navlink}  to='portfolio'>portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className={style.navlink}   to='about'>about</Link>
        </li>
        <li className="nav-item">
          <Link className={style.navlink}   to='contact'>contact</Link>
        </li>
        
      </ul>
     
    </div>
      </div>
    </nav> 
    
   
    
    
    
    
    
    
    </>
  )
}
