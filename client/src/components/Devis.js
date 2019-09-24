import React, { Fragment, Component } from 'react';

class Devis extends Component {
  state = {
    type: '',
    statut: '',
    nom: '',
    prenom: '',
    raisonSociale: '',
    adresse: '',
    ville: '',
    codePostal: '',
    telephone: '',
    courriel: '',
    message: ''
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    window.alert(Object.values(this.state));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      type,
      statut,
      nom,
      prenom,
      raisonSociale,
      adresse,
      ville,
      codePostal,
      telephone,
      courriel,
      message
    } = this.state;
    return (
      <Fragment>
        <div className='row mt-5 mb-3'>
          <div className='col-md-6 mx-auto' style={{ marginTop: '8vh' }}>
            <div className='card card-body'>
              <h3 className='text-center mb-4'>Devis</h3>
              <form className='form' onSubmit={e => this.onSubmit(e)}>
                <div className='form-group'>
                  <div className='form-group'>
                    <label htmlFor='text'>Type de travaux</label>
                    <br />
                    <select
                      className='form-control'
                      name='type'
                      onChange={e => this.handleChange(e)}
                      value={type}
                    >
                      <option> Sélectionner le type de prestations :</option>
                      <option value='batiment'>
                        {' '}
                        Batiment travaux accès difficile
                      </option>
                      <option value='Nettoyage'> Nettoyage en hauteur</option>
                      <option value='HauteurSecurite'>
                        {' '}
                        Hauteur sécurité protection
                      </option>
                      <option value='Publicite'>
                        {' '}
                        Baches publicitaire enseigne
                      </option>
                    </select>
                  </div>

                  <div className='form-group'>
                    <label htmlFor='text'>Particulier/Professionel</label>
                    <br />
                    <select
                      className='form-control'
                      name='statut'
                      onChange={e => this.handleChange(e)}
                      value={statut}
                    >
                      <option> Sélectionner statut :</option>
                      <option value='Particulier'> Particulier</option>
                      <option value='Entreprise'> Entreprise</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor='text'>Nom</label>
                    <input
                      type='text'
                      className='form-control'
                      name='nom'
                      value={nom}
                      onChange={e => this.handleChange(e)}
                      placeholder='Nom'
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='text'>Prenom</label>
                    <input
                      type='text'
                      className='form-control'
                      name='prenom'
                      value={prenom}
                      onChange={e => this.handleChange(e)}
                      placeholder='Prénom'
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='text'>Raison sociale</label>
                    <input
                      type='text'
                      className='form-control'
                      name='raisonSociale'
                      value={raisonSociale}
                      onChange={e => this.handleChange(e)}
                      placeholder='Raison sociale'
                    />
                  </div>
                  <div>
                    <label htmlFor='text'>Adresse</label>
                    <input
                      type='text'
                      className='form-control'
                      name='adresse'
                      value={adresse}
                      onChange={e => this.handleChange(e)}
                      placeholder='Adresse'
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='text'>Ville</label>
                    <input
                      type='text'
                      className='form-control'
                      name='ville'
                      value={ville}
                      onChange={e => this.handleChange(e)}
                      placeholder='Ville'
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='text'>Code Postal</label>
                    <input
                      type='text'
                      className='form-control'
                      name='codePostal'
                      value={codePostal}
                      onChange={e => this.handleChange(e)}
                      placeholder='Code Postal'
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='text'>Telephone</label>
                    <input
                      type='text'
                      className='form-control'
                      name='telephone'
                      value={telephone}
                      onChange={e => this.handleChange(e)}
                      placeholder='Telephone'
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      className='form-control'
                      name='courriel'
                      value={courriel}
                      onChange={e => this.handleChange(e)}
                      placeholder='Email'
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='text'>Message :</label>
                    <textarea
                      name='message'
                      rows='10'
                      value={message}
                      onChange={e => this.handleChange(e)}
                      required
                    ></textarea>
                  </div>
                </div>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Devis;
