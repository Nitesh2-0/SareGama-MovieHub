import { useEffect, useState } from 'react';
import Nav from './templates/Nav';
import TopNav from './templates/TopNav';
import axios from "../utils/axios";
import Header from './templates/Header';
import Card from './templates/Card';
import Loader from './Loader';

const Home = () => {
  document.title = "MovieHUB | All";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    console.log('a;a,c');
  };

  const getBackgroundWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const randomWallpaper = data.results[randomIndex];
      setWallpaper(randomWallpaper);
    } catch (error) {
      console.error(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category.toLowerCase()}/day`);
      setTrending(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getTrending();
      if (!wallpaper) {
        await getBackgroundWallpaper();
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  return (
    loading ? (
      <div className='w-screen h-screen flex text-center items-center justify-center text-white'>
        <Loader />
      </div>
    ) : (
      <>
        <Nav />
        <div className="w-[83%] h-screen relative">
          <div className='absolute -top-1 w-full '>
            <i className="z-50 px-2 py-1 hover:bg-[#1F1E24] duration-1000 rounded-full bg-[#1f1e248f] cursor-pointer ri-search-line absolute left-10 text-xl font-semibold text-zinc-200 top-5" onClick={toggleSearch}></i>
            {showSearch && <TopNav />}
          </div>
          <Header data={wallpaper} />
          <Card data={trending} func={setCategory} />
        </div>
      </>
    )
  );
};

export default Home;
