import React from "react";
import { Link } from 'react-router-dom';

const Header = ({ data }) => {
  console.log(data);
  const backgroundUrl = data
    ? `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`
    : "none";
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.8)), ${backgroundUrl}`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      className="w-[100%] lg:w-full h-[40%] lg:h-[60vh] bg-cover bg-center p-10 flex flex-col justify-end items-start"
    >
      <h1 className="font-black text-white text-5xl mb-2 w-[70%]">{data.name || data.original_name || data.title || data.original_title}</h1>
      <p className="text-white w-[70%] mt-2 mb-2">{data.overview.slice(0, 100)}...<Link to={`/${data.media_type}/details/${data.id}`} className="text-indigo-400">more</Link></p>
      <p className="text-white">
        <i className="ri-megaphone-fill text-yellow-400 mr-2"></i>{data.first_air_date ? data.first_air_date : 'No Information'}
        <i className="ri-video-line text-red-600 ml-4"></i>  {data.media_type ? data.media_type.toUpperCase() : 'No Info.'}
      </p>
      <Link className="p-3 bg-indigo-500 mt-4 rounded text-white">Watch Trailer</Link>
    </div>
  );
};

export default Header;
