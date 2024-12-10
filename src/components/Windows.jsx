import { useEffect, useRef } from 'react';
import { Link } from 'react-router';

import '../styles/windows.css';

const Windows = () => {
  const slideShade = (e) => {
    let shadeId = '';

    // If the user clicks on/taps the window shade text, then you still want the
    // shade to slide up
    if (e.target.className === 'shadeText') {
      // prevent event from bubbling up to parent div and firing twice
      // resulting in the window opening and closing so quickly that it
      // looks as if it is not opening at all
      e.stopPropagation();
      shadeId = e.target.parentNode.id;
    } else {
      shadeId = e.target.id;
    }

    const windowShade = document.getElementById(shadeId);
    windowShade.classList.toggle('slide');
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
          className='shade'
          id='shadeOne'
          tabIndex={0}
          onClick={slideShade}
          onKeyDown={handleOnKeyDown}
        >
          <p
            className='shadeText'
            onClick={slideShade}
            onKeyDown={handleOnKeyDown}
          >
            Curriculum Vitae and Skills
          </p>
        </div>
        <div className='window-links'>
          <Link to='/portfolio'>See my resume and skills</Link>
        </div>
      </div>
      <div
        role='img'
        className='window'
        alt='An interactive aircraft window with a slideable window shade'
      >
        <div
          className='shade'
          id='shadeTwo'
          tabIndex={0}
          onClick={slideShade}
          onKeyDown={handleOnKeyDown}
        >
          <p
            className='shadeText'
            onClick={slideShade}
            onKeyDown={handleOnKeyDown}
          >
            Career Experience
          </p>
        </div>
        <div className='window-links'>
          <Link to='/experience'>Key career experiences</Link>
        </div>
      </div>
      <div
        role='img'
        className='window'
        alt='An interactive aircraft window with a slideable window shade'
      >
        <div
          className='shade'
          id='shadeThree'
          tabIndex={0}
          onClick={slideShade}
          onKeyDown={handleOnKeyDown}
        >
          <p
            className='shadeText'
            onClick={slideShade}
            onKeyDown={handleOnKeyDown}
          >
            Outside of Work
          </p>
        </div>
        <div className='window-links'>
          <Link to='/outside-work'>My hobbies and other things</Link>
        </div>
      </div>
    </section>
  );
};

export default Windows;
