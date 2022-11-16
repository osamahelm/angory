import React from 'react'
import style from './Footer.module.css';

export default function Footer() {
  return (
    <>
    <footer id={style.footer}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
          <h4 class={`${style.headers} text-uppercase mb-4`}>Location</h4>
          <p class={`${style.lead} mb-0`}>
                2215 John Daniel Drive
                  <br/>
                   Clark, MO 65243
                   </p>
          </div>
        <div className="col-md-4">
        <h4 class={`${style.headers} text-uppercase mb-4`}>Around the Web</h4>
        <div className={style.icon}>
<div className={style.cefa}>
        <i className=' d-flex  align-items-center justify-content-center fa-brands fa-facebook fs-2'></i>
  
</div>        
<div className={style.twit}>
  <i className='fa-brands fa-twitter fs-1  d-flex  align-items-center justify-content-center'></i>
</div>
<div className={style.linke}>
          <i className= 'fa-brands fa-linkedin fs-1  d-flex  align-items-center justify-content-center'></i>
  
</div>       
<div className={style.drib}>
   <i className= 'fa-solid fa-basketball fs-2'></i>
  
</div>        
        </div>
        </div>
          <div className="col-md-4">
      <h4 class={`${style.headers} text-uppercase mb-4`}>About Freelancer</h4>
      <p class={`${style.lead} mb-0`}>Freelance is a free to use, MIT licensed Bootstrap theme created by Route
          </p>
          </div>

        </div>
        
      </div>
      <div class={`${style.copyright} py-4 text-center text-white`}>
            <small>Copyright © Your Website 2021</small>
        </div>
    </footer>
    
    
</>
  )
}
