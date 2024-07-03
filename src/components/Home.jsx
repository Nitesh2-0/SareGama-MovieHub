import { useEffect, useState } from 'react'
import Nav from './templates/Nav';
import TopNav from './templates/TopNav';
import axios from "../utils/axios";
import Header from './templates/Header';
import Card from './templates/Card';
import Loader from './Loader';

const Home = () => {
  document.title = "MovieHUB | All"
  const [wallpaper, setWallpaper] = useState(null)
  const [trending, setTrending] = useState(null)
  const [category, setCategory] = useState("all")
  const [loading, setLoading] = useState(true)
  const getBackgroundWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`)
      const randomWallpaper = data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomWallpaper == 0 ? 1 : randomWallpaper)
    } catch (error) {
      console.log(error);
    }
  }
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category.toLowerCase()}/day`)
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetTrending();
    !wallpaper && getBackgroundWallpaper();
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [category])

  return wallpaper && trending ? <>
    <Nav />
    <div className="w-[80%] h-screen">
      <TopNav />
      <Header data={wallpaper} />
      <Card data={trending} func={setCategory} />
    </div>
  </> : <div className=' w-screen h-screen flex text-center items-center justify-center text-white'><Loader /></div>
}

export default Home