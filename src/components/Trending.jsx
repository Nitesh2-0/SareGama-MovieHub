import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from './templates/TopNav';
import axios from '../utils/axios';
import Dropdown from './templates/Dropdown';

const Trending = () => {
  const [category, setCategory] = useState('all');
  const [duration, setDuration] = useState('day');
  const [trending, setTrending] = useState([]);
  const navigate = useNavigate();

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetTrending();
  }, [category, duration]);

  const BackHandler = () => {
    navigate(-1);
  };

  return (
    <div className='w-screen h-screen overflow-x-hidden overflow-y-auto'>
      <div className='w-screen h-20 text-zinc-100 px-8 py-5 flex items-center'>
        <h1 className='cursor-pointer text-xl font-semibold'>
          <i
            onClick={BackHandler}
            className="ri-arrow-left-line text-[15px] bg-zinc-700 hover:border-2 hover:bg-black p-1 rounded-full mr-2"
          ></i>
          Trending
        </h1>
        <TopNav />
        <Dropdown title='Category' options={['all', 'tv', 'movie']} func={setCategory} />
        <Dropdown title='Duration' options={['day', 'week']} func={setDuration} />
      </div>
    </div>
  );
};

export default Trending;
