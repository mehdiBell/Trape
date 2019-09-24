import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Prestations = () => {
  return (
    <Fragment>
      <div className='landing-batiment'>
        <div className='landing-inner'>
          <h1 className='x-large'>Batiment travaux acces difficle</h1>
          <p className='lead'>Services proposés :</p>
          <ul>
            <Link to='/prestations/batiment/ravalement-facade'>
              <li>• Ravalement de Façade Accès Difficile</li>
            </Link>
            <Link to='/prestations/batiment/renovation-toiture'>
              <li>• Toiture Rénovation Entretien</li>
            </Link>
            <Link to='/prestations/batiment/reparation-gouttiere'>
              <li>• Réparation Gouttière</li>
            </Link>
            <Link to='/prestations/batiment/gainage-cheminee'>
              <li>• Conduit de cheminée Gainage</li>
            </Link>
            <Link to='/prestations/batiment/gaine-tuyau'>
              <li>• Gaines Tuyaux Pose Réparation</li>
            </Link>
            <Link to='/prestations/batiment/remplacement-vitrerie'>
              <li>• Vitrerie Remplacement Entretien</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className='landing-facade'>
        <div className='landing-inner'>
          <h1 className='x-large'>Nettoyage en hauteur</h1>
          <p className='lead'>Services proposés :</p>
          <ul>
            <Link to='/prestations/facade/nettoyage-vitres'>
              <li>• Nettoyage Vitres Grande Hauteur</li>
            </Link>
            <Link to='/prestations/facade/depoussierage-structure'>
              <li>• Dépoussiérage Structures Charpentes</li>
            </Link>
            <Link to='/prestations/facade/panneaux-solaires'>
              <li>• Nettoyage Panneaux Solaires</li>
            </Link>
            <Link to='/prestations/facade/haute-pression'>
              <li>• Nettoyage Haute pression</li>
            </Link>
            <Link to='/prestations/facade/devegetalisation'>
              <li>• Dévégétalisation Façades</li>
            </Link>
            <Link to='/prestations/facade/nettoyage-gouttieres'>
              <li>• Nettoyage Gouttière</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className='landing-securite'>
        <div className='landing-inner'>
          <h1 className='x-large'>Hauteur securite protection</h1>
          <p className='lead'>Services proposés :</p>
          <ul>
            <Link to="/prestations/protection/ligne-de-vie"><li>• Ligne de vie Installation Contrôle</li></Link>
            <Link to="/prestations/protection/garde-corps"><li>• Garde-Corps Installation Contrôle</li></Link>
            <Link to="/prestations/protection/filet-securite"><li>• Filets Sécurité Installation Contrôle</li></Link>
            <Link to="/prestations/protection/points-dancrage"><li>• Points d’Ancrage Installation Contrôle</li></Link>
            <Link to="/prestations/protection/pose-bache"><li>• Pose Bâche de Protection</li></Link>
            <Link to="/prestations/protection/pare-pierres"><li>• Pare-Pierres Pare-Gravats</li></Link>
            <Link to="/prestations/protection/anti-pigeon"><li>• Anti-pigeon Protection</li></Link>
            <Link to="/prestations/protection/paratonnerre"><li>• Paratonnerre Installation</li></Link>
          </ul>
        </div>
      </div>
      <div className='landing-bache'>
        <div className='landing-inner-card'>
          <h2>Baches puclicitaire enseignes</h2>
          <div className='jumbotron' style={{ width: '80%', opacity: '0.9' }}>
            <div className='card-body'>
              <ul>
              <Link to="/prestations/publicite/installation-echy"><li>• Installateur Agréé ECHY</li></Link>
              <Link to="/prestations/publicite/bache-publicitaire"><li>• Installation Bâche Publicitaire</li></Link>
              <Link to="/prestations/publicite/grandes-enseignes"><li>• Pose Grandes Enseignes</li></Link>
              <Link to="/prestations/publicite/relamping"><li>• Relamping</li></Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Prestations;

/*
<h1 className='x-large'>Baches puclicitaire enseignes</h1>
          <p className='lead'>Ce que l'on offre</p>
          <ul>
            <li>Installateur Agréé ECHY</li>
            <li>Installation Bâche Publicitaire</li>
            <li>Pose Grandes Enseignes</li>
            <li>Relamping</li>
          </ul>
*/
