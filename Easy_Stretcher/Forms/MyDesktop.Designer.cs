namespace Easy_Stretcher
{
	partial class MyDesktop
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

		#region Component Designer generated code

		/// <summary> 
		/// Required method for Designer support - do not modify 
		/// the contents of this method with the code editor.
		/// </summary>
		private void InitializeComponent()
		{
            this.components = new System.ComponentModel.Container();
            Wisej.Web.ImageListEntry imageListEntry1 = new Wisej.Web.ImageListEntry(global::Easy_Stretcher.Properties.Resources.wp5493583_original_blue_wallpapers);
            this.labelConnection = new Wisej.Web.Label();
            this.customWallpaper1 = new Wisej.Web.Ext.CustomWallpaper.CustomWallpaper(this.components);
            this.styleSheet1 = new Wisej.Web.StyleSheet(this.components);
            this.javaScript1 = new Wisej.Web.JavaScript(this.components);
            this.SuspendLayout();
            // 
            // labelConnection
            // 
            this.labelConnection.AutoSize = true;
            this.labelConnection.BackColor = System.Drawing.Color.FromArgb(2, 165, 249);
            this.labelConnection.ForeColor = System.Drawing.Color.FromName("@White");
            this.labelConnection.Location = new System.Drawing.Point(3, 3);
            this.labelConnection.Name = "labelConnection";
            this.labelConnection.Size = new System.Drawing.Size(39, 18);
            this.labelConnection.TabIndex = 0;
            this.labelConnection.Text = "label1";
            this.labelConnection.Visible = false;
            // 
            // customWallpaper1
            // 
            this.customWallpaper1.Control = this;
            this.customWallpaper1.Images = new Wisej.Web.ImageListEntry[] {
        imageListEntry1};
            // 
            // styleSheet1
            // 
            this.styleSheet1.Styles = ".blurEffect \r\n{\r\n    filter: blur(0.5rem);\r\n}\r\n.unblurEffect\r\n{\r\n    filter: blur" +
    "(0rem); \r\n}";
            // 
            // MyDesktop
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 19F);
            this.AutoScaleMode = Wisej.Web.AutoScaleMode.Font;
            this.Controls.Add(this.labelConnection);
            this.Name = "MyDesktop";
            this.Size = new System.Drawing.Size(1383, 554);
            this.TaskbarAlignment = Wisej.Web.HorizontalAlignment.Center;
            this.Load += new System.EventHandler(this.MyDesktop_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

		}

        #endregion
        internal Wisej.Web.Label labelConnection;
        private Wisej.Web.Ext.CustomWallpaper.CustomWallpaper customWallpaper1;
        private Wisej.Web.StyleSheet styleSheet1;
        private Wisej.Web.JavaScript javaScript1;
    }
}
