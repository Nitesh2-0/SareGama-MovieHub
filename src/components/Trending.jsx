import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from './templates/TopNav';
import axios from '../utils/axios';
import Dropdown from './templates/Dropdown';
import VerticalCart from './templates/VerticalCart';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';

const Trending = () => {
  const [category, setCategory] = useState('all');
  const [duration, setDuration] = useState('day');
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  document.title = "MovieHUB | Trending " + category.toUpperCase();

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      setTrending((prevData) => [...prevData, ...data.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTrending([]);
    setPage(1);
    GetTrending();
  }, [category, duration]);

  const BackHandler = () => {
    navigate(-1);
  };

  const ScrollToTop = () => {
    setPage(1)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return trending.length > 0 ? (
    <div className='w-full h-full min-h-screen bg-[#1F1E24] flex flex-col'>
      <div className='w-full text-zinc-100 px-8 py-1 flex items-center justify-between'>
        <h1 className='cursor-pointer text-xl font-semibold flex items-center'>
          <i
            onClick={BackHandler}
            className="ri-arrow-left-line text-[15px] bg-zinc-700 hover:border-2 hover:bg-black px-2 rounded-full mr-2"
          ></i>
          Trending
        </h1>
        <TopNav />
        <div className="flex space-x-4">
          <Dropdown title={category} options={['all', 'tv', 'movie']} func={setCategory} />
          <Dropdown title={duration} options={['week', 'day']} func={setDuration} />
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={true}
        loader={<h1 className='text-white text-center font-semibold bg-[#1F1E24]'>Loading...</h1>}
        className='flex-grow overflow-hidden'
      >
        <VerticalCart title="trending" data={trending} category={category} duration={duration} />
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

export default Trending;
