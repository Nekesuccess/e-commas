import React from 'react'
import "./Herosection.css"
import { FaArrowRotateRight, FaArrowRotateLeft } from "react-icons/fa6";



const Herosection = () => {
  return (
    <>
      <div className="hero_contanner">
        <section className="hero_wrap">
            <div className="hero_Text">
                <div className="">
                <h2>HOME FOR CONTENT CREATORS</h2>
                <div className="">BOOK NOW</div>
                </div>
                <article className='howtobuy'>
                    <div className="HELP">HELP</div>
                    <button className='buy_hero'>CONTACT US</button>
                </article>
            </div>
            <div className="hero_img">
                <div className="arrow_control"><FaArrowRotateLeft /></div>
                <div className="img_container">
                    
                </div>
                <div className="arrow_control"><FaArrowRotateRight /></div>
            </div>
        </section>
      </div>
    </>
  )
}

export default Herosection
