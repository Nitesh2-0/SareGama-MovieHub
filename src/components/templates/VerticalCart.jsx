import React from 'react';
import Loader from './../Loader';
import { Link } from 'react-router-dom';

const VerticalCart = ({ data, category, duration }) => {
  return data ? (
    <div className='w-full h-full bg-[#1F1E24] overflow-x-hidden'>
      <div className='w-full text-zinc-400 flex justify-between px-4 sm:px-16'>
        {category ?  <h2>CATEGORY: {category.toUpperCase()}</h2>: ""}
        {duration ? <h2>DURATION: {duration.toUpperCase()}</h2> : ""}
      </div>
      <div className='text-white p-4 flex flex-wrap justify-center gap-4 sm:gap-8'>
        {data.map((c, i) => (
          <Link key={i} to={`/details/${c.id}`} className='w-40 sm:w-64 h-80 sm:h-96 drop-shadow-md text-zinc-300'>
            <img 
              className='w-full h-[80%] sm:h-[90%] object-cover' 
              src={`https://image.tmdb.org/t/p/original/${c.backdrop_path || c.poster_path || c.profile_path}`} 
              alt={c.title || c.original_title || c.name || c.original_name || 'Image'}
            />
            <h1 className='py-2'>{c.title || c.original_title || c.name || c.original_name}</h1>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default VerticalCart;
