import React, { useEffect, useState } from 'react';
import "./medium.css"

const MovieSearch = () => {
  // State to store the fetched movies
  const [movies, setMovies] = useState([]);
  // State to store the movie search input
  const [nameFilter, setNameFilter] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch movies when nameFilter changes
  useEffect(() => {
    fetchMovies();
  }, [nameFilter]);

  // Function to fetch movies from the API
  const fetchMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${nameFilter}&api_key=ade17eed9d70b9a469535858ce186094`
    )
      .then((res) => res.json())
      .then((data) => {
        // Update the movies state with the fetched results
        setMovies(data.results);
      })
      .catch((err) => console.log(err));
  };

  // Function to apply filters based on the nameFilter
  const applyFilters = () => {
    if (!movies) {
      return [];
    }

    // Filter movies based on the title and nameFilter
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(nameFilter.toLowerCase())
    );
  };

  //handle click of movie
  const handlePosterClick = (movie) => { //passing movie paramter
    setSelectedMovie(movie);
  };

  // Get the filtered movies
  const filteredMovies = applyFilters();

  return (
    <>
      <section>
        <input
          type="text"
          placeholder="Search for movies..."
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        {filteredMovies.map((movie) => (
          <div>
            <h3>{movie.title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              onClick={() => handlePosterClick(movie)}
              style={{cursor: "pointer"}}
            />
             {/* Conditionally render the overview if selectedMovie is not null */}
            {selectedMovie && selectedMovie.id === movie.id && (
              <h4>{selectedMovie.overview}</h4>
            )}
          </div>
        ))}
      </section>
   
    </>
  );
};
export default MovieSearch;
