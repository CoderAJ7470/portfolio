import { useEffect, useState } from 'react';

import { slidesArray } from '../helpers/PhotoVault';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleOnClickPrevious = () => {
    if (slideIndex === 0) {
      setSlideIndex(slidesArray.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleOnClickNext = () => {
    if (slideIndex === slidesArray.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  useEffect(() => {
    if (window.localStorage.length !== 0) {
      const index = JSON.parse(window.localStorage.getItem('slideIndex'));

      setSlideIndex(index);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('slideIndex', slideIndex);
  }, [slideIndex]);

  return (
    <section className='slide-container'>
      <button
        className='slide-buttons button-left'
        id='previousPhotoButton'
        onClick={handleOnClickPrevious}
        aria-label='Click this button to show the previous image'
      >
        <i className='fa-solid fa-caret-left'></i>
      </button>
      <a
        href={slidesArray && slidesArray[slideIndex].fullSize}
        className='slides'
      >
        <img src={slidesArray && slidesArray[slideIndex].slide} alt='slide' />
      </a>
      <button
        className='slide-buttons button-right'
        id='nextPhotoButton'
        onClick={handleOnClickNext}
        aria-label='Click this button to show the next image'
      >
        <i className='fa-solid fa-caret-right'></i>
      </button>
    </section>
  );
};

export default Slider;
