import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards(props) {
    
  return (
    <div className='cards'>
      <h1>Event</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <li className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text="The Long Journey"
              label='Landscape'
              path='/art'
              
            />
            <CardItem
              src='images/img-2.jpg'
              text="Ocean World"
              label='Travel'
              path='/test'
            />
            <CardItem
              src='images/img-3.jpg'
              text="Deep Dive Dark"
              label='World'
              path='/test'
            />
            <CardItem
              src='images/img-4.jpg'
              text="Possible the Impossible"
              label='Bird-Eyes-View'
              path='/test'
            />
            <CardItem
              src='images/img-8.jpg'
              text="Culture of the Land"
              label='LifeStyle'
              path='/test'
            />
          </li>
          <li className='cards__items'>
            <CardItem
              src='images/img-5.jpg'
              text="City of the Mind"
              label='Street'
              path='/test'
            />
            <CardItem
              src='images/img-7.jpg'
              text="It's Just You or Me?"
              label='Silhouette'
              path='/test'
            />
            <CardItem
              src='images/img-9.jpg'
              text="Nature and Chill, Heal and Feel"
              label='Nature'
              path='/test'
            />
            </li>
        </div>
      </div>
    </div>
  );
}

export default Cards;
