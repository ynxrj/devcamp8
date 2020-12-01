import React from 'react';
import './Art.css';
import ArtItem from './ArtItem';

function Art(props) {
    
  return (
    <div className='arts'>
      <h1 className='title'>Art</h1>
      <div className='arts__container'>
        <div className='arts__wrapper'>
          <li className='arts__items'>
            <ArtItem
              src='images/img-1.jpg'
              path='/art'
              
            />
            <ArtItem
              src='images/img-2.jpg'
              path='/test'
            />
            <ArtItem
              src='images/img-3.jpg'
              path='/test'
            />
            <ArtItem
              src='images/img-4.jpg'
              path='/test'
            />
            <ArtItem
              src='images/img-8.jpg'
              path='/test'
            />
            <ArtItem
              src='images/img-10.jpg'
              path='/test'
            />
          </li>
          {/* <li className='arts__items'>
            <ArtItem
              src='images/img-5.jpg'
              path='/test'
            />
            <ArtItem
              src='images/img-7.jpg'
              path='/test'
            />
            <ArtItem
              src='images/img-9.jpg'
              path='/test'
            />
            </li> */}
        </div>
      </div>
    </div>
  );
}

export default Art;
