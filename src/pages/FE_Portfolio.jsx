import React from 'react';
import { Link } from 'react-router';
import Resume from '../assets/Ameya_Joshi_FE_Dev_Resume.pdf';
import '../styles/portfolio.css';

const FE_Portfolio = () => {
  return (
    <div className='portfolio-content-wrapper'>
      <section className='portfolio-content'>
        <h1>Resume and Skills</h1>

        <details>
          <summary>Resume</summary>
          <a href={Resume} target='_blank'>
            Download
          </a>
        </details>

        <div className='back-to-home-link'>
          <Link to='/'>Back to landing page</Link>
        </div>
      </section>
    </div>
  );
};

export default FE_Portfolio;
