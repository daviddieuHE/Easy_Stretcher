using System.Collections.Generic;

namespace Easy_Stretcher
{
    internal class LoginAPI
    {
        internal static Dictionary<int, LoginAPI> brancardiers;
        internal static Dictionary<int, LoginAPI> infirmiers;
        static LoginAPI() 
        {
            infirmiers = new Dictionary<int, LoginAPI>();
            brancardiers = new Dictionary<int, LoginAPI>();
        }

        internal PatientForm patientForm;

        internal LoginAPI(int id, string username, API_ROLE role) 
        {
            this.idUserConnected = id;
            this.nameUserConnected = username;
            this.roleUserConnected = role;

            switch (role)
            {
                case LoginAPI.API_ROLE.BRANCARDIER:
      
                    break;

                case LoginAPI.API_ROLE.INFIRMIER:
                    patientForm = new PatientForm(this);
                    patientForm.Show();
                    break;
            }
        }

        internal int idUserConnected { get; set; }
        internal string nameUserConnected { get; set; }
        internal API_ROLE roleUserConnected { get; set; }
        internal enum API_ROLE 
        {
            BRANCARDIER = 0,
            INFIRMIER = 1
        }
    }
}