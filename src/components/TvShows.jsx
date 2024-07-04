import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from './templates/TopNav';
import Dropdown from './templates/Dropdown';
import VerticalCart from './templates/VerticalCart';
import axios from '../utils/axios';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

const TvShows = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('Airing_Today');
  const [tvShows, setTvShows] = useState([])
  const [page, setPage] = useState(1);

  const GetTvShows = async () => {
    try {
      const { data } = await axios.get(`/tv/${category.toLowerCase()}?page=${page}`)
      setTvShows((prev) => [...prev,...data.results])
      setPage(page + 1)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setTvShows([])
    setPage(1)
    GetTvShows()
  }, [category])

  const BackHandler = () => {
    navigate(-1);
  }
  const ScrollToTop = () => {
    setPage(1)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return tvShows.length > 0 ? (
    <div className='text-zinc-300 w-screen h-screen '>
      <div className='w-full text-zinc-100 px-8 py-1 flex items-center justify-between'>
        <h1 className=' w-[20vw] cursor-pointer text-xl font-semibold flex items-center'>
          <i
            onClick={BackHandler}
            className="ri-arrow-left-line text-[15px] bg-zinc-700 hover:border-2 hover:bg-black px-2 rounded-full mr-2"
          ></i>
          Tv Shows
        </h1>
        <TopNav />
        <div className="flex space-x-4">
          <Dropdown title={category} options={['popular','top_rated', 'on_the_air']} func={setCategory} />
        </div>
      </div>
      <InfiniteScroll
        dataLength={tvShows.length}
        next={GetTvShows}
        hasMore={true}
        loader={<h1 className='text-center bg-[#1F1E24] font-semibold text-white'>Loading...</h1>}
      >
        <VerticalCart category="" duration="" data={tvShows} />
      </InfiniteScroll>
      {page > 3 && (
        <div
          className='rounded-full px-3 text-zinc-100 py-2 bg-zinc-600 fixed bottom-10 right-2 z-50 cursor-pointer'
          onClick={ScrollToTop}
        >
          <i className="ri-arrow-up-fill"></i>
        </div>
      )}
    </div>
  ) : <div className='w-screen h-screen flex justify-center items-center'><Loader /></div>;
}

export default TvShows;