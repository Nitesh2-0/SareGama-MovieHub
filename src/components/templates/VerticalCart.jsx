import React from 'react';
import Loader from './../Loader';
import { Link } from 'react-router-dom';

const VerticalCart = ({ data, category, duration }) => {
  return data ? (
    <div className='w-full h-full bg-[#1F1E24] overflow-x-hidden'>
      <div className='w-full text-zinc-400 flex justify-between px-4 sm:px-16'>
        {category ? <h2>CATEGORY: {category.toUpperCase()}</h2> : ""}
        {duration ? <h2>DURATION: {duration.toUpperCase()}</h2> : ""}
      </div>
      <div className='text-white p-4 flex flex-wrap justify-center gap-4 sm:gap-8'>
        {data.map((c, i) => (
          <Link 
            key={i}  
            className='w-40 relative sm:w-64 h-80 sm:h-96 text-zinc-300 transform transition-transform duration-200 hover:scale-105 shadow-md hover:shadow-lg'
           
          >
            {c.backdrop_path || c.poster_path || c.profile_path ? (
              <img 
                className='w-full h-[80%] sm:h-[90%] object-cover' 
                src={`https://image.tmdb.org/t/p/original/${c.backdrop_path || c.poster_path || c.profile_path}`} 
                alt={c.title || c.original_title || c.name || c.original_name || 'Image'}
              />
            ) : (
              <img 
                className='w-full h-[80%] sm:h-[90%] object-cover' 
                src="https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                alt={c.title || c.original_title || c.name || c.original_name || 'Image'}
              />
            )}
            <h1 className='py-2'>
              {c.title?.slice(0, 10) || c.original_title?.slice(0, 10) || c.name?.slice(0, 10) || c.original_name?.slice(0, 10)}
            </h1>
            {c.vote_average ? (
              <div className='w-12 h-12 absolute right-[-8%] bottom-[20%] bg-yellow-600 rounded-full flex justify-center items-center text-white p-1 font-semibold'>
                {(c.vote_average * 10).toFixed()}<sup>%</sup>
              </div>
            ) : ""}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default VerticalCart;
