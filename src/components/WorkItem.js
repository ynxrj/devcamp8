import React from 'react';
import { Link } from 'react-router-dom';

function WorkItem(props) {

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='work__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='ArtEx'
              src={props.src}
            />
          </figure>
        </Link>
      </li>
    </>
  );
}

export default WorkItem;
