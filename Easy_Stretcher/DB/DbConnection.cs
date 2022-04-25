using System;
using MySql.Data.MySqlClient;

namespace Easy_Stretcher
{
    internal class DbConnection
    {
        private delegate MySqlConnection ConnectDbAsync();
        private static MySqlConnection GetDBConnection(string host, int port, string database, string username, string password)
        {
            string connString = "Server=" + host + ";Database=" + database
                + ";port=" + port + ";User Id=" + username + ";password=" + password;

            MySqlConnection conn = new MySqlConnection(connString);

            return conn;
        }

        internal static MySqlConnection BeginConnection() 
        {
            ConnectDbAsync connectDbAsync = new ConnectDbAsync(BeginConnectionDBAsync);
            IAsyncResult ar =  connectDbAsync.BeginInvoke(null, null);
            return connectDbAsync.EndInvoke(ar);
        }

        private static MySqlConnection BeginConnectionDBAsync()
        {
            string host = "devweb.sytes.net";
            int port = 3306;
            string database = "hopital";
            string username = "mabite";
            string password = "jFw-sL8-Ntc-jvQ";
            return GetDBConnection(host, port, database, username, password);
        }
    }
}