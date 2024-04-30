import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            We are a team of dedicated healthcare professionals, developers, and
            support staff passionate about making a difference in the healthcare
            industry. Our founders, Naveen Pandey and Aditya Dixit, have a
            combined experience of over 10 years in healthcare management,
            software development, and patient care.
          </p>
          <b>Our Mission</b>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
            Our mission is to empower healthcare providers by offering a
            comprehensive, user-friendly platform that addresses the
            complexities of hospital management. We aim to optimize every aspect
            of hospital operations, from patient registration to billing and
            reporting, ensuring that providers can focus on what matters
            most—patient care.
          </p>
          <p>Join this Amazing Platform!!</p>
          <p>It will empower your HealthCare Industry!!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
