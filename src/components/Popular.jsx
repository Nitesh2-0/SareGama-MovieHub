import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import VerticalCart from './templates/VerticalCart';
import { useNavigate } from 'react-router-dom';
import TopNav from './templates/TopNav';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

const Popular = () => {
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  document.title = "MovieHUB | POPULAR " + page

  const getPopularPerson = async () => {
    try {
      const { data } = await axios.get(`/person/popular?page=${page}`);
      setPerson((prev) => [...prev, ...data.results])
      setPage(page + 1)
    } catch (error) {
      console.error('Error fetching popular persons:', error);
    }
  };

  const BackHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    getPopularPerson();
  }, []);

  const scrollToTop = () => {
    setPage(1)
    window.scrollTo({top:0, behavior:'smooth'})
  }

  return person.length > 0 ? (
    <div
      className="w-screen h-screen"
    >
      <div className="w-full text-zinc-100 px-8 py-1 flex items-center gap-0">
        <h1 className="cursor-pointer text-xl font-semibold flex items-center">
          <i
            onClick={BackHandler}
            className="ri-arrow-left-line text-[15px] bg-zinc-700 hover:border-2 hover:bg-black px-2 rounded-full mr-2"
          ></i>
          Popular
        </h1>
        <TopNav />
      </div>
      <InfiniteScroll
        dataLength={person.length} 
        next={getPopularPerson}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        className='flex-grow overflow-hidden'
      >
        <VerticalCart title="popular" category="" duration="" data={person} />
      </InfiniteScroll>
      {page > 2 && (
        <div
          className='rounded-full px-3 text-zinc-100 py-2 bg-zinc-600 fixed bottom-10 right-2 z-50 cursor-pointer'
          onClick={scrollToTop}
        >
          <i className="ri-arrow-up-fill"></i>
        </div>
      )}
    </div>
  ) : <div className='w-screen h-screen flex justify-center items-center'><Loader /></div>;
};

export default Popular;
