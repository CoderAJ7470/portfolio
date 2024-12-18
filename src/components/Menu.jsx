import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

const Menu = ({ home, portfolio, experience, outsideWork }) => {
  const [isNavOpen, setIsNavopen] = useState(false);

  const handleNavOnClick = () => {
    const navigation = document.getElementById('slidingNav');

    navigation.classList.toggle('nav-visible');
    setIsNavopen(!isNavOpen);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleNavOnClick(e);
    }
  };

  return (
    <section className='menu-wrapper'>
      <section
        className='menu-icon'
        id='menuIcon'
        onClick={handleNavOnClick}
        onKeyDown={handleOnKeyDown}
        tabIndex={0}
      >
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </section>

      <nav className='drop-down-nav' id='slidingNav'>
        {home && (
          <Link to='/' tabIndex={isNavOpen ? 0 : -1}>
            Landing Page
          </Link>
        )}
        {portfolio && (
          <Link to='/portfolio' tabIndex={isNavOpen ? 0 : -1}>
            Portfolio
          </Link>
        )}
        {experience && (
          <Link to='/experience' tabIndex={isNavOpen ? 0 : -1}>
            Career Experience
          </Link>
        )}
        {outsideWork && (
          <Link to='/outside-work' tabIndex={isNavOpen ? 0 : -1}>
            Hobbies
          </Link>
        )}
      </nav>
    </section>
  );
};

export default Menu;
