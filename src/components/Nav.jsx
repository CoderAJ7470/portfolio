import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { returnHeading } from '../helpers/functions';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [heading, setHeading] = useState('');

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const location = useLocation();

  useEffect(() => {
    setHeading(returnHeading(location.pathname));
  }, [location]);

  return (
    <nav className='menu-wrapper'>
      {/* Laptop and larger viewport nav header */}
      <div className='site-nav desktop-only'>
        <NavLink to='/portfolio/' end>
          Home
        </NavLink>
        <NavLink to='/portfolio/fe-portfolio'>Portfolio</NavLink>
        <NavLink to='/portfolio/experience'>Experience</NavLink>
        <NavLink to='/portfolio/projects'>Projects</NavLink>
        <NavLink to='/portfolio/outside-work'>Outside Work</NavLink>
      </div>

      {/* Mobile viewports header */}
      <div className='mobile-only mobile-nav-header'>
        <h1>{heading}</h1>
        <div
          className='menu-icon'
          role='button'
          tabIndex={0}
          aria-label='Toggle navigation menu'
          aria-expanded={isOpen}
          onClick={toggleMenu}
          onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
        >
          <div className={`bar ${isOpen ? 'animate-down' : ''}`} />
          <div className={`bar ${isOpen ? 'fade' : ''}`} />
          <div className={`bar ${isOpen ? 'animate-up' : ''}`} />
        </div>
      </div>

      {/* Drop-down menu */}
      <nav className={`drop-down-nav ${isOpen ? 'nav-visible' : ''}`}>
        <div className='drop-down-inner'>
          <NavLink to='/portfolio/' end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to='/portfolio/fe-portfolio' onClick={closeMenu}>
            Portfolio
          </NavLink>
          <NavLink to='/portfolio/experience' onClick={closeMenu}>
            Experience
          </NavLink>
          <NavLink to='/portfolio/projects' onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink to='/portfolio/outside-work' onClick={closeMenu}>
            Outside Work
          </NavLink>
        </div>
      </nav>
    </nav>
  );
};

export default Nav;
