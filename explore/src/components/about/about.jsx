// About.jsx
import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="explore-around-page">
      <div className="imgs">
        <img src="https://storage.googleapis.com/aboutimg/kayaking.jpeg" alt="Kayaking" width="300" height="250" />
        <img src="https://storage.googleapis.com/aboutimg/food.jpeg" alt="Good food" width="300" height="250" />
        <img src="https://storage.googleapis.com/aboutimg/travel.jpeg" alt="Two people walking in the woods" width="300" height="250" />
      </div>

      <p>
        Creating lasting memories through an inspiring, empowering experience, connecting with diverse cultures, and inspiring others is what we are all about. We believe that traveling is more than just seeing new places; it is about expanding your horizons, learning about your city, and gaining a deeper understanding.
      </p>
    </div>
  );
};

export default About;
