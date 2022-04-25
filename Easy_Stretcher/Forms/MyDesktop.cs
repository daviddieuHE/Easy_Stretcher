using System;
using System.Drawing;
using Wisej.Web;

namespace Easy_Stretcher
{
	public partial class MyDesktop : Desktop
	{
        private LoginForm window;
        internal LoginAPI loginAPI;
        public MyDesktop()
		{
			InitializeComponent();
        }

        private void MyDesktop_Load(object sender, EventArgs e)
        {
            this.AutoHideTaskbar = true;
            window = new LoginForm();
            window.Show();
            //this.styleSheet1.SetCssClass(window, "unblurEffect");
            //this.styleSheet1.SetCssClass(this, "blurEffect");      

            this.SizeChanged += MyDesktop_SizeChanged;
        }
        private void MyDesktop_SizeChanged(object sender, EventArgs e)
        {
            window.Location = new Point((this.Width - window.Width) / 2,
                          (this.Height - window.Height) / 2);

            if (loginAPI != null) 
            {
                switch (loginAPI.roleUserConnected) 
                {
                    case LoginAPI.API_ROLE.INFIRMIER:
                        loginAPI.patientForm.Location = new Point((this.Width - loginAPI.patientForm.Width) / 2,
                          (this.Height - loginAPI.patientForm.Height) / 2); ;
                        break;
                }
            }
        }
    }
}
