import React from 'react';
import NetflixBackgroundImage from '../images/netflix-background.png';
import narcos_logo from '../images/narcos_logo.png'

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <div className="content">
      <img className="logo" src={narcos_logo} alt="narcos"/>
        <br/>
        <h2>Season 2 now available</h2>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis
          quod.
        </p>
        <div className="button-wrapper">
          <a href="#" className="button-el">Watch now</a>
          <a href="#" className="button-el">My list</a>
        </div>
      </div>
      <div className="overlay" style={{background: `url(${NetflixBackgroundImage})`}}/>
    </div>
  )
}

export default Hero