import portfolioImage from '../assets/portfolio-site-photo.jpg';
import Menu from './Menu';

const Header = ({
  photo = false,
  headerClass,
  hasMenu = false,
  hasVisitPages = false,
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
        {hasVisitPages && (
          <section className='visit-pages-section'>
            <a
              href='https://github.com/CoderAJ7470'
              className='list-links'
              target='_blank'
            >
              <i className='fa-brands fa-github'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/coderaj7470/'
              className='list-links'
              target='_blank'
            >
              <i className='fa-brands fa-linkedin'></i>
            </a>
          </section>
        )}
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
