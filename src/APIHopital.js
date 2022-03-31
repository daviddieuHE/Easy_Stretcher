class Patient
{
   // static _listPatients = [];
    static get listPatients() 
    {
        return this._listPatients;
    }

    static set listPatients(value) 
    {
        this._listPatients = value;
    }

    static addPatientToList(value) 
    {
        this._listPatients.push(value);
    }
            
    static totalPatients()
    {
        return this._listPatients.length;
    }

    constructor(idPatient, nom, prenom, dateNaissance, localisationPatient, chambre, jour)
    {
        this.idPatient = idPatient;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.localisationPatient = localisationPatient;
        this.chambre = chambre;
        this.jour = jour;
    }    

    set idPatient(value) 
    {
        this._idPatient = value;
    }
    get idPatient() 
    {
        return this._idPatient;
    }

    set nom(value) 
    {
        this._nom = value;
    }
    get nom() 
    {
        return this._nom;
    }

    set prenom(value) 
    {
        this._prenom = value;
    }
    get prenom() 
    {
        return this._prenom;
    }

    set dateNaissance(value) 
    {
        this._dateNaissance = value;
    }
    get dateNaissance() 
    {
        return this._dateNaissance;
    }
        
    set localisationPatient(value) 
    {
        this._localisationPatient = value;
    }
    get localisationPatient() 
    {
        return this._localisationPatient;
    }

    set chambre(value) 
    {
        this._chambre = value;
    }
    get chambre() 
    {
        return this._chambre;
    }

    set jour(value) 
    {
        this._jour = value;
    }
    get jour() 
    {
        return this._jour;
    }
}

module.exports = 
{
    Patient
};