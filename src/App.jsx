import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
const App = () => {
  return <div className="bg-[#1F1E24] w-screen h-screen flex overflow-hidden">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
  </div>
}

export default App