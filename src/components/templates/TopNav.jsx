import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import { Link } from 'react-router-dom';
import noImg from '/noImg.jpg';

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (query.length > 0) {
      getSearches();
    }
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center px-4 md:px-8 ">
      <div className='w-full md:w-3/4 lg:w-2/3 relative'>
        <div className="flex items-center bg-[#1f1e24cb] rounded-lg overflow-hidden border-2 border-zinc-600 focus-within:border-blue-500 transition-all duration-300">
          <i className="ri-search-line cursor-pointer text-zinc-400 text-xl p-2"></i>
          <input
            className="p-2 bg-transparent w-full px-5 outline-none text-zinc-200"
            type="text"
            placeholder="Search anything...."
            aria-label="Search"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          {query.length > 0 && (
            <i className="ri-close-line cursor-pointer text-zinc-400 text-2xl p-2 ml-2" onClick={() => setQuery("")}></i>
          )}
        </div>
        {query.length > 0 && (
          <div className="z-50 w-full max-h-[50vh] bg-zinc-800 absolute top-full mt-0 overflow-y-auto overflow-x-hidden shadow-lg rounded-lg-b">
            {search.length > 0 ? (
              search.map((s, idx) => (
                <Link key={idx} className='flex items-center p-4 border-b border-zinc-100 font-semibold text-zinc-300 hover:bg-[#1F1E24] duration-100 hover:text-white'>
                  <img className='w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded mr-4 shadow-lg' src={(s.backdrop_path || s.profile_path) ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noImg} alt={s.name || s.original_name || s.title || s.original_title} />
                  <span className="text-sm md:text-base lg:text-lg">{s.name || s.original_name || s.title || s.original_title}</span>
                </Link>
              ))
            ) : (
              <div className="p-4 text-zinc-300 text-center">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
