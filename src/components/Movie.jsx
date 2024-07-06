import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';
import Dropdown from './templates/Dropdown';
import TopNav from './templates/TopNav';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import VerticalCart from './templates/VerticalCart';
import  InfiniteScroll  from 'react-infinite-scroll-component';


const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('now_playing');
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  document.title = "MoiveHUB | " + category.toUpperCase()

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setPage(page + 1)
    } catch (error) {
      console.error(error);
    }
  };

  const BackHandler = () => {
    navigate(-1)
  }

  useEffect(() => {
    setMovies([]);
    setPage(1);
    getMovies();
  }, [category]);

  const ScrollToTop = () => {
    setPage(2)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return movies.length > 0 ? (
    <div className='text-zinc-300 w-screen h-screen '>
      <div className='w-full text-zinc-100 px-8 py-1 flex items-center justify-between'>
        <h1 className='cursor-pointer text-xl font-semibold flex items-center'>
          <i
            onClick={BackHandler}
            className="ri-arrow-left-line text-[15px] bg-zinc-700 hover:border-2 hover:bg-black px-2 rounded-full mr-2"
          ></i>
          Movies
        </h1>
        <TopNav />
        <div className="flex space-x-4">
          <Dropdown title={category} options={['Popular', 'Top_Rated', 'Upcoming', 'now_playing']} func={setCategory} />
        </div>
      </div>
      <InfiniteScroll
      dataLength={movies.length}
      next={getMovies} 
      hasMore={true}
      loader = {<h1 className='text-center font-semibold text-white'>Loading...</h1>}
      >
        <VerticalCart title="movie" category={category} duration="" data={movies} />
      </InfiniteScroll>
      {page > 2 && (
        <div
          className='rounded-full px-3 text-zinc-100 py-2 bg-zinc-600 fixed bottom-10 right-2 z-50 cursor-pointer'
          onClick={ScrollToTop}
        >
          <i className="ri-arrow-up-fill"></i>
        </div>
      )}
    </div>
  ) : <div className='w-screen h-screen flex justify-center items-center'><Loader /></div>;
};

export default Movie;
