// Custom error class to represent API errors
class ApiError extends Error {
    // Constructor to initialize the error object
    constructor(
        statusCode,           // HTTP status code for the error (e.g., 400, 404, 500)
        message = "Something went wrong", // Error message, default is "Something went wrong"
        errors = [],          // Additional error details or an array of errors
        stack = ""            // Optional stack trace for debugging
    ) {
        // Call the parent class (Error) constructor with the message
        super(message);

        // Set the HTTP status code for the error
        this.statusCode = statusCode;

        // Initialize other properties
        this.data = null;     // Additional data can be attached (not used here)
        this.message = message; // Error message
        this.success = false; // Indicates failure
        this.errors = errors; // Additional error details

        // Set the stack trace for debugging
        if (stack) {
            this.stack = stack; // Use provided stack trace
        } else {
            // Capture the stack trace if not provided
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

// Export the ApiError class for use in other modules
export { ApiError };
