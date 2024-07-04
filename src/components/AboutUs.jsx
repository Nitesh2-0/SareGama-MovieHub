import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className='w-screen h-full min-h-screen bg-[#1F1E24] text-zinc-300 flex flex-col items-center p-5'>
      <div className='w-full flex justify-start mb-6'>
        <button onClick={() => navigate(-1)} className='text-zinc-300 hover:text-white transition duration-300'>
          <i className='ri-arrow-left-line text-2xl'></i>
        </button>
      </div>
      <h1 className='text-3xl sm:text-4xl font-bold mb-6'>About Us</h1>
      <p className='text-lg sm:text-xl mb-6 max-w-2xl text-center'>
        Welcome to MovieHUB, your ultimate destination for exploring and discovering movies. We bring you the latest in cinematic entertainment, detailed information on all your favorite movies, and personalized recommendations to enhance your movie-watching experience.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mb-6'>
        <div className='bg-[#1F1E26] p-6 rounded-lg shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105'>
          <i className='ri-movie-2-line text-4xl sm:text-5xl text-zinc-300 mb-4'></i>
          <h2 className='text-xl sm:text-2xl font-semibold mb-4'>Latest Releases</h2>
          <p className='text-center text-sm sm:text-base'>Stay updated with the newest movies in the industry, from blockbusters to indie films.</p>
        </div>
        <div className='bg-[#1F1E26] p-6 rounded-lg shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105'>
          <i className='ri-information-line text-4xl sm:text-5xl text-zinc-300 mb-4'></i>
          <h2 className='text-xl sm:text-2xl font-semibold mb-4'>Detailed Information</h2>
          <p className='text-center text-sm sm:text-base'>Get comprehensive details on movies, including cast, crew, trailers, reviews, and ratings.</p>
        </div>
        <div className='bg-[#1F1E26] p-6 rounded-lg shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105'>
          <i className='ri-star-line text-4xl sm:text-5xl text-zinc-300 mb-4'></i>
          <h2 className='text-xl sm:text-2xl font-semibold mb-4'>Personalized Recommendations</h2>
          <p className='text-center text-sm sm:text-base'>Enjoy tailored movie suggestions based on your preferences and viewing history.</p>
        </div>
      </div>
      <div className='text-center'>
        <h2 className='text-xl sm:text-2xl font-semibold mb-4'>Contact Us</h2>
        <div className='flex flex-col items-center'>
          <div className='flex items-center mb-2'>
            <i className='ri-mail-line text-lg sm:text-xl text-zinc-300 mr-2'></i>
            <p className='text-sm sm:text-base'>support@moviehub.com</p>
          </div>
          <div className='flex items-center'>
            <i className='ri-phone-line text-lg sm:text-xl text-zinc-300 mr-2'></i>
            <p className='text-sm sm:text-base'>+1 234 567 890</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
