import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className='nav'>
      <div className='nav-info'>
        <div className='logo'>the planets</div>
        <FaBars
          className={click ? 'menu-btn grey' : 'menu-btn'}
          onClick={handleClick}
        />
      </div>
      <div className={click ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-items'>
          <li className='nav-item'>
            <Link to='/' className='mercury nav-link' onClick={closeMobileMenu}>
              Mercury
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Venus'
              className='nav-link venus'
              onClick={closeMobileMenu}
            >
              Venus
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Earth'
              className='nav-link earth'
              onClick={closeMobileMenu}
            >
              Earth
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Mars'
              className='nav-link mars'
              onClick={closeMobileMenu}
            >
              Mars
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Jupiter'
              className='nav-link jupiter'
              onClick={closeMobileMenu}
            >
              Jupiter
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Saturn'
              className='nav-link saturn'
              onClick={closeMobileMenu}
            >
              Saturn
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Uranus'
              className='nav-link uranus'
              onClick={closeMobileMenu}
            >
              Uranus
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Neptune'
              className='nav-link neptune'
              onClick={closeMobileMenu}
            >
              Neptune
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
