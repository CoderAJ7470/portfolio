import { useState } from 'react';

const Menu = ({ home, portfolio, experience, outsideWork, projects }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOnClick = () => {
    const navigation = document.querySelector('#slidingNav');

    const firstBar = document.querySelector('#barOne');
    const secondBar = document.querySelector('#barTwo');
    const thirdBar = document.querySelector('#barThree');

    navigation.classList.toggle('nav-visible');

    firstBar.classList.toggle('animate-down');
    secondBar.classList.toggle('fade');
    thirdBar.classList.toggle('animate-up');

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
        <div className='bar' id='barOne'></div>
        <div className='bar' id='barTwo'></div>
        <div className='bar' id='barThree'></div>
      </section>

      <nav className='drop-down-nav' id='slidingNav'>
        {home && (
          <a href='/portfolio/' tabIndex={isNavOpen ? 0 : -1}>
            Landing Page
          </a>
        )}
        {portfolio && (
          <a href='/portfolio/fe-portfolio' tabIndex={isNavOpen ? 0 : -1}>
            Portfolio
          </a>
        )}
        {experience && (
          <a href='/portfolio/experience' tabIndex={isNavOpen ? 0 : -1}>
            Career Experience
          </a>
        )}
        {outsideWork && (
          <a href='/portfolio/outside-work' tabIndex={isNavOpen ? 0 : -1}>
            Hobbies
          </a>
        )}
        {projects && (
          <a href='/portfolio/projects' tabIndex={isNavOpen ? 0 : -1}>
            Projects
          </a>
        )}
      </nav>
    </section>
  );
};

export default Menu;
