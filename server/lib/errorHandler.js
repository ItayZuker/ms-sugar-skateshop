function errorHandler(err, req, res, next) {
    console.error(err.stack); // Log the error for debugging

    const statusCode = err.statusCode || 500; // Default to 500 if no specific status

    res.status(statusCode).json({
        message: err.message || 'An unexpected error occurred',
        // Add more details if necessary, but be careful with sensitive information
    });
}

module.exports = errorHandler;