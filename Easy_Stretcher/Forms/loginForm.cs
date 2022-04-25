using MySql.Data.MySqlClient;
using System;
using System.Data.Common;
using System.Security.Cryptography;
using System.Text;
using Wisej.Web;

namespace Easy_Stretcher
{
	public partial class LoginForm : Form
	{
		public LoginForm()
		{
			InitializeComponent();
		}
		//test123
		//daef4953b9783365cad6615223720506cc46c5167cd16ab500fa597aa08ff964eb24fb19687f34d7665f778fcb6c5358fc0a5b81e1662cf90f73a2671c53f991

		//test321
		//344e9d58db2a67bc5b808c655088a98cbd3a91677367619e318ab6ec65af70206825e60add0a5294ec0cad105ab6684c1996bd810ca0f65b232600b6d12d7f08
        private void loginButton_Click(object sender, EventArgs e)
        {
			try
			{
				using (MySqlConnection sqlConnection = DbConnection.BeginConnection())
				{
					sqlConnection.Open();
					string hashed = "";
					using (SHA512 sha512Hash = SHA512.Create())
					{
						byte[] sourceBytes = Encoding.UTF8.GetBytes(passwordTextBox.Text);
						byte[] hashBytes = sha512Hash.ComputeHash(sourceBytes);
						hashed = BitConverter.ToString(hashBytes).Replace("-", String.Empty);
					}
					using (DbDataReader reader = DbRequest.BeginRequest(sqlConnection, RequestAPI.LoginAPIFormatter(userTextBox.Text, hashed)))
					{
						if (reader.HasRows)
						{
							while (reader.Read())
							{
								string id = reader["id"].ToString();    //0
								string id_role = reader.GetString(1);   //1
								string username = reader.GetString(2);  //2
								if (username == userTextBox.Text)
								{
									MyDesktop currentDesktop = (MyDesktop)Application.Desktop;
									currentDesktop.loginAPI = new LoginAPI(int.Parse(id), username, (LoginAPI.API_ROLE)int.Parse(id_role));
									currentDesktop.labelConnection.Visible = true;
									currentDesktop.labelConnection.Text = $"Hello {username} ! Connected as {((LoginAPI.API_ROLE)int.Parse(id_role)).ToString()}";
									currentDesktop.Enabled = true;

									switch (currentDesktop.loginAPI.roleUserConnected)
									{
										case LoginAPI.API_ROLE.BRANCARDIER:
											LoginAPI.brancardiers.Add(int.Parse(id), currentDesktop.loginAPI);
											break;

										case LoginAPI.API_ROLE.INFIRMIER:
											LoginAPI.infirmiers.Add(int.Parse(id), currentDesktop.loginAPI);
											break;
									}
								}
								else
								{
									return;
								}
							}
							this.Close();
						}
						else
						{
							MessageBox.Show("Bad username or password !");
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
    }
}
