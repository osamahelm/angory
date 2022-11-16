import React from 'react'
import style from './Home.module.css';
import Image from '../../assets/img/avataaars.svg'
export default function Home() {
  return (
    <>
  <div id={style.about1}>
     <div className='container my-5 d-flex align-items-center flex-column'>
      <img src={Image} alt="img"  className='mb-5'/>
      <h1 class={`${style.heading}  text-uppercase mb-0`}>Start React</h1>
      <div className="divier d-flex align-items-center my-4">
        <div className={style.left}></div>
<div className='star'>
<i className="fa-solid fa-star text-white fs-2"></i>

  </div>    
  <div className={style.right}></div>
      </div>
      <p class={`${style.subheading} mb-0`}>Graphic Artist - Web Designer - Illustrator</p>
     </div>
  </div>
    </>
  )
}
