import axios from '../../utils/axios';
export {removemovie} from '../reducers/movieSlice'
export {loadmovie} from '../reducers/movieSlice'

export const asyncloadmovie = (id) => async (dispath,getState) =>{
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
    let theultimatedetails = {
      detail:detail.data,
      externalid:externalid.data,
      recommendations:recommendations.data,
      similar: similar.data,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchproviders:watchproviders.data.results.IN
    }; 
    console.log(theultimatedetails);
  } catch (error) {
    console.log(error);
  }
}