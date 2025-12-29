import Header from '../components/Header';
import Windows from '../components/Windows';

const LandingPage = () => {
  return (
    <div className='main-content-wrapper'>
      <section className='main-content'>
        <Header
          photo
          headerClass='main-content-header'
          headingAndMenuClass='main-content-heading-and-menu'
          heading='Hi there!'
          hasVisitPages
        />

        <p className='main-content-wrapper-p'>
          I'm <b>Ameya Joshi</b>,&nbsp;a Frontend/React developer based in the
          Oklahoma City metro, with 5+ years of professional experience that
          includes <b>React</b> and <b>TypeScript</b>, among a host of other
          tools. I enjoy web development, am an avid aviation enthusiast and
          have a Meteorology degree as well. I call it the "three-way cloud
          connection". In keeping with that theme, each aircraft window's shade
          below will reveal links to pages showing my credentials, career
          experience and on what I am working, as well as projects I have
          recently completed. Intrigued? Check it out!
        </p>
      </section>
      <Windows />
    </div>
  );
};

export default LandingPage;
