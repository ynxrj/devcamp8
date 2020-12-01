import React from 'react';
import './Cards.css';
import WorkItem from './WorkItem';

function Work(props) {
  return (
    <div className='cards'>
      <h1>The Long Journey</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <li className='cards__items'>
            <WorkItem
              src='images/img-1.jpg'
              path='/test'
              // path= '/' + props.object.status;
            />
            <WorkItem
              src='images/img-1.jpg'
              path='/test'
            />
            <WorkItem
              src='images/img-1.jpg'
              path='/test'
            />
            <WorkItem
              src='images/img-1.jpg'
              path='/test'
            />
            <WorkItem
              src='images/img-1.jpg'
              path='/test'
            />
          </li>
          <li className='cards__items'>
            <WorkItem
              src='images/img-1.jpg'
              path='/test'
            />
            <WorkItem
              src='images/img-1.jpg'
              path='/test'
            />
            <WorkItem
              src='images/img-1.jpg'
              path='/test'
            />
            </li>
        </div>
      </div>
    </div>
  );
}

export default Work;
