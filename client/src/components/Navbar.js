import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/Logo.png';

const Navbar = () => {
  return (
    <Fragment>
      <nav className='navbar'>
        <h3>
          <Link to='/'>
            <img src={logo} alt="logo" style={{ height: '8vh', width: 'auto', fontFamily: "Times New Roman" }} />
          </Link>
        </h3>
        <ul>
          <li>
            <Link to='/prestations' style={{ fonSize: '30px' }}>Nos prestations</Link>
          </li>
          <li>
          <div className='buttons'>
            <Link to='/devis' classname="btn btn-primary">Devis gratuit</Link>
          </div>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
