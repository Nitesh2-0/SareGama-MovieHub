import {useEffect, useState} from 'react'
import Nav from './templates/Nav';
import TopNav from './templates/TopNav';
import  axios  from "../utils/axios";
import Header from './templates/Header';

const Home = () => {
  document.title = "SareGama | Movie App"
  const [wallpaper, setWallpaper] = useState(null)
  const getBackgroundWallpaper = async () => {
    try {
      const {data} = await axios.get(`/trending/all/day`) 
      // console.log(data.results);
      const randomWallpaper = data.results[(Math.random()*data.results.length).toFixed()];
      setWallpaper(randomWallpaper==0 ? 1:randomWallpaper)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    !wallpaper && getBackgroundWallpaper();
  }, [])
  return wallpaper ? <>
    <Nav />
    <div className="w-[80%] h-full">
      <TopNav />
      <Header data={wallpaper}></Header>
    </div>
  </>: <h1 className='text-white'>Loading...</h1>
}

export default Home