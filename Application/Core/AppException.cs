namespace Application.Core
{
	public class AppException
    {
		public AppException(int statusCode, string message, string details = null)
		{
			StatusCode = statusCode;
			Message = message;
			Details = details;
		}

		public int StatusCode {set; get;}

		public string Message {set; get;}

		public string Details {set; get;}
		
        
    }
}