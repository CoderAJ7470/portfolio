import portfolioImage from '../assets/portfolio-site-photo.jpg';
import Menu from './Menu';

const Header = ({
  photo = false,
  headerClass,
  headingAndMenuClass,
  heading,
}) => {
  return (
    <header className={headerClass}>
      {photo && (
        <img
          className='portfolio-photo'
          src={portfolioImage}
          alt="Ameya's portfolio photograph"
        />
      )}
      <section className={headingAndMenuClass}>
        <h1>{heading}</h1>
        <Menu />
      </section>
    </header>
  );
};

export default Header;
