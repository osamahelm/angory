import React from 'react'
import style from './Portfolio.module.css';

import Imag from '../../assets/img/cabin.png'
import cake from '../../assets/img/cake.png'
import circus from '../../assets/img/circus.png'
import game from '../../assets/img/game.png'
import safe from '../../assets/img/safe.png'
import submarine from '../../assets/img/submarine.png'

export default function Portfolio() {
  return (
    <>
    <div className='container py-5 text-center'>
       <h2 className={`${style.head} py-2`}>portfolio</h2>
       <div className={style.idgg}>
       <div className={style.string}></div>
<div >
<i className={`${style.star} fa-solid fa-star  fs-2`}></i>

  </div>    
  <div className={style.line}></div>
      </div>
       <div className="row g-5">
        <div className="col-md-4">
        <div className='images   position-relative'>
    <img src={Imag} alt="cabin"  className="w-100" />
    <div className={style.overlay}>

    </div>
      </div>
        </div>
        <div className="col-md-4">
        <div className='images position-relative'>
    <img src={cake} alt="cake"  className="w-100" />
    <div className={style.overlay}>

    </div>
      </div>
        </div>
        <div className="col-md-4">
        <div className='images position-relative'>
    <img src={circus} alt="circus" className="w-100" />
    <div className={style.overlay}>

    </div>
      </div>
        </div>
        <div className="col-md-4">
        <div className='images position-relative'>
    <img src={game} alt="game" className="w-100" />
    <div className={style.overlay}>

    </div>
      </div>
        </div>
        <div className="col-md-4">
        <div className='images position-relative'>
    <img src={safe } alt="safe" className="w-100" />
    <div className={style.overlay}>

    </div>
      </div>
        </div>
        <div className="col-md-6 col-lg-4">
        <div className='images position-relative'>
    <img src={submarine} alt="submarine" className="w-100"  />
    <div className={style.overlay}>
    </div>
      </div>
        </div>
        
       </div>
    </div>
    </>
  )
}
