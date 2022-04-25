using System.ComponentModel;
using Wisej.Web;

namespace Easy_Stretcher
{
	static class Program
	{

		static void Main()
		{
			PatientAPI.LoadPatients();
			Application.FavIcon = Properties.Resources.disability_filled_large_2x;
			MyDesktop myDesktop = new MyDesktop();
			Application.Desktop = myDesktop;
			myDesktop.Enabled = false;
			Application.SessionTimeout += EndSession;
		}

		private static void EndSession(object sender, HandledEventArgs handledEventHandler) 
		{
			LoginAPI endSession = (LoginAPI)Application.Session["LOADAPI"];
			LoginAPI.infirmiers.Remove(endSession.idUserConnected);

			foreach (var login in LoginAPI.infirmiers) 
			{
				MessageBox.Show(login.Value.idUserConnected.ToString());
			}
		}
	}
}