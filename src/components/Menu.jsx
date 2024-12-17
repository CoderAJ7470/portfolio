import { Link } from 'react-router';

const Menu = () => {
  return (
    <section className='menu-icon'>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>

      {/* <ul>
        {home && <Link to='/'>Landing Page</Link>}
        {portfolio && <Link to='/portfolio'>Portfolio</Link>}
        {experience && <Link to='/experience'>Career Experience</Link>}
        {outsideWork && <Link to='/outside-work'>Hobbies</Link>}
      </ul> */}
    </section>
  );
};

export default Menu;
