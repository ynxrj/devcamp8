import React from 'react';
import { Link } from 'react-router-dom'
import './Art.css'


function ArtItem(props)  {

  return (
    <>
      <li className='arts__item'>
      <Link className='arts__item__link' to={props.path}>
          <figure className='arts__item__pic-wrap'>
            <img
              className='arts__item__img'
              alt='ArtEx'
              src={props.src}
            />
          </figure>
          <div className='arts__item__info'>
            <span className='arts__item__text'>{props.text}</span>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ArtItem;
