import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Start.css';

function Start() {
  return (
    <div className='start-container'>
     
      <h1>ART E-XHIBITION</h1>
      <p>Discover The World</p>
      <div className='start-btn'>
        <Button
          className='btn'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          EXPLORE
        </Button>
      </div>
    </div>
  );
}

export default Start;
