import { useState } from 'react';

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

  return (
    <section className='slide-container'>
      <button
        className='slide-buttons button-left'
        id='previousPhotoButton'
        onClick={handleOnClickPrevious}
      >
        <i className='fa-solid fa-caret-left'></i>
      </button>
      <a href={slidesArray[slideIndex].fullSize} className='slides'>
        <img src={slidesArray[slideIndex].slide} alt='slide' />
      </a>
      <button
        className='slide-buttons button-right'
        id='nextPhotoButton'
        onClick={handleOnClickNext}
      >
        <i className='fa-solid fa-caret-right'></i>
      </button>
    </section>
  );
};

export default Slider;
