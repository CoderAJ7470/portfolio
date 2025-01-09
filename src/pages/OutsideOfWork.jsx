import Header from '../components/Header';
import Slider from '../components/Slider';

import '../styles/portfolio.css';
import '../styles/common.css';

const OutsideOfWork = () => {
  return (
    <div className='hobbies-wrapper'>
      <section className='hobbies-content'>
        <section className='hobbies-content-header'>
          <Header
            headerClass='hobbies-header'
            hasMenu
            headingAndMenuClass='hobbies-heading-and-menu'
            heading='Outside of Work'
            home
            portfolio
            experience
          />
        </section>

        <section className='hobbies-content-wrapper'>
          <p>
            So, what do I like to do when I'm not coding/programming you ask?
          </p>

          <ul>
            <li>
              <b>Reading</b> - mostly stuff on the web. I still have a Reader's
              Digest subscription though
            </li>
            <li>
              <b>Riding my bicycle around town</b> when the weather's nice
            </li>
            <li>
              <b>Playing Euro Truck Simulator 2 and American Truck Simulator</b>
              ; fun fact (as if the rest of these are not fun facts already
              &#128521;) - I've played ETS2 since 2014, and now have 165 drivers
              in my company (including myself), a few more trucks than that
              number as well as some company-owned trailers. And did I mention
              the EUR 277+ million in the company bank? Of course, the company
              is still growing
            </li>
            <li>
              <b>Aviation</b> is a big hobby of mine (the&nbsp;
              <a href='/' className='hobbies-list-links'>
                home page
              </a>
              &nbsp;being a definite indicator &#128521;). I read a lot of
              aviation-related stuff on the web, play a freeware flight sim
              (it's from the '90s but still has a decent player base), keep up
              with the aviation industry (you know, things like which airlines
              are launching new routes/cancelling them, which of them are
              ordering aircraft, which airports are building new terminals or
              expanding existing ones, and even the occasional quarterly report
              of an airline)
            </li>
            <li>
              <b>
                As you've read on the&nbsp;
                <a href='/' className='hobbies-list-links'>
                  home page
                </a>
              </b>
              ,&nbsp; I also have a Bachelor of Science degree in Meteorology
              from the University of Oklahoma, which I received in 2006. I try
              to keep up with latest happenings in Meteorology, though to a
              lesser extent than in aviation. A few of the weather-related
              websites I visit include the local&nbsp;
              <a
                className='hobbies-list-links'
                href='https://www.weather.gov/oun/'
                target='_blank'
              >
                National Weather Service forecast office
              </a>
              &nbsp;and the&nbsp;
              <a
                className='hobbies-list-links'
                href='https://www.spc.noaa.gov/'
                target='_blank'
              >
                Storm Prediction Center (SPC)
              </a>
              . Usually what I read on these sites (other than the forecasts and
              daily outlooks, of course) are the area forecast discussion and
              the SPC's publications, respectively
            </li>
            <li>
              <b>Coding</b> - Yep, when I'm not typing code, I like to type...
              code. Like a lot of developers, I too can't resist a good side
              project or tutorial to keep me busy and learning new things. And
              of course, programming has also become my relaxation, if that
              makes sense...
            </li>
          </ul>
        </section>

        <section className='photo-slides-wrapper'>
          <h2>Photography</h2>
          <p>
            Since the early 2000s, I started developing an interest in aviation
            photography (though my liking for aviation goes well back to my
            childhood days), and now photography and videography have also
            kind-of-sort-of become my hobbies, though limited to times when I
            travel (I've rarely gone "spotting" except a few times with
            friends).
          </p>

          <p>
            I've also photographed weather phenomenon, either when I went storm
            chasing with friends in my Meteorology days, or just around town
            when weather events have occurred. And sometimes, I photograph
            non-aviation/non-weather-related stuff as well. I am still very much
            an amateur, but enjoy it all. If you fancy, below is an image viewer
            with some of the photos I have taken over the years (in no
            particular order). You can click on each one to view the full-size
            version. These are some of the older ones in 4:3 format, when I had
            a smaller Panasonic camera. I've also taken many in 16:9 format on
            my smart phones - I'll share those when I update this viewer to an
            actual slider. You can call this "version 1".
          </p>

          <Slider />
        </section>
      </section>
    </div>
  );
};

export default OutsideOfWork;
