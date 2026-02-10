import { useState } from 'react';
import Nav from '../components/Nav';
import ExperienceViewer from '../components/ExperienceViewer';

import '../styles/experience.css';
import '../styles/portfolio.css';
import '../styles/common.css';

const CareerExperience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className='career-experience-wrapper'>
        <div className='career-experience-content'>
          <Nav />

          <section className='experience-description-wrapper'>
            <p>
              My first frontend developer opportunity was at&nbsp;
              <a href='https://www.teamsparq.com/' target='_blank'>
                Sparq
              </a>
              <i className='fa-solid fa-up-right-from-square'></i>, where I
              worked from January 2019 through October 2024.
            </p>
            <p>
              There, I worked on four project teams helping various Sparq
              technology clients achieve their software goals. Open the
              "Experience Viewer" to see what I did, and the skills and tools I
              picked up on each project.
            </p>
          </section>

          <div className='experience-viewer-button-wrapper'>
            <button
              className='experience-viewer-button'
              onClick={() => setIsModalOpen(true)}
            >
              Open Experience Viewer
            </button>
          </div>
        </div>
      </div>
      <ExperienceViewer
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CareerExperience;
