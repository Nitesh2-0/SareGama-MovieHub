import { useEffect, useState } from 'react'
import Nav from './templates/Nav';
import TopNav from './templates/TopNav';
import axios from "../utils/axios";
import Header from './templates/Header';
import Card from './templates/Card';
import website_loader from '/website_loader.gif'

const Home = () => {
  document.title = "SareGama | Movie HUB"
  const [wallpaper, setWallpaper] = useState(null)
  const [trending, setTrending] = useState(null)
  const [category, setCategory] = useState("all")
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
      const { data } = await axios.get(`/trending/${category}/day`)
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetTrending();
    !wallpaper && getBackgroundWallpaper();
  }, [category])

  return wallpaper && trending ? <>
    <Nav />
    <div className="w-[80%] h-screen">
      <TopNav />
      <Header data={wallpaper} />
      <Card data={trending} func={setCategory} />
    </div>
  </> : <website_loader />
}

export default Home