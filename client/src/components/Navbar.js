import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav className='navbar bg-dark'>
        <h3>
          <Link to='/'>
            <i className='fas fa-code' /> Trapeze
          </Link>
        </h3>
        <ul>
          <li>
            <Link to='/prestations'>Nos prestations</Link>
          </li>
          <li>
            <Link to='/devis'>Devis gratuit</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
