import Nav from '../components/Nav';
import '../styles/experience.css';
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
    if (e.key === 'Enter' && e.target.classList.contains('section-buttons')) {
      e.target.classList.add('active-button');
    }
  };

  const handleSectionOnBlur = (e) => {
    if (e.target.classList.contains('section-buttons')) {
      e.target.classList.remove('active-button');
    }
  };

  return (
    <div className='career-experience-wrapper'>
      <div className='career-experience-content'>
        <Nav />

        <section className='experience-content-wrapper'>
          <p>
            My first frontend developer opportunity was at&nbsp;
            <a href='https://www.teamsparq.com/' target='_blank'>
              Sparq
            </a>
            <i className='fa-solid fa-up-right-from-square'></i>, where I worked
            from January 2019 through October 2024.
          </p>
          <p>
            There, I worked on four project teams helping various Sparq
            technology clients achieve their software goals. Below you'll find
            brief summaries of what I did and skills I picked up on each
            project.
          </p>
        </section>

        <section className='accordion-wrapper'>
          {/* Client 1 */}
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
                and JS, plus some Java backend.
              </p>
              <p>
                <i className='fa-solid fa-car'></i>I took the challenge head-on,
                which was made easier with all of the great support and
                collaboration from my peers.
              </p>
              <p>
                <i className='fa-solid fa-car'></i>I handled varying tasks, from
                as simple as removing old Java backend code to handling
                complicated api-driven dynamic data handling, with some small
                frontend tasks sprinkled in.
              </p>
              <p>
                <i className='fa-solid fa-car'></i>I did get a chance to do some
                more "involved" frontend work towards the end of the project,
                which looked simple on paper but was made more complex because
                of the structure of the code - adding a link in the footer. This
                was to be done on multiple pages in the monorepo. Eventually,
                this involved many colleagues working across several pages at
                the same time, and the lead developer on the Sparq team put me
                in charge of the footer changes, keeping track of which page's
                footer had the link and which still needed it. While nothing
                earth-shattering, it was a good first experience in
                collaboration and communication across different teams.
              </p>
            </div>
          </section>

          {/* Client 2 */}
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
                Grafana. We also made extensive use of APIs.
              </p>
              <p>
                <i className='fa-solid fa-chart-line'></i>
                Being on the frontend team, I helped the client re-build its
                all-in-one suite of IT spend management software from the ground
                up. I rebuilt several components in React and used TypeScript
                for functionality.
              </p>
              <p>
                <i className='fa-solid fa-chart-line'></i>
                In addition to that, I had the opportunity to work with several
                new-to-me technologies at the time. These included Storybook,
                amCharts 4 and AG Grid.
              </p>
              <p>
                <i className='fa-solid fa-chart-line'></i>I also worked on
                improving Outlook email templates, where I introduced dynamic
                content like names and dates; also worked extensively on
                enabling translations throughout the app for Spanish and French.
              </p>
              <p>
                <i className='fa-solid fa-chart-line'></i>
                Last but not least, I was also given the opportunity to lead
                routine meetings like the daily standup, sprint retrospective
                and sprint planning. Leading these further developed my soft
                skills.
              </p>
            </div>
          </section>

          {/* Client 3 */}
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
                to two of the client's apps - one internal, one public-facing.
              </p>
              <p>
                <i className='fa-solid fa-dollar-sign'></i>
                The frontend code base on this project was also in React and
                TypeScript, with NodeJS, APIs and other backend code.
              </p>
              <p>
                <i className='fa-solid fa-dollar-sign'></i>
                This was my first deep-dive into accessibility in web apps, so I
                took the time to really learn what it's about, how it works and
                get familiar with the various specifications of the Web Content
                Accessibility Guidelines (WCAG).
              </p>
              <p>
                <i className='fa-solid fa-dollar-sign'></i>I learned and used
                semantic HTML, ARIA attributes, the browser WAVE Tool extension
                and the WCAG color contrast checker.
              </p>
              <p>
                <i className='fa-solid fa-dollar-sign'></i>
                Also learned how the NVDA screen reader works, and thoroughly
                tested it in both web apps to ensure correct functionality.
              </p>
            </div>
          </section>

          {/* Client 4 */}
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
                SMS-based app. Using the app, the client's rental agents are
                able to communicate with their customers solely through texts
                for car and truck rentals.
              </p>
              <p>
                <i className='fa-solid fa-car-side'></i>
                The original app had some fundamental issues and bugs which I
                helped resolve initially after joining the project team. Once
                again, the tech stack on this project included React and
                TypeScript, giving me further experience with both. On the
                backend, we had APIs, NodeJS and custom lambdas written in
                JavaScript, as well as an AWS environment.
              </p>
              <p>
                <i className='fa-solid fa-car-side'></i>I worked with both, the
                frontend and backend teams on the Sparq and client side to help
                build out the app's features and improve existing code.
              </p>
              <p>
                <i className='fa-solid fa-car-side'></i>
                The bulk of my work involved various UI features, from as basic
                as sending/receiving text messages and showing conversations, to
                more complex ones like populating filtered API data in search
                results, searching for closed conversations or showing
                conversation history for a particular rental or reservation.
              </p>
              <p>
                <i className='fa-solid fa-car-side'></i>
                From time to time, I paired up with backend team colleagues to
                help with timeline-driven tasks or fix bugs, which involved
                querying data with Splunk and/or Postman, and also conducting
                specialized searches in AWS. Occasionally, I also helped the QA
                team with its own tasks when time was on the short side.
              </p>
              <p>
                <i className='fa-solid fa-car-side'></i>In addition to all that,
                I also worked on implementing accessibility and translations in
                the app, using my experience gained in both areas from the
                previous two client projects.
              </p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default CareerExperience;
