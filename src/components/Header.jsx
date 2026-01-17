import portfolioImage from '../assets/portfolio-site-photo.jpg';

const HomepageHeader = () => {
  return (
    <header className='main-content-header'>
      <img
        className='portfolio-photo'
        src={portfolioImage}
        alt="Ameya's portfolio photograph"
      />

      <section className='main-content-heading-and-menu'>
        <h1>Hi there!</h1>

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
      </section>
    </header>
  );
};

export default HomepageHeader;
