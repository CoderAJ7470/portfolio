import portfolioImage from '../assets/portfolio-site-photo.jpg';

const Header = ({ photo = false, sectionClass, heading }) => {
  return (
    <header className={sectionClass}>
      {photo && (
        <img
          className='portfolio-photo'
          src={portfolioImage}
          alt="Ameya's portfolio photograph"
        />
      )}
      <h1>{heading}</h1>
    </header>
  );
};

export default Header;
