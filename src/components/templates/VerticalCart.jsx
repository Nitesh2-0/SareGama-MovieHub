import React from 'react';
import Loader from './../Loader';
import { Link } from 'react-router-dom';

const VerticalCart = ({ data, category, duration }) => {
  return data ? (
    <div className='w-screen h-screen '>
      <div className='w-screen text-zinc-400 flex justify-between px-16'>
        <h2>CATEGORY: {category.toUpperCase()}</h2>
        <h2>DURATION: {duration.toUpperCase()}</h2>
      </div>
      <div className='text-white p-4 px-4 flex flex-wrap justify-center gap-8'>
        {data.map((c, i) => (
          <Link key={i} to={`/details/${c.id}`} className='w-64 h-96 drop-shadow-md text-zinc-300'>
            <img 
              className='w-full h-[90%] object-cover' 
              src={`https://image.tmdb.org/t/p/original/${c.backdrop_path || c.poster_path}`} 
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
