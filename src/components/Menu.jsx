import { Link } from 'react-router';

const Menu = ({ home, portfolio, experience, outsideWork }) => {
  return (
    <section className='menu-wrapper'>
      <section className='menu-icon'>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </section>

      <nav className='drop-down-nav'>
        {home && <Link to='/'>Landing Page</Link>}
        {portfolio && <Link to='/portfolio'>Portfolio</Link>}
        {experience && <Link to='/experience'>Career Experience</Link>}
        {outsideWork && <Link to='/outside-work'>Hobbies</Link>}
      </nav>
    </section>
  );
};

export default Menu;
