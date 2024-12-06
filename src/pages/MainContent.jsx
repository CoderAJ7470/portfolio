import { useEffect } from 'react';
import { Windows } from '../components/Windows';
import portfolioImage from '../assets/portfolio-site-photo.jpg';

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='main-content-wrapper'>
      <section className='main-content'>
        <section className='main-content-title'>
          <img
            className='portfolio-photo'
            src={portfolioImage}
            alt="Ameya's portfolio photograph"
          />
          <h1>Hi there!</h1>
        </section>
        <p>
          I'm <b>Ameya Joshi&nbsp;</b>, a Frontend/React developer based in the
          Oklahoma City metro area, with 5+ years of professional experience
          that includes <b>React</b> and <b>TypeScript</b>. I enjoy coding, am
          an avid aviation enthusiast and have a Meteorology degree as well. I
          call it the "three-way cloud connection". In keeping with that theme
          are some aircraft-style windows below.&nbsp;
          <span className='mobile-only'>Tap&nbsp;</span>
          <span className='desktop-only'>Click&nbsp;</span>each window's shade
          to have a look at my resume, career experience and what I like to do
          outside of work. Intrigued? Check it out!
        </p>
      </section>
      <Windows />
    </div>
  );
};

export default Main;
