import Nav from '../components/Nav';
import googleCDLBadge from '../assets/cdl_certification.png';

import '../styles/fe-portfolio.css';

const FE_Portfolio = () => {
  return (
    <div className='portfolio-content-wrapper'>
      <section className='portfolio-content'>
        <Nav />

        <section className='skills'>
          <p>
            I am a frontend developer with over 5 years of professional
            React/TypeScript experience, in addition to building and maintaining
            multiple enterprise-level applications. I focus on shipping
            reliable, maintainable features, and I actively research and
            experiment to solve challenges - whether that is integrating APIs,
            implementing accessibility, or improving UI components. I have
            worked closely with backend and QA teams, and I take ownership of
            tasks while collaborating effectively. Below is a listing of skills
            in which I am proficient, and ones that I have recently picked up.
          </p>

          <div className='skills-card'>
            <h3>Professional experience:</h3>
            <ul>
              <li>
                <b>Frontend</b>: HTML5, CSS3, JavaScript, React, TypeScript,
                Responsive Design
              </li>
              <li>
                <b>Accessibility</b>: WCAG AA, Semantic HTML, ARIA,
                Screen-reader support (NVDA)
              </li>
              <li>
                <b>Tooling</b>: Visual Studio Code, Storybook, Git/GitHub
              </li>
              <li>
                <b>Testing:</b> Jest, React Testing Library, Cypress, Enzyme
              </li>
              <li>
                <b>Data/Visualization</b>: AG Grid, amCharts 4
              </li>
              <li>
                <b>Some experience with</b> i18n (react-i18next, ttag), Agile,
                Splunk, Postman, Redux, Node.js
              </li>
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
                Accruing experience in Next.js, Redux, Redux Toolkit, RTK Query
              </li>
              <li>
                I am also using AI to enhance my coding productivity and get
                better-acquainted with this new area of software development.
                However, I still enjoy problem-solving and writing my own code.
                I have my thinking cap on when I encounter a challenge!
              </li>
            </ul>

            <p className='card-paragraphs'>
              Also, have a look at my&nbsp;
              <a href='/portfolio/projects' className='list-links'>
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
