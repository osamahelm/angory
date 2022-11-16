import React from 'react'
import style from './About.module.css';
export default function About() {
  return (
    <>
   <div id={style.about}>
   <div className=' text-center container py-5' >
       <h2 className={`${style.header} py-3`}>about</h2>
       <div className={style.idgg}>
        <div className={style.left}></div>
<div className='star'>
<i className="fa-solid fa-star text-white fs-2"></i>

  </div>    
  <div className={style.right}></div>
      </div>
      <div className="row">
        <div className="col-md-4 ms-auto">
          <p className={style.lead}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-4 me-auto">
          <p className={style.lead}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        </div>
      </div>
        </div>
   </div>
        </>
  )
}
