import React from "react";
import axios from "axios";
import Patient from "./patient";

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
      console.log(this.props.posts)
      return (
        <div id='Worklist--box' className='patient'>
          {this.props.posts[0].map(posts => <Patient {...posts} />)}         
        </div>
      );
    }
}
 
export default Worklist;