import React from "react";
import axios from "axios";

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

export default Worklist;