import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import video from '../video/video.mp4';
import imgSrc from '../img/protection/securite.jpg';

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
        <h3 className='text-center'>Bâtiment</h3>
        <div className="splitScreen">
          <img
            src={imgSrc}
            alt='shit'
            style={{ borderRadius: '25px' }}
          />
          <p className='lead mr-4'>
            Réparation Gouttière En matière de réparation gouttière et ce quelle
            que soit la difficulté d’accès de vos toitures, nos couvreurs
            cordistes interviennent rapidement et efficacement pour la pose ou
            la réparation de gouttières, de cheneaux et de descentes d’eaux
            pluviales. Réparation gouttière : Rapidité et qualité d’intervention
            pour la réparation des cheneaux et de descentes d’eaux pluviales
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
