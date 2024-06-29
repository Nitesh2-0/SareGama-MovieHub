import { Link } from 'react-router-dom'
const Nav = () => {
  return <>
    <div className='w-[20%] h-full border-r border-zinc-200 p-8  text-white'>
      <i className="ri-tv-fill text-2xl text-indigo-700"></i><span className="text-xl font-bold text-white ml-2">SareGama</span>
      <h2 className="font-semibold mt-8 mb-4">New Feeds</h2>
      <nav className='w-full flex flex-col'>
        <Link className='text-zinc-300 p-5 hover:bg-indigo-700 hover:text-zinc-50 rounded-lg duration-150 '><i className="ri-fire-fill"></i> Trending</Link>
        <Link className='text-zinc-300 p-5 hover:bg-indigo-700 hover:text-zinc-50 rounded-lg duration-150 '><i className="ri-sparkling-fill"></i> Popular</Link>
        <Link className='text-zinc-300 p-5 hover:bg-indigo-700 hover:text-zinc-50 rounded-lg duration-150 '><i className="ri-movie-fill"></i> Movies</Link>
        <Link className='text-zinc-300 p-5 hover:bg-indigo-700 hover:text-zinc-50 rounded-lg duration-150 '><i className="ri-tv-2-line"></i> Tv Shows</Link>
        <Link className='text-zinc-300 p-5 hover:bg-indigo-700 hover:text-zinc-50 rounded-lg duration-150 '><i className="ri-team-fill"></i> People</Link>
      </nav>
      <hr className='mt-3' />
      <h2 className="font-semibold mt-8 mb-4">Website Information</h2>
      <nav className='w-full flex flex-col'>
        <Link className='text-zinc-300 p-5 hover:bg-indigo-700 hover:text-zinc-50 rounded-lg duration-150 '><i className="ri-information-fill text-indigo-500 hover:text-yellow-300"></i> About SareGama</Link>
        <Link className='text-zinc-300 p-5 hover:bg-indigo-700 hover:text-zinc-50 rounded-lg duration-150 '><i className="ri-cellphone-fill"></i> Contact Us</Link>
      </nav>
    </div>
  </>
}

export default Nav