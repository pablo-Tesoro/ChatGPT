import React from 'react';
import '../App.css';
import { ButtonUp } from './ButtonUp';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img className='header-img' src='images/bot.png' alt=''></img>
      <div className='header-content'>
        <h1>Best ChatGPT Prompts</h1>
        <p>Get the most of it!</p>
        <div className='hero-btns'>
          <ButtonUp
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--medium'
          >
            GET STARTED
          </ButtonUp>
          <ButtonUp
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--medium'
          >
            SEE PRIZES
          </ButtonUp>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
