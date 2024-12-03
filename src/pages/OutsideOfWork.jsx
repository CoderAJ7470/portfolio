import '../styles/portfolio.css';
import { Link } from 'react-router';

const OutsideOfWork = () => {
  return (
    <section>
      <div>Some aviation stuff</div>
      <div>Awesome aviation wings 'n' things here</div>

      <div className='links'>
        <Link to='/'>Back to landing page</Link>
      </div>
    </section>
  );
};

export default OutsideOfWork;
