import React from 'react';
import { Link } from 'react-router-dom';
import './PlanetInfo.css';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

function PlanetInfo({
  img,
  img2,
  visible,
  alt,
  name,
  fact,
  source,
  color,
  color2,
  color3,
  link,
  link2,
  link3,
}) {
  return (
    <div className='container'>
      <div className='images'>
        <img src={img} alt={alt} className='planet-img' />
        <img
          src={img2}
          alt='mercus'
          className={visible ? 'planet-closeup' : 'hide'}
        />
      </div>
      <div className='planet-info'>
        <div className='planet-text'>
          <h1 className='planet-name'>{name}</h1>
          <p className='planet-fact'>{fact}</p>
          <p className='planet-source'>
            Source:{' '}
            <a href={source} target='_blank' rel='noreferrer'>
              Wikipedia
            </a>
            <FaExternalLinkSquareAlt className='planet-icon' />
          </p>
        </div>
        <ul className='planet-nav'>
          <Link to={link}>
            <li className='planet-link' style={{ backgroundColor: color }}>
              <span className='link-number'>01</span> overview
            </li>
          </Link>
          <Link to={link2}>
            <li className='planet-link' style={{ backgroundColor: color2 }}>
              <span className='link-number'>02</span> internal structure
            </li>
          </Link>
          <Link to={link3}>
            <li className='planet-link' style={{ backgroundColor: color3 }}>
              <span className='link-number'>03</span> surface geology
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default PlanetInfo;
