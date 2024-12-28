import Header from '../components/Header';

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
            heading='Hobbies'
            home
            portfolio
            experience
          />
        </section>

        <section className='hobbies-content-wrapper'>
          <h3>
            So, what do I like to do when I'm not coding/programming you ask?
          </h3>

          <ul>
            <li>
              <b>Reading</b> - mostly stuff on the web. I still do have a
              Reader's Digest subscription though
            </li>
            <li>
              <b>Riding my bicycle around town</b> when the weather's nice
              (which automatically eliminates all of Winter, and most of Fall
              and Spring)
            </li>
            <li>
              <b>Playing Euro Truck Simulator 2 and American Truck Simulator</b>
              ; fun fact (as if the rest of these are not fun facts already) -
              I've played ETS2 since 2014, and now have 165 drivers in my
              company (including myself) and a few more trucks than that, and
              some trailers. And did I mention the EUR 274+ million in the
              company bank? Of course, the company is still growing
            </li>
            <li>
              <b>Aviation</b> is a big hobby of mine. I read a lot of
              aviation-related stuff on the web, play a freeware flight sim
              (it's from the '90s but still has a decent player base), keep up
              with the aviation industry (you know, things like which airlines
              are launching new routes/cancelling them, which of them are
              ordering aircraft, which airports are building new terminals or
              expanding existing ones, and even the occasional qurterlu report
              of an airline)
            </li>
            <li>
              As you've read on the homepage, I also have a Bachelor of Science
              degree in Meteorology from the University of Oklahoma, which I
              received in 2006. I also try to keep up with latest happenings in
              Meteorology, though to a lesser extent than in aviation. A few of
              the weather-related websites I visit include the local&nbsp;
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
              the SPC's publications
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default OutsideOfWork;
