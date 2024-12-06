import React, { useEffect } from 'react';
import { Link } from 'react-router';
import Resume from '../components/Resume';
import googleCDLBadge from '../assets/cdl_certification.png';

import '../styles/portfolio.css';
import '../styles/common.css';

const FE_Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='portfolio-content-wrapper'>
      <section className='portfolio-content'>
        <h1>Resume and Skills</h1>
        <h2>Resume</h2>
        <section className='resume-and-certifications'>
          <Resume />
          <img
            src={googleCDLBadge}
            alt='Google Cloud Digital Leader Certification badge'
          />
        </section>

        <section className='skills'>
          <h2>Skills-at-a-glance</h2>

          <ul>
            <li>HTML 5, CSS 3, ES 6 JavaScript</li>
            <li>React, TypeScript</li>
            <li>Git CLI, GitHub, BitBucket</li>
            <li>Jira, Confluence</li>
            <li>Responsive Web Design, Accessibility</li>
            <li>Experience with AG Grid, amCharts 4, Storybook</li>
            <li>
              Adding translation functionality with react-i18next and ttag
            </li>
            <li>Some experience with NodeJS, Splunk, Postman</li>
            <li>Writing unit tests with React Testing Library, Jest, Enzyme</li>
          </ul>
        </section>

        <section className='back-to-home-link'>
          <Link to='/'>Back to landing page</Link>
        </section>
      </section>
    </div>
  );
};

export default FE_Portfolio;
