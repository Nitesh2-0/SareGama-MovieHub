import React, { useState,useEffect } from 'react'
import TopNav from './templates/TopNav'
import axios from '../utils/axios'
import Dropdown from './templates/Dropdown'

const Trending = () => {
  const [category, setCategory] = useState("all")
  const [duration, setDuration] = useState("day")
  const [trending, setTrending] = useState([])
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`)
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetTrending();
  }, [category,duration])
  return (
    <div className='w-screen text-white px-8 py-5 h-screen'>
      <h1 className='cursor-pointer font-semibold'><i className="ri-arrow-left-line text-[15px] bg-zinc-700 hover:bg-indigo-600 p-1 rounded-full"></i> Trending</h1>
      <TopNav  className="w-[50%]" /> 
      <Dropdown title='all'    options ={['MOVIE', 'TV', 'ALL']} func={setCategory} />
      <div className='w-24'></div>
      <Dropdown title='day'    options ={['week', 'day']}     func={setDuration} />
    </div>
  )
}

export default Trending