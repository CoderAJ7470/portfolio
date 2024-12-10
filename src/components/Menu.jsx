import { Link } from 'react-router';

const Menu = ({ home, portfolio, experience, outsideWork }) => {
  return (
    <section>
      <ul>
        <Link to='/'>Landing Page</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/experience'>Career Experience</Link>
        <Link to='/outside-work'>Hobbies</Link>
      </ul>
    </section>
  );
};

export default Menu;
