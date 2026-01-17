import Nav from '../components/Nav';
import googleCDLBadge from '../assets/cdl_certification.png';

import '../styles/fe-portfolio.css';

const FE_Portfolio = () => {
  return (
    <div className='portfolio-content-wrapper'>
      <section className='portfolio-content'>
        <Nav />

        <section className='skills'>
          <h2>Skills-at-a-glance</h2>

          <div className='skills-card'>
            <h3>Professional experience with</h3>
            <ul>
              <li>React, TypeScript</li>
              <li>HTML5, CSS3, JavaScript</li>
              <li>Git/GitHub, BitBucket</li>
              <li>Jira, Confluence</li>
              <li>Responsive Web Design, Accessibility</li>
              <li>AG Grid, amCharts 4, Storybook</li>
              <li>React Testing Library, Jest, Enzyme, Cypress</li>
              <li>
                Adding translation functionality with react-i18next and ttag
              </li>
              <li>Some experience with Node.js, Splunk, Postman</li>
            </ul>
          </div>

          <div className='skills-card'>
            <h3>What I have picked up recently</h3>
            <ul>
              <li>Vite - in fact, I created this site with Vite!</li>
              <li>
                Redux Toolkit - picked up recently from&nbsp;
                <a
                  href='https://www.youtube.com/playlist?list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3'
                  target='_blank'
                  className='list-links'
                >
                  Codevolution&apos;s tutorial
                </a>
                <i className='fa-solid fa-up-right-from-square'></i>
              </li>
              <li>
                I am also using AI to enhance my coding productivity and get
                better-acquainted with this new area of software development.
                However, I still enjoy problem-solving and writing my own code.
                I have my thinking cap on when I encounter a challenge!
              </li>
              <li>
                Some experience with Next.js Redux, Redux Toolkit, RTK Query
              </li>
            </ul>

            <p className='card-paragraphs'>
              Also, have a look at my&nbsp;
              <a href='/portfolio/projects/' className='list-links'>
                projects
              </a>
              , where you will find what I worked on recently, as well as what I
              am currently working on and learning.
            </p>
          </div>
        </section>

        <section className='resume-and-certifications'>
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
          </section>
        </section>
      </section>
    </div>
  );
};

export default FE_Portfolio;
