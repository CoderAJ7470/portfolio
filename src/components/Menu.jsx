import { useState } from 'react';
import { Link } from 'react-router';

const Menu = ({ home, portfolio, experience, outsideWork }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOnClick = () => {
    const navigation = document.getElementById('slidingNav');

    navigation.classList.toggle('nav-visible');
    setIsNavOpen(!isNavOpen);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleNavOnClick();
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
          <a href='/' tabIndex={isNavOpen ? 0 : -1}>
            Landing Page
          </a>
        )}
        {portfolio && (
          <a href='/portfolio' tabIndex={isNavOpen ? 0 : -1}>
            Portfolio
          </a>
        )}
        {experience && (
          <a href='/experience' tabIndex={isNavOpen ? 0 : -1}>
            Career Experience
          </a>
        )}
        {outsideWork && (
          <a href='/outside-work' tabIndex={isNavOpen ? 0 : -1}>
            Hobbies
          </a>
        )}
      </nav>
    </section>
  );
};

export default Menu;
