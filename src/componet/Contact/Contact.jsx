import React from 'react'
import style from './Contact.module.css';

export default function Contact() {
  return (
    <>
    <div id='contact'>
      <div className="container  py-5">
        <h2 contact className={`${style.head} text-center text-uppercase py-2` } >contact me</h2>
        <div className={style.idgg}>
        <div className={style.left}></div>
<div >
<i className={`${style.star} fa-solid fa-star  fs-2`}></i>
  </div>    
  <div className={style.right}></div>
      </div>
    <form>
    <div className=' mb-3 p-3'>
    <input  className='form-control fs-3 m-auto w-50   border-0 ' id="name" type="text" placeholder="Name" />
    </div>
    <div className='mb-3 p-3'>
    <input className='form-control fs-3 m-auto w-50  border-0   '  id="email" type="email" placeholder="Email Address" />
    </div>
    <div className=' mb-3 p-3' >
    <input className='form-control fs-3 m-auto w-50    border-0 ' id="phone" type="tel" placeholder="Phone Number"  />
    </div>

      <textarea className='form-control  fs-3 m-auto w-50  border-0 p-3 mb-3 ' id="message" rows="5" placeholder="Message" ></textarea>
   <button className={`${style.btn} px-5`} >Send</button>
    </form>
      
      </div>
    </div>
    </>
  )
}
