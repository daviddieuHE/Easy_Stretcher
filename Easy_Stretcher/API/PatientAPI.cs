using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data.Common;
using Wisej.Web;

namespace Easy_Stretcher
{
    internal class PatientAPI
    {
        internal static List<PatientAPI> patientAPIs;

        internal static void LoadPatients() 
        {
            if (patientAPIs != null)
                return;
            patientAPIs = new List<PatientAPI>();
            string dayRequest = "";

            switch (Helpers.currentDay) 
            {
                case DayOfWeek.Monday:
                    dayRequest = "lundi";
                    break;
                case DayOfWeek.Tuesday:
                    dayRequest = "mardi";
                    break;

                case DayOfWeek.Wednesday:
                    dayRequest = "mercredi";
                    break;

                case DayOfWeek.Thursday:
                    dayRequest = "jeudi";
                    break;

                case DayOfWeek.Friday:
                    dayRequest = "vendredi";
                    break;

                case DayOfWeek.Saturday:
                    dayRequest = "samedi";
                    break;

                default:
                    return;
            }

			try
			{
                using (MySqlConnection sqlConnection = DbConnection.BeginConnection()) 
                { 
				    sqlConnection.Open();
                    using (DbDataReader reader = DbRequest.BeginRequest(sqlConnection, RequestAPI.LoadPatientsOfDayAPIFormatter(dayRequest)))
                    {
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                string id_patient = reader["id_patient"].ToString();
                                string nom = reader["nom"].ToString();
                                string prenom = reader["prenom"].ToString();
                                string date_naissance = reader["date_naiss"].ToString();
                                string loc_patient = reader["loc_patient"].ToString();
                                string chambre = reader["chambre"].ToString();
                                string jour = reader["jour"].ToString();
                                patientAPIs.Add(new PatientAPI(id_patient, nom, prenom, date_naissance, loc_patient, chambre, jour));
                            }
                        }
                    }
                    sqlConnection.Close();
                }
			}
			catch (Exception ex)
			{
				MessageBox.Show(ex.ToString());
			}
		}

        internal PatientAPI(string id, string nom, string prenom, string dateNaissance, string localizationPatient, string room, string day) 
        {
            this.id_patient = id;
            this.nom = nom;
            this.prenom = prenom;
            this.date_naissance = dateNaissance;
            this.loc_patient = localizationPatient;
            this.chambre = room;
            this.jour = day;
        }

        internal string id_patient { get; set; } 
        internal string nom { get; set; }
        internal string prenom { get; set; }
        internal string date_naissance { get; set; }
        internal string loc_patient { get; set; }
        internal string chambre { get; set; }
        internal string jour { get; set; }
    }
}