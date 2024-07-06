import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const Card = ({ data, func }) => {
  const scrollRef = React.useRef(null);

  const scrollLeftHandler = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };

  const scrollRightHandler = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className='w-full h-[40vh] p-2 px-4 overflow-auto relative'>
      <div className='w-full flex justify-between items-center mt-2'>
        <h1 className='text-2xl mb-3 font-semibold text-zinc-300'>Trending</h1>
        <Dropdown title='Filter' options={['all', 'tv', 'movie']} func={func} />
      </div>
      <button onClick={scrollLeftHandler} className="absolute hover:bg-zinc-600 hover:text-white top-[65%] left-1 text-zinc-400 cursor-pointer px-2 py-1 bg-gray-700 rounded-full z-50">
        <i className="ri-arrow-left-circle-fill"></i>
      </button>
      <div ref={scrollRef} className='w-full mt-4 mb-2 h-full overflow-auto flex overflow-y-hidden gap-3'>
        {data.map((item, index) => (
          <div key={index} className="w-[400px] lg:w-1/5 shadow-md lg:h-98 rounded flex-shrink-0 flex flex-col items-center">
            <img className='w-full rounded-t' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`} alt="" />
            <div className="bg-gray-800 p-4 w-full rounded-b">
              <h1 className="font-black text-zinc-200 text-xl mb-2 truncate w-full">
                {item.name || item.original_name || item.title || item.original_title}
              </h1>
              <p className='text-gray-300 text-sm mb-2 '>{item.overview.slice(0, 70)}... <Link className="text-indigo-400">more</Link></p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={scrollRightHandler} className="absolute  hover:bg-zinc-600 hover:text-white top-[65%] right-1 text-zinc-400 cursor-pointer px-2 py-1 bg-gray-700 rounded-full z-50">
        <i className="ri-arrow-right-circle-fill"></i>
      </button>
    </div>
  );
};

export default Card;
