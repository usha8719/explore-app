import React, { useState, useEffect } from 'react';
import './travel.css';

  function travel(){
    return (
      <section id="travelpage">
    <div className="travel">
     
      <h1>Travel</h1>
      <p>Watch the below video about the tourism in Fort Wayne, Indiana</p>

      <div className='Video'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/H8C4w9B9xX0?si=OtFyLEAFqZI3XEeN" title="Fort Wayne Tourism Video"></iframe>
        </div>

      </div>
    </section>
  );
  }

export default travel;
