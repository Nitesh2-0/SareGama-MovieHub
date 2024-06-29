import axios from "axios";

const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Nzc5MzkxM2Y4MDQxYTM0NmM4Mzc3OWFkYzRiZmQwNSIsIm5iZiI6MTcxOTU5NTU1Ny4wMjE3NzEsInN1YiI6IjY2N2VlY2Y4MWMyNGY4MTY5YzZlNWFkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x21pKGFBe720R_dt1nrpS-b4OGq5h4Vi_97h-D-5fls'
  }
})

export default instance