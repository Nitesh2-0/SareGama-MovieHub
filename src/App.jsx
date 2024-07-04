import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import People from './components/People'
import Popular from './components/Popular'
import Movie from './components/Movie'
import TvShows from './components/TvShows'
const App = () => {
  return <div className="bg-[#1F1E24] w-screen h-screen flex">
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/trending' element={<Trending />}></Route>
      <Route path='/popular' element={<Popular />}></Route>
      <Route path='/movie' element={<Movie />}></Route>
      <Route path='/tvshows' element={<TvShows />}></Route>
      <Route path='/people' element={<People />}></Route>
    </Routes>
  </div>
}

export default App