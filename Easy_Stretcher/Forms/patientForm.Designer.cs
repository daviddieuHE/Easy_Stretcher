namespace Easy_Stretcher
{
    partial class PatientForm
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
            Wisej.Web.DataGridViewCellStyle dataGridViewCellStyle1 = new Wisej.Web.DataGridViewCellStyle();
            this.patientsDataGridView = new Wisej.Web.DataGridView();
            this.Column0 = new Wisej.Web.DataGridViewTextBoxColumn();
            this.Column1 = new Wisej.Web.DataGridViewTextBoxColumn();
            this.Column2 = new Wisej.Web.DataGridViewTextBoxColumn();
            this.Column3 = new Wisej.Web.DataGridViewTextBoxColumn();
            this.Column4 = new Wisej.Web.DataGridViewTextBoxColumn();
            this.Column5 = new Wisej.Web.DataGridViewTextBoxColumn();
            this.groupBox1 = new Wisej.Web.GroupBox();
            ((System.ComponentModel.ISupportInitialize)(this.patientsDataGridView)).BeginInit();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // patientsDataGridView
            // 
            this.patientsDataGridView.AutoSizeColumnsMode = Wisej.Web.DataGridViewAutoSizeColumnsMode.Fill;
            this.patientsDataGridView.BackColor = System.Drawing.Color.FromArgb(50, 50, 50);
            this.patientsDataGridView.BorderStyle = Wisej.Web.BorderStyle.None;
            this.patientsDataGridView.CellBorderStyle = Wisej.Web.DataGridViewCellBorderStyle.Vertical;
            this.patientsDataGridView.ColumnHeadersBorderStyle = Wisej.Web.DataGridViewCellBorderStyle.Vertical;
            this.patientsDataGridView.Columns.AddRange(new Wisej.Web.DataGridViewColumn[] {
            this.Column0,
            this.Column1,
            this.Column2,
            this.Column3,
            this.Column4,
            this.Column5});
            this.patientsDataGridView.Dock = Wisej.Web.DockStyle.Fill;
            this.patientsDataGridView.Location = new System.Drawing.Point(3, 21);
            this.patientsDataGridView.Name = "patientsDataGridView";
            dataGridViewCellStyle1.BackColor = System.Drawing.Color.FromArgb(0, 0, 0);
            this.patientsDataGridView.RowHeadersDefaultCellStyle = dataGridViewCellStyle1;
            this.patientsDataGridView.RowHeadersVisible = false;
            this.patientsDataGridView.ShowFocusCell = false;
            this.patientsDataGridView.Size = new System.Drawing.Size(1006, 423);
            this.patientsDataGridView.TabIndex = 0;
            // 
            // Column0
            // 
            this.Column0.HeaderText = "ID Patient";
            this.Column0.Name = "Column0";
            // 
            // Column1
            // 
            this.Column1.HeaderText = "Nom";
            this.Column1.Name = "Column1";
            // 
            // Column2
            // 
            this.Column2.HeaderText = "Prenom";
            this.Column2.Name = "Column2";
            // 
            // Column3
            // 
            this.Column3.HeaderText = "Date Naissance";
            this.Column3.Name = "Column3";
            // 
            // Column4
            // 
            this.Column4.HeaderText = "Lieu Actuel";
            this.Column4.Name = "Column4";
            // 
            // Column5
            // 
            this.Column5.HeaderText = "Chambre";
            this.Column5.Name = "Column5";
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.patientsDataGridView);
            this.groupBox1.Dock = Wisej.Web.DockStyle.Fill;
            this.groupBox1.ForeColor = System.Drawing.Color.FromArgb(230, 230, 230);
            this.groupBox1.Location = new System.Drawing.Point(0, 0);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(1012, 447);
            this.groupBox1.TabIndex = 1;
            this.groupBox1.Text = "Patients du jours";
            // 
            // PatientForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 19F);
            this.AutoScaleMode = Wisej.Web.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(45, 45, 45);
            this.ClientSize = new System.Drawing.Size(1012, 447);
            this.CloseBox = false;
            this.Controls.Add(this.groupBox1);
            this.HeaderBackColor = System.Drawing.Color.FromArgb(45, 45, 45);
            this.Name = "PatientForm";
            this.ShowInTaskbar = false;
            this.StartPosition = Wisej.Web.FormStartPosition.CenterScreen;
            this.Text = "Patients";
            this.Load += new System.EventHandler(this.PatientForm_Load);
            ((System.ComponentModel.ISupportInitialize)(this.patientsDataGridView)).EndInit();
            this.groupBox1.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private Wisej.Web.DataGridView patientsDataGridView;
        private Wisej.Web.DataGridViewTextBoxColumn Column0;
        private Wisej.Web.DataGridViewTextBoxColumn Column1;
        private Wisej.Web.DataGridViewTextBoxColumn Column2;
        private Wisej.Web.GroupBox groupBox1;
        private Wisej.Web.DataGridViewTextBoxColumn Column3;
        private Wisej.Web.DataGridViewTextBoxColumn Column4;
        private Wisej.Web.DataGridViewTextBoxColumn Column5;
    }
}

