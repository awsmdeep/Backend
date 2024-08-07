// // Higher-order function to handle asynchronous route handlers
// const asyncHandler = (requestHandler) => {
//     // Return a new middleware function
//     return (req, res, next) => {
//         // Call the requestHandler and handle any potential errors
//         Promise.resolve(requestHandler(req, res, next))
//             .catch((err) => next(err)); // Pass any errors to the next middleware (error handler)
//     }
// }

// // Export the asyncHandler function for use in other modules
// export { asyncHandler };

// Example commented-out alternative implementations of asyncHandler:

// No-op function, does nothing
// const asyncHandler = () => {}

// Returns a no-op function
// const asyncHandler = (func) => () => {}

// Returns an async no-op function
// const asyncHandler = (func) => async () => {}

// Async handler with error handling inside try-catch block
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next) // Await the execution of the async function
    } catch (error) {
        // If an error occurs, send a JSON response with error details
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }
}


export default asyncHandler;