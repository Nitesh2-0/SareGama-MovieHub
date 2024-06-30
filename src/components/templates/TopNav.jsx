import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import { Link } from 'react-router-dom';
import noImg from '/noImg.jpg'

const TopNav = () => {
  const [query, setquery] = useState("");
  const [search, setsearch] = useState([])
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearch(data.results)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSearches();
  }, [query])

  return (
    <div className="bg-[#1F1E24] w-full h-[10vh] relative flex justify-center items-center">
      <div className='w-1/2 lg:w-[70%]'>
        <i className="ri-search-line cursor-pointer text-zinc-400 text-xl p-1"></i>
        <input
          className="p-2 bg-transparent w-[92%] px-5 outline-none text-zinc-200"
          type="text"
          placeholder="Search anything...."
          aria-label="Search"
          onChange={(e) => setquery(e.target.value)}
          value={query}
        />
        {query.length > 0 && <i className="ri-close-line cursor-pointer text-zinc-400 text-2xl p-1" onClick={() => setquery("")}></i>}

        <div className="w-[50%] lg:w-[68%] max-h-[50vh] bg-zinc-800 absolute top-[79%] overflow-y-auto overflow-x-hidden rounded-b">
          {search.map((s, idx) => (
            <Link key={idx} className='flex items-center w-full p-7 border-b border-zinc-100 font-semibold text-zinc-300 hover:bg-[#1F1E24] duration-100 hover:text-white'>
              <img className='w-24 h-24 rounded mr-5 shadow-lg' src={(s.backdrop_path || s.profile_path) ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noImg} alt="" />
              <span>{s.name || s.original_name || s.title || s.original_title}</span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}

export default TopNav;
