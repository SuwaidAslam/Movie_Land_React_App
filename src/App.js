// import './App.css';
import { useState, useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=2d16cea6"


const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    const [movies, setMovies] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
        <div className="app">
            <h1>Movie Land</h1>
            <div className='search'>
                <input placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={searchIcon}
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (<MovieCard movie={movie} />))}
                        </div>
                    ) : (
                        <div className='container'>
                            <h2>No movies Found!</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;
