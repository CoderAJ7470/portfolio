import React, { useEffect } from 'react';
import Header from '../components/Header';
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
        <Header
          sectionClass='portfolio-content-header'
          heading='Resume and Skills'
        />

        <section className='resume-and-certifications'>
          <Resume />

          <section className='cdl-certification'>
            <h2>CDL Certification</h2>
            <a
              href='https://www.credly.com/badges/cc5feff7-0279-49bb-b66c-fd42ed5e8df5/public_url'
              target='_blank'
            >
              <img
                src={googleCDLBadge}
                className='cdl-badge'
                alt='Google Cloud Digital Leader Certification badge'
              />
            </a>
            <p>Thumbnail opens cert. in a new tab/window</p>
          </section>
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
      </section>
    </div>
  );
};

export default FE_Portfolio;
