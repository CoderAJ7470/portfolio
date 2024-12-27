import Header from '../components/Header';

import '../styles/portfolio.css';
import '../styles/common.css';

const CareerExperience = () => {
  const handleSectionOnClick = (e) => {
    if (e.target.classList.contains('section-buttons')) {
      const button = e.target;
      const expandable = e.target.nextElementSibling;

      button.classList.toggle('button-selected');
      button.classList.toggle('active-button');

      expandable.classList.toggle('is-open');
    }
  };

  const handleSectionOnFocus = (e) => {
    if (e.key === 'Enter') {
      if (e.target.classList.contains('section-buttons')) {
        const button = e.target;

        button.classList.add('active-button');
      }
    }
  };

  const handleSectionOnBlur = (e) => {
    if (e.target.classList.contains('section-buttons')) {
      const button = e.target;

      button.classList.remove('active-button');
    }
  };

  return (
    <div className='career-experience-wrapper'>
      <section className='career-experience-content'>
        <section className='career-experience-header'>
          <Header
            headerClass='experience-header'
            hasMenu
            headingAndMenuClass='experience-heading-and-menu'
            heading='Career Experience'
            home
            portfolio
            outSideWork
          />
        </section>

        <section className='experience-content-wrapper'>
          <p>
            At Sparq, I worked on four project teams helping Fortune 1000
            clients achieve their software goals, as well as an internal
            project. Below you'll find brief summaries of what I did and skills
            I picked up on each project.
          </p>
        </section>

        <section className='accordion-wrapper'>
          <button
            className='section-buttons'
            onClick={handleSectionOnClick}
            onFocus={handleSectionOnFocus}
            onBlur={handleSectionOnBlur}
          >
            Client 1 - Multinational Online Automotive Marketplace
          </button>
          <section className='expandable'>
            <div className='inner'>
              <p>
                <i className='fa-solid fa-car'></i>
                Tech stack was mainly NodeJS and AngularJS, so definitely
                outside my usual front-end comfort zone. Also had HTML 5, CSS 3
                and JS, plus some Java backend
              </p>
              <p>
                <i className='fa-solid fa-car'></i>I took the challenge head-on,
                which was made easier with all of the great support and
                collaboration from my peers
              </p>
              <p>
                <i className='fa-solid fa-car'></i>I handled varying tasks, from
                as simple as removing old Java backend code to handling
                complicated api-driven dynamic data handling
              </p>
            </div>
          </section>

          <button
            className='section-buttons'
            onClick={handleSectionOnClick}
            onFocus={handleSectionOnFocus}
            onBlur={handleSectionOnBlur}
          >
            Client 2 - Multinational IT Spend Management SaaS Company
          </button>
          <section className='expandable'>
            <div className='inner'>
              <p>
                <i className='fa-solid fa-chart-line'></i>
                The core tech stack on this project was React and TypeScript on
                the frontend, with NodeJS on the backend as well as GraphQL and
                Grafana. We also made extensive use of APIs
              </p>
              <p>
                <i className='fa-solid fa-chart-line'></i>
                Being on the frontend team, I helped the client re-build its
                all-in-one suite of IT spend management software from the ground
                up. I rebuilt several components in React and used TypeScript
                for functionality
              </p>
              <p>
                <i className='fa-solid fa-chart-line'></i>
                In addition to that, I had the opportunity to work with several
                new-to-me technologies at the time. These included Storybook,
                amCharts 4 and AG Grid
              </p>
              <p>
                <i className='fa-solid fa-chart-line'></i>I also worked on
                improving Outlook email templates, where I introduced dynamic
                content like names and dates; also worked extensively on
                enabling translations throughout the app for Spanish and French
                while I was on the project
              </p>
              <p>
                <i className='fa-solid fa-chart-line'></i>
                Last but not least, I was also given the opportunity to lead
                routine meetings like the daily standup, sprint retrospective
                and sprint planning. Leading these helped me further develop my
                soft skills
              </p>
            </div>
          </section>

          <button
            className='section-buttons'
            onClick={handleSectionOnClick}
            onFocus={handleSectionOnFocus}
            onBlur={handleSectionOnBlur}
          >
            Client 3 - Major financing and lending organization
          </button>
          <section className='expandable'>
            <div className='inner'>
              <p>
                <i className='fa-solid fa-dollar-sign'></i>
                The main focus for me on this project was to add accessibility
                to two of the client's apps - one internal, one public-facing
              </p>
              <p>
                <i className='fa-solid fa-dollar-sign'></i>
                The frontend code base on this project was also in React and
                TypeScript, with NodeJS, APIs and other backend code
              </p>
              <p>
                <i className='fa-solid fa-dollar-sign'></i>
                This was my first deep-dive into accessibility in web apps, so I
                took the time to really learn what it's about, how it works and
                get familiar with the various specifications of the Web Content
                Accessibility Guidelines (WCAG)
              </p>
              <p>
                <i className='fa-solid fa-dollar-sign'></i>
                Learned about and used semantic HTML, ARIA attributes, the
                browser WAVE Tool extension and the WCAG color contrast checker
              </p>
              <p>
                <i className='fa-solid fa-dollar-sign'></i>
                Also learned how the NVDA screen reader works, and thoroughly
                tested it in both web apps to ensure correct functionality
              </p>
            </div>
          </section>

          <button
            className='section-buttons'
            onClick={handleSectionOnClick}
            onFocus={handleSectionOnFocus}
            onBlur={handleSectionOnBlur}
          >
            Client 4 - Multinational vehicle rental and mobility company
          </button>
          <section className='expandable'>
            <div className='inner'>
              <p>
                <i className='fa-solid fa-car-side'></i>
                This project's main goal was to help the client build a new
                SMS-based app, with which the client's agents can communicate
                with customers and help them with the rental process simply
                through texts
              </p>
              <p>
                <i className='fa-solid fa-car-side'></i>
                The original app had some fundamental issues which I helped
                resolve intially after joining the project team
              </p>
              <p>
                <i className='fa-solid fa-car-side'></i>I worked with both, the
                frontend and backend teams on the Sparq and client side to help
                build out the app's features and improve existing code as well
              </p>
              <p>
                <i className='fa-solid fa-car-side'></i>
                The bulk of my work involved various UI features, from as basic
                as sending/receiving text messages and showing conversations, to
                more complex ones like populating filtered API data in search
                results, searching for closed conversations or showing
                conversation history for a particular rental code
              </p>
              <p>
                <i className='fa-solid fa-car-side'></i>
                The tech stack was once again React and TypeScript, but the
                project also had an AWS environment which was tied into backend
                lambdas. From time to time, I paired up with backend team
                colleagues to help with timeline-driven tasks, which involved
                querying data with Splunk and/or Postman, and also conducting
                specialized searches in AWS
              </p>
              <p>
                <i className='fa-solid fa-car-side'></i>I also worked on
                implementing accessibility and translations in the app, using my
                experience gained in both areas from the previous two client
                projects
              </p>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default CareerExperience;
