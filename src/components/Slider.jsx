import { useState } from 'react';

import test_photo from '../assets/slide_show_photos/split-scimitar-slide.jpg';
import test_photo_full from '../assets/slide_show_photos/full_size_photos/split-scimitar-full.jpg';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <section className='slide-container'>
      <button className='slide-buttons button-left' id='previousPhotoButton'>
        <i className='fa-solid fa-caret-left'></i>
      </button>
      <a href={test_photo_full} className='slides'>
        <img src={test_photo} alt='test photo' />
      </a>
      <button className='slide-buttons button-right' id='nextPhotoButton'>
        <i className='fa-solid fa-caret-right'></i>
      </button>
    </section>
  );
};

export default Slider;
