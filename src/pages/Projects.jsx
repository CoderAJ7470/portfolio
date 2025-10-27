import Header from '../components/Header';

import '../styles/portfolio.css';
import '../styles/common.css';

const Projects = () => {
  return (
    <div className='projects-wrapper'>
      <section className='projects-content'>
        <section className='projects-content-header'>
          <Header
            headerClass='projects-header'
            hasMenu
            headingAndMenuClass='projects-heading-and-menu'
            heading='Projects/Learning'
            home
            portfolio
            experience
            outsideWork
          />
        </section>

        <section className='projects-content-wrapper'>
          <p>
            Below is a listing of things on which I have been working, or have
            completed. Feel free to browse the cards below and have a look at my
            projects, see the code and have a look at what I have been learning
            recently. I use Prettier and ES Lint in all of my projects unless
            otherwise noted. I have also been getting into AI to get better
            acquainted with it, but I still write a lot of of my own code.
          </p>

          <h2>Recently completed projects</h2>

          <section className='project-cards'>
            <div className='project-card'>
              <p>
                <b>This Website</b> |{' '}
                <a
                  href='https://github.com/CoderAJ7470/portfolio'
                  className='list-links'
                  target='_blank'
                >
                  See the code
                </a>
                <i className='fa-solid fa-up-right-from-square'></i> |{' '}
                <span className='projects-tech-used'>
                  Tech used: Vite, React, React Router, JavaScript, CSS3
                </span>
              </p>
            </div>
            <div className='project-card'>
              <p>
                <a
                  href='https://coderaj7470.github.io/random-dad-jokes/'
                  className='list-links'
                  target='_blank'
                >
                  Random Dad Jokes
                </a>
                <i className='fa-solid fa-up-right-from-square'></i> |{' '}
                <a
                  href='https://github.com/CoderAJ7470/random-dad-jokes'
                  className='list-links'
                  target='_blank'
                >
                  See the code
                </a>
                <i className='fa-solid fa-up-right-from-square'></i> |{' '}
                <span className='projects-tech-used'>
                  Tech used: Vite, React, TypeScript, CSS3, RTK Query
                </span>
              </p>
              <p className='descriptions'>
                A simple page I created to show random dad jokes from the{' '}
                <a
                  href='https://icanhazdadjoke.com/api'
                  className='list-links'
                  target='_blank'
                >
                  icanhazdadjoke api
                </a>
                <i className='fa-solid fa-up-right-from-square'></i>. I used RTK
                Query, which I have recently learned, to make the api call and
                show the results in the UI.
              </p>
            </div>
          </section>

          <h2>Projects completed as learning</h2>

          <section className='project-cards'>
            <div className='project-card'>
              <p>
                <a
                  href='https://book-a-room-neon.vercel.app/login'
                  className='list-links'
                  target='_blank'
                >
                  Book A Room
                </a>
                <i className='fa-solid fa-up-right-from-square'></i> |{' '}
                <a
                  href='https://github.com/CoderAJ7470/book-a-room'
                  className='list-links'
                  target='_blank'
                >
                  See the code
                </a>
                <i className='fa-solid fa-up-right-from-square'></i> |{' '}
                <span className='projects-tech-used'>
                  Tech used: Vite, React, Next.js, JavaScript, Tailwind CSS,
                  AppWrite
                </span>
              </p>
              <p className='descriptions'>
                I decided to create this app following Brad Traversy's{' '}
                <a
                  href='https://www.youtube.com/watch?v=l9zh0pqEHyc'
                  className='list-links'
                  target='_blank'
                >
                  tutorial
                </a>
                <i className='fa-solid fa-up-right-from-square'></i> on his
                Youtube channel. Since the video was uploaded a year ago, this
                was not exactly straight-forward to follow and presented some
                challenges, especially since Appwrite itself has had some
                changes since then (one of which occurred as I was writing the
                code!).
                <br />
                <br />
                To read more about how I tackled these challenges, see the{' '}
                <a
                  href='https://github.com/CoderAJ7470/book-a-room/blob/master/README.md'
                  className='list-links'
                  target='_blank'
                >
                  Readme
                </a>
                <i className='fa-solid fa-up-right-from-square'></i> for this
                project. Also, this was my first deployment on Vercel, and the
                first time I used Appwrite as the backend service. Learned a lot
                in the process!
              </p>
            </div>
          </section>

          <section className='current-learning'>
            <h3>What am I working on/learning right now?</h3>

            <ul>
              <li>
                Improving my understanding of&nbsp;
                <a
                  href='https://www.udemy.com/share/10aMwc/'
                  target='_blank'
                  className='list-links'
                >
                  React unit and E2E testing
                </a>
                <i className='fa-solid fa-up-right-from-square'></i>
              </li>
              <li>
                Learning&nbsp;
                <a
                  href='https://www.youtube.com/playlist?list=PLC3y8-rFHvwhIEc4I4YsRz5C7GOBnxSJY'
                  target='_blank'
                  className='list-links'
                >
                  NextJS 15
                </a>
                <i className='fa-solid fa-up-right-from-square'></i>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Projects;
