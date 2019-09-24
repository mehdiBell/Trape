import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Securite = () => {
  return (
    <Fragment>
      <div className='parent mb-3' style={{ marginTop: '16vh' }}>
        <Link to='/securite/reglementation'>
          <div className='child1 card ml-2'> Réglementation</div>
        </Link>
        <Link to='/securite/protection-collective'>
          <div className='child2 card'>Protection collective</div>
        </Link>
        <Link to='/securite/materiel-cordiste'>
          <div className='child3 card mr-2'>Matériel cordiste</div>
        </Link>
      </div>
    </Fragment>
  );
};

export default Securite;
