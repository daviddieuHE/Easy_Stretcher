
namespace Easy_Stretcher
{
    internal class RequestAPI
    {
        internal static string LoginAPIFormatter(string username, string password) 
        {
            return $"call startLoginSession('{username}', '{password}')";
        }

        internal static string LoadPatientsOfDayAPIFormatter(string day) 
        {
            return $"call loadPatientsOfDay('{day}')";//call loadPatientsOfDay('lundi');
        }
    }
}