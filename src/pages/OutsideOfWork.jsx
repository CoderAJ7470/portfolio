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
            projects
          />
        </section>

        <section className='hobbies-content-wrapper'>
          <p>So, what do I like to do for fun you ask?</p>

          <ul>
            <li>
              <b>Reading</b>
            </li>
            <li>
              <b>Riding my bicycle around town</b> when the weather's nice
            </li>
            <li>
              <b>Gaming</b>
            </li>
            <li>
              <b>Aviation</b> is a big hobby of mine, as you might have guessed
              from the&nbsp;
              <a href='/portfolio/' className='list-links'>
                home page
              </a>
              .
            </li>
            <li>Keeping up with the latest developments in Meteorology</li>
            <li>
              <b>Coding</b>, because learning is also fun!
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
            my phone - I'll share those when I update this viewer to an actual
            slider. You can call this "Version 1".
          </p>

          <Slider />
        </section>
      </section>
    </div>
  );
};

export default OutsideOfWork;
