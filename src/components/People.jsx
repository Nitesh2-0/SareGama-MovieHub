import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';
import TopNav from './templates/TopNav';
import InfiniteScroll from 'react-infinite-scroll-component';
import VerticalCart from './templates/VerticalCart';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const People = () => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const GetPeople = async () => {
    try {
      const { data } = await axios.get(`/person/popular?page=${page}`);
      setPeople((prev) => [...prev, ...data.results]);
      setPage(page + 1);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const BackHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    GetPeople();
  }, []);

  console.log(people);

  return people.length > 0 ? (
    <div className='text-zinc-300 w-screen h-screen'>
      <div className='w-full text-zinc-100 px-8 py-1 flex items-center justify-between'>
        <h1 className=' w-[20vw] cursor-pointer text-xl font-semibold flex items-center'>
          <i
            onClick={BackHandler}
            className="ri-arrow-left-line text-[15px] bg-zinc-700 hover:border-2 hover:bg-black px-2 rounded-full mr-2"
          ></i>
          People
        </h1>
        <TopNav />
      </div>
      <InfiniteScroll
        dataLength={people.length}
        next={GetPeople}
        hasMore={true}
        loader={<h1 className='text-center bg-[#1F1E24] font-semibold text-white'>Loading...</h1>}
      >
        <VerticalCart category="" duration="" data={people} />
      </InfiniteScroll>
    </div>
  ) : (
    <div className='w-screen h-screen flex justify-center items-center'><Loader /></div>
  );
};

export default People;
