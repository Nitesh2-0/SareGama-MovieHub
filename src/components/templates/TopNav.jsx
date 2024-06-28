import { useState } from 'react';
// import { Link } from 'react-router-dom';
const TopNav = () => {
const [Query, setQuery] = useState("")
  return (
    <div className="bg-[#1F1E24] w-full h-[10vh] relative flex justify-center items-center">
      <i className="ri-search-line cursor-pointer text-zinc-400 text-xl p-1"></i>
      <input
        className="p-2 bg-transparent w-[50%] px-5 outline-none text-zinc-200"
        type="text"
        placeholder="Search anything...."
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={Query}
      />
      {Query.length > 0 && <i className="ri-close-line cursor-pointer text-zinc-400 text-2xl p-1" onClick={() => setQuery("")}></i>}

      <div className="w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[79%] overflow-y-auto overflow-x-hidden rounded">
        {/* <Link className='flex w-full p-7 border-b-2 border-zinc-100 font-semibold text-zinc-700 hover:bg-zinc-300 duration-100 hover:text-black'>
          <img src="" alt="" />
          <span>Hello World</span>
        </Link> */}
      </div>

    </div>
  );
}

export default TopNav;
