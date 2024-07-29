// Import the Express library, which is a web framework for Node.js.
const express = require('express');

// Load environment variables from a .env file into process.env.
require('dotenv').config();

// Create an instance of an Express application.
const app = express();

// Define a route for the root URL ('/'). When a GET request is made to the root URL,
// the server will respond with 'Hello World!'.
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define a route for the URL '/twitter'. When a GET request is made to '/twitter',
// the server will respond with 'deepakdas'.
app.get('/twitter', (req, res) => {
  res.send("deepakdas");
});

// Define a route for the URL '/login'. When a GET request is made to '/login',
// the server will respond with an HTML string that displays a heading.
app.get('/login', (req, res) => {
  res.send('<h1>hii this a first website</h1>');
});

// Start the server and make it listen on the port specified in the environment
// variables (process.env.PORT). When the server starts, log a message to the console.
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});



// Explanation
// Importing Libraries:

// const express = require('express');: This imports the Express library, which is a web framework for Node.js that simplifies the process of creating web applications and APIs.
// require('dotenv').config();: This loads environment variables from a .env file into process.env. This is useful for managing configuration variables that you don't want to hard-code in your application, such as the port number, database credentials, etc.
// Creating an Express Application:

// const app = express();: This creates an instance of an Express application.
// Defining Routes:

// app.get('/', (req, res) => { res.send('Hello World!'); });: This defines a route for the root URL ('/'). When a GET request is made to the root URL, the server responds with 'Hello World!'.
// app.get('/twitter', (req, res) => { res.send("deepakdas"); });: This defines a route for the URL /twitter. When a GET request is made to /twitter, the server responds with 'deepakdas'.
// app.get('/login', (req, res) => { res.send('<h1>hii this a first website</h1>'); });: This defines a route for the URL /login. When a GET request is made to /login, the server responds with an HTML string that displays a heading.
// Starting the Server:

// app.listen(process.env.PORT, () => { console.log(Example app listening on port ${process.env.PORT}); });: This starts the server and makes it listen on the port specified in the environment variables (process.env.PORT). When the server starts, it logs a message to the console indicating the port number.
// Environment Variables
// Environment Variables: These are variables that are used to configure the environment in which an application runs. They are typically defined in a .env file, which looks something like this:

// makefile
// Copy code
// PORT=3000
// Accessing Environment Variables: You can access environment variables in your Node.js application using process.env.VARIABLE_NAME. In this case, process.env.PORT is used to get the port number on which the server should listen.

// This setup is a basic structure for an Express application, which you can expand by adding more routes, middleware, and other features as needed.