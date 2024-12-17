import { useEffect } from 'react';
import Header from '../components/Header';
import Windows from '../components/Windows';

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='main-content-wrapper'>
      <section className='main-content'>
        <Header
          photo
          headerClass='main-content-header'
          headingAndMenuClass='main-content-heading-and-menu'
          heading='Hi there!'
        />

        <p className='main-content-wrapper-p'>
          I'm <b>Ameya Joshi&nbsp;</b>, a Frontend/React developer based in the
          Oklahoma City metro area, with 5+ years of professional experience
          that includes <b>React</b> and <b>TypeScript</b>. I enjoy coding, am
          an avid aviation enthusiast and have a Meteorology degree as well. I
          call it the "three-way cloud connection". In keeping with that theme
          are some aircraft-style windows below.&nbsp;
          <span className='mobile-only'>Tap&nbsp;</span>
          <span className='desktop-only'>Open&nbsp;</span>each window's shade to
          have a look at my resume, career experience and what I like to do
          outside of work. Intrigued? Check it out!
        </p>
      </section>
      <Windows />
    </div>
  );
};

export default Main;
