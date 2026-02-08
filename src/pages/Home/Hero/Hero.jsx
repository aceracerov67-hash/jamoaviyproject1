
import "./Hero.css"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Heroimg1 from "../Hero/img/hero1.png"
import Heroimg2 from "../Hero/img/hero2.png"
import Heroimg3 from "../Hero/img/hero3.png"


const Hero = () => {
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="hero">
        <div className="container">
            <div className="hero__container">
                <div className="hero__box" data-aos="fade-right">
                    <p className="hero__text-name">Proved By prodesigner</p>
                    <h1 className='hero__title'>Work that we produce for our clients</h1>
                    <p className='hero__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                    <button className='hero__button'>Get more details</button>
                </div>
                <div className="hero__img" data-aos="zoom-in" data-aos-delay="200">
                    <img src={Heroimg1} alt="hero-image" />
                </div>
                <div className="hero__image">
                    <img src={Heroimg2} data-aos="fade-down" data-aos-delay="400" alt="hero-image" />
                    <img src={Heroimg3} data-aos="fade-down" data-aos-delay="400" alt="hero-image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero