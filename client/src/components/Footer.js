import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { Link } from 'react-router-dom';

const FooterPage = () => {
  return (
    <MDBFooter color='blue' className='font-small pt-5 footer'>
      <MDBContainer fluid className='text-center text-md-center'>
        <MDBRow>
          <MDBCol md='6'>
            <h5 className='title'>Trapeze</h5>
            <p>
              94, rue Paul Déroulède<br/> 92270, Bois-Colombes<br/> Tél. : 01 47 90 72 72<br/> Fax : 01 47 90 72 70<br/> E-mail: accueil@trapeze.fr
            </p>
          </MDBCol>
          <MDBCol md='6'>
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
      <div className='footer-copyright text-right py-3'>
        <MDBContainer fluid>
          &copy; 1999 - {new Date().getFullYear()} Copyright:{' '}
          <a href='https://www.trapeze.fr'> Trapeze </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
