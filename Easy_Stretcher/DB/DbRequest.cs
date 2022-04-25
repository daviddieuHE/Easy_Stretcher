using MySql.Data.MySqlClient;
using System;
using System.Data.Common;

namespace Easy_Stretcher
{
    internal class DbRequest
    {
        private delegate DbDataReader AsyncDbRequest(MySqlConnection sqlConnection, string request);

        internal static DbDataReader BeginRequest(MySqlConnection sqlConnection, string request)
        {
            AsyncDbRequest requestAsyncDB = new AsyncDbRequest(BeginDbRequestAsync);
            IAsyncResult ar = requestAsyncDB.BeginInvoke(sqlConnection, request, null, null);
            return requestAsyncDB.EndInvoke(ar);
        }

        private static DbDataReader BeginDbRequestAsync(MySqlConnection sqlConnection, string request)
        {
            MySqlCommand cmd = new MySqlCommand();   
            cmd.Connection = sqlConnection;
            cmd.CommandText = request;
            return cmd.ExecuteReader();
        }
    }
}