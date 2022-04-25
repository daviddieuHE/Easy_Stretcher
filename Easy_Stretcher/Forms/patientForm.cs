using System;
using Wisej.Web;

namespace Easy_Stretcher
{
	public partial class PatientForm : Form
	{
        internal LoginAPI loginAPI { get; set; }
        internal PatientForm(LoginAPI loginAPI)
		{
			InitializeComponent();
            this.loginAPI = loginAPI;
		}

        private void PatientForm_Load(object sender, EventArgs e)
        {
            foreach (PatientAPI patientAPI in PatientAPI.patientAPIs) 
            {
                this.patientsDataGridView.BeginInvoke(new Action(() => 
                {
                    int rowId = patientsDataGridView.Rows.Add();

                    DataGridViewRow row = patientsDataGridView.Rows[rowId];
                    row.Cells["Column0"].Value = patientAPI.id_patient;
                    row.Cells["Column1"].Value = patientAPI.nom;
                    row.Cells["Column2"].Value = patientAPI.prenom;
                    row.Cells["Column3"].Value = patientAPI.date_naissance;
                    row.Cells["Column4"].Value = patientAPI.loc_patient;
                    row.Cells["Column5"].Value = patientAPI.chambre;

                }));
            }
        }
    }
}
