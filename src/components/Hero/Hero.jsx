import React, { useState, useEffect } from 'react';
import './Hero.css';
import Header from '../Header/Header';
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {
  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  // State for managing button click effect
  const [clicked, setClicked] = useState(false);

  const handleJoinNowClick = () => {
    // Trigger the visual effect
    setClicked(true);

    // Scroll to the Join section
    const joinSection = document.getElementById('join-us');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Remove the click effect after a short delay
  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        setClicked(false);
      }, 200); // Adjust duration as needed
      return () => clearTimeout(timer);
    }
  }, [clicked]);

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className='left-h'>
        <Header />

        <div className='the-best-ad'>
          <motion.div 
            initial={{ left: mobile ? "165px" : '238px' }} 
            whileInView={{ left: '8px' }} 
            transition={{...transition, type: 'tween'}}
          />
          <span>The best fitness club in the town</span>
        </div>

        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div><span>Ideal body</span></div>
          <div><span>In here we will help you to shape and build your ideal body and live up your life to the fullest</span></div>
        </div>

        <div className="figures">
          <div>
            <span><NumberCounter end={140} start={100} delay='4' preFix="+" /></span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={800} delay='4' preFix="+" /></span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={0} delay='4' preFix="+" /></span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className='right-h'>
        {/* Add the clicked class if the button is clicked */}
        <button className={`btn ${clicked ? 'clicked' : ''}`} onClick={handleJoinNowClick}>Join Now</button>

        <motion.div 
          initial={{right: "-1rem"}}
          whileInView={{right:'4rem'}}
          transition={transition}
          className="heart-rate">
          <img src={Heart} alt="Heart rate icon" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="Hero" className="hero-image" />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={hero_image_back} alt="Hero background" className="hero-image-back" 
        />

        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
          className="calories">
          <img src={Calories} alt="Calories icon" />
          <div> 
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
