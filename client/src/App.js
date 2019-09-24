import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Landing from './components/Landing';
import Devis from './components/Devis';
import Prestations from './components/Prestations';
import Quisommesnous from './components/Quisommesnous';
import DevDurable from './components/DeveloppementDurable';
import Presse from './components/Presse';

import Securite from './components/Securite';
import Reglementation from './components/securite/Reglementation';
import Materiel from './components/securite/Materiel';
import Protection from './components/securite/Protection';
import Recrutement from './components/Recrutement';

import Ravalement from './components/prestations/batiment/Ravalement';
import Cheminee from './components/prestations/batiment/Cheminee';
import Gouttiere from './components/prestations/batiment/Gouttiere';
import Toiture from './components/prestations/batiment/Toiture';
import Tuyaux from './components/prestations/batiment/Tuyaux';
import Vitrerie from './components/prestations/batiment/Vitrerie';

import Depoussierage from './components/prestations/facade/Depoussierage';
import Devegetalisation from './components/prestations/facade/Devegetalisation';
import HautePression from './components/prestations/facade/HautePression';
import NettoyageVitres from './components/prestations/facade/NettoyageVitres';
import NettoyageGouttiere from './components/prestations/facade/NettoyageGouttiere';
import PanneauxSolaires from './components/prestations/facade/PanneauxSolaires';

import Ancrage from './components/prestations/protection/Ancrage';
import AntiPigeon from './components/prestations/protection/AntiPigeon';
import FiletSecu from './components/prestations/protection/FiletSecu';
import GardeCorps from './components/prestations/protection/GardeCorps';
import LigneVie from './components/prestations/protection/LigneVie';
import ParaTonnerre from './components/prestations/protection/ParaTonnerre';
import ParePierre from './components/prestations/protection/ParePierre';
import PoseBache from './components/prestations/protection/PoseBache';

import Echy from './components/prestations/publicite/Echy';
import BachePub from './components/prestations/publicite/BachePub';
import GrandeEnseigne from './components/prestations/publicite/GrandeEnseigne';
import Relamping from './components/prestations/publicite/Relamping';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <Switch>
        <Route exact path='/devis' component={Devis} />
        <Route exact path='/prestations' component={Prestations} />
        <Route exact path='/recrutement' component={Recrutement} />


        {/* Footer*/}
        <Route exact path='/qui-sommes-nous' component={Quisommesnous} />
        <Route exact path='/developpement-durable' component={DevDurable} />
        <Route exact path='/presse' component={Presse} />

        {/* Sécurité */}
        <Route exact path='/securite' component={Securite} />
        <Route
          exact
          path='/securite/reglementation'
          component={Reglementation}
        />
        <Route exact path='/securite/materiel-cordiste' component={Materiel} />
        <Route
          exact
          path='/securite/protection-collective'
          component={Protection}
        />

        {/* Prestation Batiment */}
        <Route
          exact
          path='/prestations/batiment/ravalement-facade'
          component={Ravalement}
        />
        <Route
          exact
          path='/prestations/batiment/renovation-toiture'
          component={Toiture}
        />
        <Route
          exact
          path='/prestations/batiment/reparation-gouttiere'
          component={Gouttiere}
        />
        <Route
          exact
          path='/prestations/batiment/gainage-cheminee'
          component={Cheminee}
        />
        <Route
          exact
          path='/prestations/batiment/gaine-tuyau'
          component={Tuyaux}
        />
        <Route
          exact
          path='/prestations/batiment/remplacement-vitrerie'
          component={Vitrerie}
        />

        {/* Prestation Facade */}
        <Route
          exact
          path='/prestations/facade/nettoyage-vitres'
          component={NettoyageVitres}
        />
        <Route
          exact
          path='/prestations/facade/depoussierage-structure'
          component={Depoussierage}
        />
        <Route
          exact
          path='/prestations/facade/panneaux-solaires'
          component={PanneauxSolaires}
        />
        <Route
          exact
          path='/prestations/facade/haute-pression'
          component={HautePression}
        />
        <Route
          exact
          path='/prestations/facade/devegetalisation'
          component={Devegetalisation}
        />
        <Route
          exact
          path='/prestations/facade/nettoyage-gouttieres'
          component={NettoyageGouttiere}
        />

        {/* Prestation Protection */}
        <Route
          exact
          path='/prestations/protection/ligne-de-vie'
          component={LigneVie}
        />
        <Route
          exact
          path='/prestations/protection/garde-corps'
          component={GardeCorps}
        />
        <Route
          exact
          path='/prestations/protection/filet-securite'
          component={FiletSecu}
        />
        <Route
          exact
          path='/prestations/protection/points-dancrage'
          component={Ancrage}
        />
        <Route
          exact
          path='/prestations/protection/pose-bache'
          component={PoseBache}
        />
        <Route
          exact
          path='/prestations/protection/pare-pierres'
          component={ParePierre}
        />
        <Route
          exact
          path='/prestations/protection/anti-pigeon'
          component={AntiPigeon}
        />
        <Route
          exact
          path='/prestations/protection/paratonnerre'
          component={ParaTonnerre}
        />

        {/* Prestation Publicite */}
        <Route
          exact
          path='/prestations/publicite/installation-echy'
          component={Echy}
        />
        <Route
          exact
          path='/prestations/publicite/bache-publicitaire'
          component={BachePub}
        />
        <Route
          exact
          path='/prestations/publicite/grandes-enseignes'
          component={GrandeEnseigne}
        />
        <Route
          exact
          path='/prestations/publicite/relamping'
          component={Relamping}
        />
      </Switch>
      <Footer />
    </Fragment>
  </Router>
);

export default App;
