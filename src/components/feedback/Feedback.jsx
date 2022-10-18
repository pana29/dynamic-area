import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import '../feedback/Feedback.css';

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="container-feedback">
        <div className="fb-left">
          <h2 className="fb-left-h2">
            What Others <br /> are saying
          </h2>
        </div>
        <div className="fb-right">
          <div className="fb-box">
            <FaQuoteLeft size={35} className="ghili"></FaQuoteLeft>
            <p className="p-fb">
              Ador minunatul drum de legătură din Mabushi, care este situat
              vizavi de Blue Cabana. Sistemul rutier este fantastic, iar
              clădirea în sine este uimitoare.
            </p>
            <h5 className="h5-fb">Ashley Maro</h5>
          </div>
          <div className="fb-box">
            <FaQuoteLeft size={35} className="ghili"></FaQuoteLeft>
            <p className="p-fb">
              Până acum, atât de frumos. Zona este grozavă, iar serviciile sunt
              excelente. Lucrarea este de o calitate excepțională și aștept cu
              nerăbdare o colaborare mai plină de satisfacții. Pentru mine,
              Dynamic este uimitor.
            </p>
            <h5 className="h5-fb">Alle Kane</h5>
          </div>
          <div className="fb-box">
            <FaQuoteLeft size={35} className="ghili"></FaQuoteLeft>
            <p className="p-fb">
              Not bad When I visited your site, I was a little perplexed by the
              villa and separate spacing, but the officer in charge helped me
              understand. I truly represent Dynamic as an ambassador because I
              respect the company.
            </p>
            <h5 className="h5-fb">Arlie Bramson</h5>
          </div>
          <div className="fb-box">
            <FaQuoteLeft size={35} className="ghili"></FaQuoteLeft>
            <p className="p-fb">
              Very good and fancy residential developer. From luxury town houses
              and villas to downtown apartments.
            </p>
            <h5 className="h5-fb">Carl Aniston</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
