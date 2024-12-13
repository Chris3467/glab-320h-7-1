import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import "./App.css";

function App() {
  const apiKey = "dede81e4";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async (searchTerm) => {
    const getMovie = async (searchTerm) => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (e) {
        console.error(e);
      }
    };
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );

    // Parse json response into a JavaScript object
    const data = await response.json();

    // Set the movie state to the received data
    setMovie(data);
  };

  // This will run on the first render but not on subsequent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
      <MovieDisplay movie={movie} />
      <Form moviesearch={getMovie} />
    </div>
  );
}

export default App;
