// Class to standardize API responses
class ApiResponse {
    // Constructor to initialize the response object
    constructor(statusCode, data, message = "Success") {
        // HTTP status code for the response
        this.statusCode = statusCode;
        
        // Data to be included in the response
        this.data = data;
        
        // Message describing the response, defaults to "Success"
        this.message = message;
        
        // Success flag, true if statusCode is less than 400 (indicating a successful response)
        this.success = statusCode < 400;
    }
}

// Export the ApiResponse class for use in other modules
export { ApiResponse };
