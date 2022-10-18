import React from 'react';
import {
  GiFingerPrint,
  GiCctvCamera,
  GiDoorHandle,
  GiParkBench,
} from 'react-icons/gi';
import { AiOutlineWifi } from 'react-icons/ai';
import { HiOutlineLightBulb } from 'react-icons/hi';
import '../features/Features.css';

const Features = () => {
  return (
    <div className="features">
      <div className="container-features">
        <div className="feature">
          <GiFingerPrint size={50} className="icon-features"></GiFingerPrint>
          <h2 className="feature-h2">Finger print door entry</h2>
          <p className="feature-p">
            Ekey home integra combines sophisticated finger scan technology from
            the market leader elegantly and conveniently with your front door.
            The integrated finger scanner offers easy access without keys, codes
            or cards. Elegance, convenience and security all in one!
          </p>
        </div>
        <div className="feature">
          <GiCctvCamera size={50} className="icon-features"></GiCctvCamera>
          <h2 className="feature-h2">Security Cameras</h2>
          <p className="feature-p">
            Not every home is the same, but everyone's property deserves to be
            protected. Security cameras are a great tool to achieve a sense of
            security, as they give you extra eyes on your property at all times.
          </p>
        </div>
        <div className="feature">
          <AiOutlineWifi size={50} className="icon-features"></AiOutlineWifi>
          <h2 className="feature-h2">Fiber Optic Internet</h2>
          <p className="feature-p">
            To provide lightning-fast internet access anytime you need it in the
            comfort of your home, our finer-optic cables have been installed
            throughout the estate. We'd like to introduce you to broadband's
            future.
          </p>
        </div>
        <div className="feature">
          <HiOutlineLightBulb
            size={50}
            className="icon-features"
          ></HiOutlineLightBulb>
          <h2 className="feature-h2">Smart Savings</h2>
          <p className="feature-p">
            With our sophisticated energy consumption monitoring, you can save
            an additional 50% of energy. Enjoy a smart home system that enables
            you to dim the lights and even turn off appliances when they are not
            in use. In the event that you ever leave the tap running, even water
            leaks are discovered instantly.
          </p>
        </div>
        <div className="feature">
          <GiDoorHandle size={50} className="icon-features"></GiDoorHandle>
          <h2 className="feature-h2">The Walls Have Ears</h2>
          <p className="feature-p">
            Without lifting a finger, you can lock the doors, open the windows,
            turn on the lights, and do much more. Speak up your house is
            listening.
          </p>
        </div>
        <div className="feature">
          <GiParkBench size={50} className="icon-features"></GiParkBench>
          <h2 className="feature-h2">Green Areas</h2>
          <p className="feature-p">
            In land-use planning, urban green space is open-space areas reserved
            for parks and other "green spaces", including plant life, water
            features -also referred to as blue spaces- and other kinds of
            natural environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
