import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from './templates/TopNav';
import axios from '../utils/axios';
import Dropdown from './templates/Dropdown';
import VerticalCart from './templates/VerticalCart';

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
    <div className='w-screen h-screen bg-[#1F1E24]  overflow-x-hidden'>
      <div className='w-screen h-20 text-zinc-100 px-8 py-5 flex items-center'>
        <h1 className='cursor-pointer text-xl font-semibold'>
          <i
            onClick={BackHandler}
            className="ri-arrow-left-line text-[15px] bg-zinc-700 hover:border-2 hover:bg-black p-1 rounded-full mr-2"
          ></i>
          Trending
        </h1>
        <TopNav />
        <Dropdown title={category} options={['ALL', 'TV', 'MOVIER']} func={setCategory} />
        <Dropdown title={duration} options={['week', 'day']} func={setDuration} />
      </div>
      <VerticalCart data={trending} category={category} duration={duration}/>
    </div>
  );
};

export default Trending;
