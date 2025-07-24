import portfolioImage from '../assets/portfolio-site-photo.jpg';
import Menu from './Menu';

const Header = ({
  photo = false,
  headerClass,
  hasMenu = false,
  headingAndMenuClass,
  heading,
  home,
  portfolio,
  experience,
  outsideWork,
  projects,
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
        {hasMenu && (
          <Menu
            home={home}
            portfolio={portfolio}
            experience={experience}
            outsideWork={outsideWork}
            projects={projects}
          />
        )}
      </section>
    </header>
  );
};

export default Header;
