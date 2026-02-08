

import React, { useState, useEffect } from 'react';
import Jang from './Images/jang.svg';
import Jang2 from './Images/Jang2.png';
import './About.css';


const About = () => {
  const images = [Jang, Jang2];
  const [current, setCurrent] = useState(0); 

  // Automatic image change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000); // 3000ms = 3s

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length); 
  };

  return (
    <div className="about">
      <div className="content">
        <div className="about-container">
          <ul>
            <li className="text">
              <a href="#" className="about__link">Home </a><span className='about__span'> About us</span>
              <a href="#" className="about__link">Home </a>
              <span className="about__span"> About us</span>
              <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>

              <button className="btn">Get in touch →</button>
              <button className="btn" onClick={nextImage}>Get in touch →</button>
            </li>

            <li className="image">
              <img
                src={images[current]}
                alt="About illustration"
                className="float-img"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}
 


export default About;
