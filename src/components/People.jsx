import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from './templates/TopNav';
import axios from '../utils/axios';
import Dropdown from './templates/Dropdown';
import VerticalCart from './templates/VerticalCart';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';

const People = () => {
  const [category, setCategory] = useState("popular");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  document.title = "MovieHUB | Peopel"

  const GetPeopel = async () => {
    try {
      const { data } = await axios.get(`/person/${peopel}`);
      setCategory((prevData) => [...prevData, ...data.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetPeopel()
  });

  const BackHandler = () => {
    navigate(-1);
  };

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='w-full h-full min-h-screen bg-[#1F1E24] flex flex-col'>
    <div className='w-full text-zinc-100 px-8 py-1 flex items-center justify-between'>
      <h1 className='cursor-pointer text-xl font-semibold flex items-center'>
        <i
          onClick={BackHandler}
          className="ri-arrow-left-line text-[15px] bg-zinc-700 hover:border-2 hover:bg-black px-2 rounded-full mr-2"
        ></i>
        People
      </h1>
      <TopNav />
     
    </div>
    <InfiniteScroll
      dataLength={category.length}
      next={GetPeopel}
      hasMore={true}
      loader={
        <div className='w-screen h-full flex text-center items-center justify-center text-white'>
          <Loader />
        </div>
      }
      className='flex-grow overflow-hidden'
    >
      <VerticalCart data={category}  />
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
  )
}

export default People