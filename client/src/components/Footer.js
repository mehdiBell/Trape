import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { Link } from 'react-router-dom';

const FooterPage = () => {
  return (
    <MDBFooter color='blue' className='font-small pt-4 footer'>
      <MDBContainer fluid className='text-center text-md-left'>
        <MDBRow>
          <MDBCol md='4'>
            <h5 className='title'>Trapeze</h5>
            <p>
              Le spécialiste des Travaux du bâtiment d’accès difficile et du
              Nettoyage en hauteur
            </p>
          </MDBCol>
          <MDBCol md='4'>
            <p>
              Adresse : 94, rue Paul Déroulède 92270, Bois-Colombes Tél. : 01 47
              90 72 72 Fax : 01 47 90 72 70 E-mail: accueil@trapeze.fr
            </p>
          </MDBCol>
          <MDBCol md='4'>
            <h5 className='title'>Liens direct</h5>
            <ul>
              <li className='list-unstyled'>
                <Link to='/qui-sommes-nous'>Qui sommes-nous?</Link>
              </li>
              <li className='list-unstyled'>
                <Link to='/prestations'>Nos prestations</Link>
              </li>
              <li className='list-unstyled'>
                <Link to='/developpement-durable'>Développement durable</Link>
              </li>
              <li className='list-unstyled'>
                <Link to='/presse'>La presse en parle</Link>
              </li>
              <li className='list-unstyled'>
                <Link to='/securite'>Sécurité</Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; 1993 - {new Date().getFullYear()} Copyright:{' '}
          <a href='https://www.trapeze.fr'> Trapeze </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
