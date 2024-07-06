import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import People from './components/People'
import Popular from './components/Popular'
import Movie from './components/Movie'
import TvShows from './components/TvShows'
import AboutUs from './components/AboutUs'
import MovieDetails from './components/MovieDetails'
import TvDetails from './components/TvDetails'
import PersonDetails from './components/PersonDetails'

const App = () => {
  return <div className="bg-[#1F1E24] w-screen h-screen flex">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/trending' element={<Trending />} />
      <Route path='/popular' element={<Popular />} />
      <Route path='/movie' element={<Movie />}>
        <Route path='/movie/details/:id' element={<MovieDetails />} />
      </Route>
      <Route path='/tvshows' element={<TvShows />}>
        <Route path='/tvshows/details/:id' element={<TvDetails />} />
      </Route>
      <Route path='/people' element={<People />}>
        <Route path='/people/details/:id' element={<PersonDetails />} />
      </Route>
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/contactUs' element={<AboutUs />} />
    </Routes>
  </div>
}

export default App