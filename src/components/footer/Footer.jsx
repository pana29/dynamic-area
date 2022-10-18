import React from 'react';
import logo from '../../assets/logo.png';
import '../footer/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="footer-top">
          <h2 className="footer-top-h2">Book Consultation</h2>
          <form className="form-footer">
            <div className="form-left">
              <input type="text" placeholder="enter your name" />
              <input type="email" placeholder="enter your email" />
              <input type="phone" placeholder="enter your phone" />
            </div>
            <div className="form-right" id='form'>
              <textarea placeholder="write something..."></textarea>
              <button type="submit">SEND MESSAGE</button>
            </div>
          </form>
        </div>
        <div className="footer-bottom">
          <div className="footer-box">
            <img src={logo} className='logo' alt="logo" />
            <p className="footer-p">
              +836499 444 1052
              <br />
              <br />
              +836458 444 2203
            </p>
            <p className="footer-p-p">© Copyright 2022 Dynamic Estate</p>
          </div>
          <div className="footer-box">
            <p className="footer-p">
             1550 Biscayne Blvd, FL 33132
              <br />
              Central Business Miami. USA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
