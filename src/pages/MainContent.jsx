import { Windows } from '../components/Windows';

const Main = () => {
  return (
    <>
      <header className='main-content-wrapper'>
        <section className='main-content'>
          <h1 tabIndex={0}>Welcome!</h1>
          <p tabIndex={0}>
            My name is <b>Ameya Joshi&nbsp;</b>
            and I enjoy coding, am an avid aviation enthusiast and have a
            Meteorology degree. I call it the "three-way cloud connection". To
            further explore my credentials and some other cloud-related
            information about myself, please open the aircraft window shades
            below by&nbsp;
            <span className='mobile-only'>tapping them.</span>
            <span className='desktop-only'>mousing over them.</span>
          </p>
        </section>
        <Windows />
      </header>
    </>
  );
};

export default Main;
