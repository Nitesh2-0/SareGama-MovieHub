import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [duration, setDuration] = useState('day');
  const [page, setPage] = useState(1);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`trending/movie/${duration.toLowerCase()}?page=${page}`);
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setMovies([]); 
    setPage(1); 
    getMovies();
  }, [duration]);

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <div className='text-zinc-300'>
      <h1>Movies</h1>
    </div>
  );
};

export default Movie;
