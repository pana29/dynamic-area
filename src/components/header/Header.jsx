import React, { useState } from 'react';
import img1 from '../../assets/img2.jpeg';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../header/Header.css';

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <nav className="navbar" data-aos="fade-down" data-aos-duration="1000">
            <img className="logo" src={logo} alt="logo" />
            <ul className={nav ? 'navbar-list active' : 'navbar-list '}>
              <li className="navigation-item">
                <Link
                  onClick={handleNav}
                  to="header"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Features
                </Link>
              </li>
              <li className="navigation-item">
                <Link
                  onClick={handleNav}
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Service
                </Link>
              </li>
              <li className="navigation-item">
                <Link
                  onClick={handleNav}
                  to="feedback"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Feedback
                </Link>
              </li>
              <li className="navigation-item">
                <Link
                  onClick={handleNav}
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="hamburger" onClick={handleNav}>
              {!nav ? (
                <FaBars className="icon" />
              ) : (
                <FaTimes className="icon" style={{ color: 'white' }} />
              )}
            </div>
          </nav>
          <div className="home-hero">
            <h4
              className="hero-h4"
              data-aos="zoom-in-right"
              data-aos-duration="1000"
            >
              Discover your new home in an exclusive community!
            </h4>
            <h1 className="hero-h1" data-aos="zoom-in" data-aos-duration="1000">
              Residential Area
            </h1>
          </div>
          <div
            className="social"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <FiFacebook className="fb" size={40}>
              {' '}
            </FiFacebook>
            <FiTwitter className="tw" size={40}></FiTwitter>
            <FaInstagram className="in" size={40}></FaInstagram>
          </div>
        </div>
        <div className="right">
          <img
            src={img1}
            alt="hero-img"
            className="img-hero"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          />
          <div
            className="hero-mid"
            data-aos="fade-up-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <h2 className="hero-h2">222</h2>
            <p className="hero-p">total units</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
