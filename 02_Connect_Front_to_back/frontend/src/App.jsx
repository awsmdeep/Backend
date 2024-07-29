// Import necessary libraries and assets
import { useEffect, useState } from 'react';  // Importing React hooks useEffect and useState
import reactLogo from './assets/react.svg';   // Importing an image asset
import viteLogo from '/vite.svg';             // Importing another image asset
import './App.css';                           // Importing CSS for styling
import axios from 'axios';                    // Importing Axios for making HTTP requests

// Define the main App component
function App() {
  // Define a state variable 'jokes' and its setter function 'setJokes'
  const [jokes, setJokes] = useState([]);

  // useEffect hook to fetch jokes from the API when the component mounts
  useEffect(() => {
    // Make a GET request to the '/api/jokes' endpoint
    // The proxy in vite.config.js will direct this to the backend server
    axios.get('/api/jokes')
      .then((res) => {
        // On successful response, update the 'jokes' state with the received data
        setJokes(res.data);
      })
      .catch((err) => {
        // Log any errors that occur during the request
        console.log(err);
      });
  }, []); // Empty dependency array means this effect runs only once, after the initial render

  // Return JSX to render the component UI
  return (
    <>
      <h1>hii deep</h1>
      <p>JOKES : {jokes.length}</p> {/* Display the number of jokes */}

      {/* Map over the jokes array and render each joke */}
      {jokes.map((joke, index) => (
        // Each joke needs a unique 'key' prop; using 'joke.id' here
        <div key={joke.id}>
          <h3>{joke.title}</h3> {/* Display the joke title */}
          <p>{joke.content}</p> {/* Display the joke content */}
        </div>
      ))}
    </>
  );
}

// Export the App component as the default export
export default App;
