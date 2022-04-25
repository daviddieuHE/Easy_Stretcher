namespace Easy_Stretcher
{
    partial class LoginForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Wisej Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.passwordTextBox = new Wisej.Web.TextBox();
            this.label1 = new Wisej.Web.Label();
            this.label2 = new Wisej.Web.Label();
            this.userTextBox = new Wisej.Web.TextBox();
            this.loginButton = new Wisej.Web.Button();
            this.SuspendLayout();
            // 
            // passwordTextBox
            // 
            this.passwordTextBox.Anchor = ((Wisej.Web.AnchorStyles)(((Wisej.Web.AnchorStyles.Bottom | Wisej.Web.AnchorStyles.Left) 
            | Wisej.Web.AnchorStyles.Right)));
            this.passwordTextBox.BackColor = System.Drawing.Color.FromArgb(50, 50, 50);
            this.passwordTextBox.BorderStyle = Wisej.Web.BorderStyle.None;
            this.passwordTextBox.ForeColor = System.Drawing.Color.FromArgb(230, 230, 230);
            this.passwordTextBox.InputType.Type = Wisej.Web.TextBoxType.Password;
            this.passwordTextBox.Location = new System.Drawing.Point(3, 83);
            this.passwordTextBox.Name = "passwordTextBox";
            this.passwordTextBox.PasswordChar = '*';
            this.passwordTextBox.Size = new System.Drawing.Size(607, 30);
            this.passwordTextBox.TabIndex = 1;
            this.passwordTextBox.TextAlign = Wisej.Web.HorizontalAlignment.Center;
            // 
            // label1
            // 
            this.label1.Anchor = ((Wisej.Web.AnchorStyles)((Wisej.Web.AnchorStyles.Bottom | Wisej.Web.AnchorStyles.Left)));
            this.label1.AutoSize = true;
            this.label1.ForeColor = System.Drawing.Color.FromArgb(230, 230, 230);
            this.label1.Location = new System.Drawing.Point(3, 59);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(59, 18);
            this.label1.TabIndex = 2;
            this.label1.Text = "Password";
            // 
            // label2
            // 
            this.label2.Anchor = ((Wisej.Web.AnchorStyles)(((Wisej.Web.AnchorStyles.Bottom | Wisej.Web.AnchorStyles.Left) 
            | Wisej.Web.AnchorStyles.Right)));
            this.label2.AutoSize = true;
            this.label2.ForeColor = System.Drawing.Color.FromArgb(230, 230, 230);
            this.label2.Location = new System.Drawing.Point(3, -1);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(62, 18);
            this.label2.TabIndex = 4;
            this.label2.Text = "Username";
            // 
            // userTextBox
            // 
            this.userTextBox.Anchor = ((Wisej.Web.AnchorStyles)(((Wisej.Web.AnchorStyles.Bottom | Wisej.Web.AnchorStyles.Left) 
            | Wisej.Web.AnchorStyles.Right)));
            this.userTextBox.BackColor = System.Drawing.Color.FromArgb(50, 50, 50);
            this.userTextBox.BorderStyle = Wisej.Web.BorderStyle.None;
            this.userTextBox.ForeColor = System.Drawing.Color.FromArgb(230, 230, 230);
            this.userTextBox.Location = new System.Drawing.Point(3, 23);
            this.userTextBox.Name = "userTextBox";
            this.userTextBox.Size = new System.Drawing.Size(607, 30);
            this.userTextBox.TabIndex = 3;
            this.userTextBox.TextAlign = Wisej.Web.HorizontalAlignment.Center;
            // 
            // loginButton
            // 
            this.loginButton.Anchor = ((Wisej.Web.AnchorStyles)(((Wisej.Web.AnchorStyles.Bottom | Wisej.Web.AnchorStyles.Left) 
            | Wisej.Web.AnchorStyles.Right)));
            this.loginButton.BorderStyle = Wisej.Web.BorderStyle.None;
            this.loginButton.Location = new System.Drawing.Point(3, 119);
            this.loginButton.Name = "loginButton";
            this.loginButton.Size = new System.Drawing.Size(607, 60);
            this.loginButton.TabIndex = 5;
            this.loginButton.Text = "Login !";
            this.loginButton.Click += new System.EventHandler(this.loginButton_Click);
            // 
            // LoginForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 19F);
            this.AutoScaleMode = Wisej.Web.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(45, 45, 45);
            this.ClientSize = new System.Drawing.Size(613, 185);
            this.CloseBox = false;
            this.Controls.Add(this.loginButton);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.userTextBox);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.passwordTextBox);
            this.FormBorderStyle = Wisej.Web.FormBorderStyle.Fixed;
            this.HeaderBackColor = System.Drawing.Color.FromArgb(45, 45, 45);
            this.Movable = false;
            this.Name = "LoginForm";
            this.ShowInTaskbar = false;
            this.StartPosition = Wisej.Web.FormStartPosition.CenterScreen;
            this.Text = "Login";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private Wisej.Web.TextBox passwordTextBox;
        private Wisej.Web.Label label1;
        private Wisej.Web.Label label2;
        private Wisej.Web.TextBox userTextBox;
        private Wisej.Web.Button loginButton;
    }
}

