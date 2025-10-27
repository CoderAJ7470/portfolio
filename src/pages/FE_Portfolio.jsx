import Header from '../components/Header';
import Resume from '../components/Resume';
import googleCDLBadge from '../assets/cdl_certification.png';

import '../styles/portfolio.css';
import '../styles/common.css';

const FE_Portfolio = () => {
  return (
    <div className='portfolio-content-wrapper'>
      <section className='portfolio-content'>
        <section className='portfolio-content-header'>
          <Header
            headerClass='portfolio-content-header'
            hasMenu
            headingAndMenuClass='portfolio-heading-and-menu'
            heading='Resume/Skills'
            home
            experience
            outsideWork
            projects
          />
        </section>

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
            <li>HTML5, CSS3, JavaScript</li>
            <li>React, TypeScript</li>
            <li>Git/GitHub, BitBucket</li>
            <li>Jira, Confluence</li>
            <li>Responsive Web Design, Accessibility</li>
            <li>AG Grid, amCharts 4, Storybook</li>
            <li>React Testing Library, Jest, Enzyme, Cypress</li>
            <li>
              Adding translation functionality with react-i18next and ttag
            </li>
            <li>Vite - in fact, I created this site with Vite!</li>
            <li>
              Some experience with NodeJS, Splunk, Postman, Redux, Redux
              Toolkit, RTK Query, Node.js
            </li>
            <li>
              Redux Toolkit - picked up recently from&nbsp;
              <a
                href='https://www.youtube.com/playlist?list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3'
                target='_blank'
                className='non-card-links'
              >
                Codevolution's tutorial
              </a>
              <i className='fa-solid fa-up-right-from-square'></i>
            </li>
            <li>
              I have also been using ChatGPT to get into AI, improve my coding
              speed and get helpful suggestions. I still write much of my own
              code though.
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default FE_Portfolio;
