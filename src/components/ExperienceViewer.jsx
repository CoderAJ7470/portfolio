import { useEffect, useState } from 'react';
import { experienceData } from '../helpers/experience-content';
import '../styles/experience-viewer.css';

const ExperienceViewer = ({ isOpen, onClose }) => {
  const [buttonClicked, setButtonClicked] = useState(0);

  useEffect(() => {
    console.log('clicked button ', buttonClicked);
  }, [buttonClicked]);

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div
        className='modal-content client-xp-viewer-wrapper'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='modal-controls'>
          <section className='client-experience-buttons'>
            {experienceData.map((_, index) => (
              <button
                key={index}
                className={`client-xp-btn ${
                  buttonClicked === index ? 'selected-button' : ''
                }`}
                onClick={() => setButtonClicked(index)}
              >
                Client {index + 1}
              </button>
            ))}
          </section>

          <button className='modal-close-button' onClick={onClose}>
            x
          </button>
        </div>

        <section className='experience-card'>
          <div key={buttonClicked} className='experience-content fade'>
            <h2>
              {experienceData[buttonClicked].clientLabel} -{' '}
              {experienceData[buttonClicked].title}
            </h2>

            {experienceData &&
              experienceData[buttonClicked].bullets.map((bullet, index) => (
                <p key={index}>
                  {<i className={experienceData[buttonClicked].icon}></i>}{' '}
                  {bullet}
                </p>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExperienceViewer;
