import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      {/* Sidebar for larger devices */}
      <div className='hidden lg:block w-[17%] h-full border-r border-zinc-200 p-8 text-white'>
        <div className="flex items-center">
          <i className="ri-tv-fill text-2xl text-indigo-700"></i>
          <span className="text-xl font-bold text-white ml-2">MovieHUB</span>
        </div>
        <h2 className="font-semibold mt-8 mb-4">New Feeds</h2>
        <nav className='w-full flex flex-col'>
          <Link to="/trending" className='text-zinc-300 p-5 hover:bg-indigo-700 hover:text-zinc-50 rounded-lg duration-150'>
            <i className="ri-fire-fill mr-2"></i> Trending
          </Link>
          <Link to="/popular" className='text-zinc-300 p-5 hover:bg-indigo-700 hover:text-zinc-50 rounded-lg duration-150'>
            <i className="ri-sparkling-fill mr-2"></i> Popular
          </Link>
          <Link to="/movie" className='text-zinc-300 p-5 hover:bg-indigo-700 hover:text-zinc-50 rounded-lg duration-150'>
            <i className="ri-movie-fill mr-2"></i> Movies
          </Link>
          <Link to="/tv" className='text-zinc-300 p-5 hover:bg-indigo-700 hover:text-zinc-50 rounded-lg duration-150'>
            <i className="ri-tv-2-line mr-2"></i> TV Shows
          </Link>
          <Link to="/person" className='text-zinc-300 p-5 hover:bg-indigo-700 hover:text-zinc-50 rounded-lg duration-150'>
            <i className="ri-team-fill mr-2"></i> People
          </Link>
        </nav>
        <hr className='mt-3' />
        <h2 className="font-semibold mt-8 mb-4">Website Information</h2>
        <nav className='w-full flex flex-col'>
          <Link to="/aboutUs" className='text-zinc-300 p-5 hover:bg-indigo-700 hover:text-zinc-50 rounded-lg duration-150'>
            <i className="ri-information-fill text-indigo-500 mr-2"></i> About MovieHUB
          </Link>
          <Link to="/contactUs" className='text-zinc-300 p-5 hover:bg-indigo-700 hover:text-zinc-50 rounded-lg duration-150'>
            <i className="ri-cellphone-fill mr-2"></i> Contact Us
          </Link>
        </nav>
      </div>

      {/* Navbar for mobile and tablet views */}
      <div className='lg:hidden w-full bg-gray-800 p-4 fixed bottom-0 flex z-50 justify-around text-center text-white'>
        <Link to="/trending" className='text-zinc-300 p-2 hover:text-zinc-50'>
          <i className="ri-fire-fill text-2xl"></i> Trending
        </Link>
        <Link to="/popular" className='text-zinc-300 p-2 hover:text-zinc-50'>
          <i className="ri-sparkling-fill text-2xl"></i> Popular
        </Link>
        <Link to="/movie" className='text-zinc-300 p-2 hover:text-zinc-50'>
          <i className="ri-movie-fill text-2xl"></i> Movies
        </Link>
        <Link to="/tv" className='text-zinc-300 p-2 hover:text-zinc-50'>
          <i className="ri-tv-2-line text-2xl"></i> TV Shows
        </Link>
        <Link to="/person" className='text-zinc-300 p-2 hover:text-zinc-50'>
          <i className="ri-team-fill text-2xl"></i> People
        </Link>
      </div>
    </>
  );
};

export default Nav;
