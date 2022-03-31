import React from 'react';
import axios from 'axios';



/* 
Fonction du bouton 'Retourner' 
Supprime le patient de la section 
*/
function handleOnClickRetour() {
  let patient = document.getElementById('Retour--patient');
  let worklist = document.getElementById('Retour--box');

  worklist.removeChild(patient);
  return true;
}


/*
Composant Worklist, affiche les patients dans la worklist
*/
class Worklist extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: [[]] };

    this.handleOnClickDemander = this.handleOnClickDemander.bind(this);
  };


  /*
  Récupération des dta de la DB
  */
  async componentDidMount() {
    let res = await axios.get("http://localhost:3000/demande");
    let data = res.data;
    this.setState({posts: data});
  };



  /* 
  Changement du statut du patient dans la DB
  */
  async changePatientStatus(id_patient) {
    

    
  };
  
  /*
  Fonction du bouton 'Demander'
  Déplace le patient de section
  */
  handleOnClickDemander(id_patient, nom) {
    let patient = document.getElementById(id_patient);
    console.log(patient);
    let sect = document.getElementById(nom)
    let worklist = document.getElementById('Worklist--box');
    let demande = document.getElementById('Demande--box');
    let patientDemande = document.createElement('p');
  
    patientDemande.textContent = patient.innerText;
    demande.appendChild(patientDemande);
    worklist.removeChild(sect);
    return true;
  };

  render() {
    return (
      <div id='Worklist--box' className='patient'>
        {this.state.posts[0].map(posts => (
          <div id={posts.nom}> 
            <p id={posts.id_patient} className='Worklist--patient'>
              {posts.id_patient}
              {posts.nom}
              {posts.prenom}
            </p>
            <button onClick={() => this.handleOnClickDemander(posts.id_patient, posts.nom)} type='button'>Demander</button>
          </div>
        ))}         
      </div>
    );
  }
}

/*
 Composant Demande, affiche le/les patients demandé(s) 
*/

function Demande() {
  return (
    <section id='Demande--box' className='patient'>
      
    </section>
  )
}

/*
Affiche le patient arrivé 
*/
function Arrive() {
  return (
    <section id='Retour--box' className='patient'>
      <p id='Retour--patient'>
        20220003
        Mathilde Goes
        2001-04-09
        <button onClick={handleOnClickRetour} type='button'>Retour</button>
      </p>     
    </section>
  )
}


//Composant principal
export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      dataIsLoaded: false
    };
  }

  render() {
    return (
      <div className="App">
        <div id='Worklist' className='box'>
          <h1>Worklist</h1>
          <Worklist />
        </div>
        <div className='box'>
          <h1>Patients demandés</h1>
          <Demande />
        </div>
        <div className='box'>
          <h1>Patients arrivés</h1>
          <Arrive />
        </div>
      </div>
    );
  }
  
}




