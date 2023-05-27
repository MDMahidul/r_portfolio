import React, { useRef, useEffect } from 'react';
import './Progressbar.css';

const Progressbar = () => {
  useEffect(() => {
    const skillPerElements = document.querySelectorAll('.skill-per');

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate'); // Add your desired class name here
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    skillPerElements.forEach((skillPerElement) => {
      skillObserver.observe(skillPerElement);
    });

    return () => {
      skillPerElements.forEach((skillPerElement) => {
        skillObserver.unobserve(skillPerElement);
      });
    };
  }, []);
  

  return (
    <div className="professional-skills grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-16  md:px-10 lg:px-10 px-10">
      <div className="skill-box">
        <span className="skill-title">HTML</span>
        <div className="skill-bar">
          <span className="skill-per html" >
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">CSS</span>
        <div className="skill-bar">
          <span className="skill-per css">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">JS</span>
        <div className="skill-bar">
          <span className="skill-per js">
            <span className="tooltip">65%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">Nodejs</span>
        <div className="skill-bar">
          <span className="skill-per nodejs">
            <span className="tooltip">50%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">Reactjs</span>
        <div className="skill-bar">
          <span className="skill-per reactjs" >
            <span className="tooltip">65%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">Wordpress</span>
        <div className="skill-bar">
          <span className="skill-per wordpress" >
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
