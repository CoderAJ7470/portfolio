import { useEffect, useRef } from 'react';
import { Link } from 'react-router';

export const Windows = () => {
  const shadeRefLink = useRef(null);

  const slideShade = (e) => {
    const shadeId = e.target.id;

    if (shadeId) {
      const windowShade = document.getElementById(shadeId);
      windowShade.classList.toggle('slide');
    }
  };

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      slideShade(e);
    }
  };

  return (
    <section className='windows-container'>
      <div
        role='img'
        className='window'
        alt='An interactive aircraft window with a slideable window shade'
      >
        <div
          className='shade1'
          id='shadeOne'
          tabIndex={0}
          onClick={slideShade}
          onKeyDown={handleOnKeyDown}
        >
          <div
            className='shade1Text'
            onClick={slideShade}
            onKeyDown={handleOnKeyDown}
          >
            My FE Dev Portfolio
          </div>
        </div>
        <div className='window-links'>
          <Link to='/portfolio'>My Frontend Dev Portfolio</Link>
        </div>
      </div>
      <div
        role='img'
        className='window'
        alt='An interactive aircraft window with a slideable window shade'
      >
        <div
          className='shade2'
          id='shadeTwo'
          tabIndex={0}
          onClick={slideShade}
          onKeyDown={handleOnKeyDown}
        >
          <div
            className='shade2Text'
            onClick={slideShade}
            onKeyDown={handleOnKeyDown}
          >
            My Meteorology Stuff
          </div>
        </div>
        <div className='window-links'>
          <Link to='/meteorology-stuff'>Meteorology Stuff</Link>
        </div>
      </div>
      <div
        role='img'
        className='window'
        alt='An interactive aircraft window with a slideable window shade'
      >
        <div
          className='shade3'
          id='shadeThree'
          tabIndex={0}
          onClick={slideShade}
          onKeyDown={handleOnKeyDown}
        >
          <div
            className='shade3Text'
            onClick={slideShade}
            onKeyDown={handleOnKeyDown}
          >
            My Aviation Stuff
          </div>
        </div>
        <div className='window-links'>
          <Link to='/aviation-stuff'>Aviation Stuff</Link>
        </div>
      </div>
    </section>
  );
};
