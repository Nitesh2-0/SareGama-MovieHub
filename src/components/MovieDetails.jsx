import React, { useEffect } from 'react'
import { asyncloadmovie, removemovie } from '../store/actions/movieAction'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncloadmovie(id))
  }, [])
  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails