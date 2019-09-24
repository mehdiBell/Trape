import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import video from '../video/video.mp4';

const Landing = () => {
  return (
    <Fragment>
      <section className='landing-test'>
        <div className='dark-overlay'>
          <video className='videoTag' autoPlay loop muted>
            <source src={video} type='video/mp4' />
          </video>
          <div className='landing-inner'>
            <h1 className='x-large'>Trapeze</h1>
            <p className='lead'>
              Le spécialiste, avec 20 ans d'expérience, des Travaux du bâtiment
              d’accès difficile et du Nettoyage en hauteur.
            </p>
            <div className='buttons'>
              <Link to='/devis' className='btn btn-primary'>
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className='landing-test-1'>
        <h1 className='x-large'>Trapeze ...</h1>
        <p className='lead'>La photo pourrait être celle de l'équipe Trapeze</p>
        <div className='buttons'>
          <Link to='/prestations' className='btn btn-primary'>
            Prestations
          </Link>
          <Link to='/recrutement' className='btn btn-light'>
            Postuler
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
