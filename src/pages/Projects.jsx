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
            heading='Projects'
            home
            portfolio
            experience
            outsideWork
          />
        </section>

        <section className='projects-content-wrapper'>
          <h2>Some of my past projects (more than 2 years old)</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          recusandae mollitia aliquam reiciendis provident ab quod consectetur
          veritatis voluptatibus, nisi atque iure soluta? Rerum, laborum! Dolor
          reiciendis facilis nulla laudantium voluptates in accusamus tenetur
          laborum, mollitia consectetur deleniti libero dignissimos magnam
          possimus vero, incidunt nam at sit! Cupiditate cum quae vitae
          sapiente, et consequatur maiores magnam odio iste voluptatibus
          numquam, ab, debitis deleniti hic? Accusantium tenetur ad repellat
          quibusdam libero rem non ea soluta sunt cupiditate, commodi voluptatem
          delectus, molestiae temporibus veritatis laborum illo, vel id
          doloribus aliquid sit quae enim iure eius? Animi fugiat, iure nobis,
          corrupti, hic quaerat cumque quas similique quos rerum quidem at
          itaque maxime fugit eligendi ab in dolorum cupiditate? Fuga corporis
          odit quam minus!
          <section className='project-cards'></section>
        </section>
      </section>
    </div>
  );
};

export default Projects;
